use crate::runtime::task::RawTask;
use std::fmt;
use std::future::Future;
use std::pin::Pin;
use std::task::{Context, Poll};

doc_rt_core! {
    /// An owned permission to join on a task (await its termination).
    ///
    /// This can be thought of as the equivalent of [`std::thread::JoinHandle`] for
    /// a task rather than a thread.
    ///
    /// A `JoinHandle` *detaches* the associated task when it is dropped, which
    /// means that there is no longer any handle to the task, and no way to `join`
    /// on it.
    ///
    /// This `struct` is created by the [`task::spawn`] and [`task::spawn_blocking`]
    /// functions.
    ///
    /// # Examples
    ///
    /// Creation from [`task::spawn`]:
    ///
    /// ```
    /// use tokio::task;
    ///
    /// # async fn doc() {
    /// let join_handle: task::JoinHandle<_> = task::spawn(async {
    ///     // some work here
    /// });
    /// # }
    /// ```
    ///
    /// Creation from [`task::spawn_blocking`]:
    ///
    /// ```
    /// use tokio::task;
    ///
    /// # async fn doc() {
    /// let join_handle: task::JoinHandle<_> = task::spawn_blocking(|| {
    ///     // some blocking work here
    /// });
    /// # }
    /// ```
    ///
    /// Child being detached and outliving its parent:
    ///
    /// ```no_run
    /// use tokio::task;
    /// use tokio::time;
    /// use std::time::Duration;
    ///
    /// # #[tokio::main] async fn main() {
    /// let original_task = task::spawn(async {
    ///     let _detached_task = task::spawn(async {
    ///         // Here we sleep to make sure that the first task returns before.
    ///         time::delay_for(Duration::from_millis(10)).await;
    ///         // This will be called, even though the JoinHandle is dropped.
    ///         println!("♫ Still alive ♫");
    ///     });
    /// });
    ///
    /// original_task.await.expect("The task being joined has panicked");
    /// println!("Original task is joined.");
    ///
    /// // We make sure that the new task has time to run, before the main
    /// // task returns.
    ///
    /// time::delay_for(Duration::from_millis(1000)).await;
    /// # }
    /// ```
    ///
    /// [`task::spawn`]: crate::task::spawn()
    /// [`task::spawn_blocking`]: crate::task::spawn_blocking
    /// [`std::thread::JoinHandle`]: std::thread::JoinHandle
    pub struct JoinHandle<T> {
        inner: Inner<T>
    }
}

cfg_not_test_util_unstable! {
    use std::marker::PhantomData;

    struct Inner<T> {
        raw: Option<RawTask>,
        _p: PhantomData<T>
    }

    impl<T> JoinHandle<T> {
        pub(super) fn new(raw: RawTask) -> JoinHandle<T> {
            JoinHandle {
                inner: Inner { raw: Some(raw), _p: PhantomData  }
            }
        }
    }

    impl<T> Future for JoinHandle<T> {
        type Output = super::Result<T>;

        fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output> {
            // Keep track of task budget
            ready!(crate::coop::poll_proceed(cx));

            let Inner { raw, .. } = self.get_mut().inner;

            // Raw should always be set. If it is not, this is due to polling after
            // completion
            let raw = raw
                .as_ref()
                .expect("polling after `JoinHandle` already completed");
            let mut ret = Poll::Pending;
            // Try to read the task output. If the task is not yet complete, the
            // waker is stored and is notified once the task does complete.
            //
            // The function must go via the vtable, which requires erasing generic
            // types. To do this, the function "return" is placed on the stack
            // **before** calling the function and is passed into the function using
            // `*mut ()`.
            //
            // Safety:
            //
            // The type of `T` must match the task's output type.
            unsafe {
                raw.try_read_output(&mut ret as *mut _ as *mut (), cx.waker());
            }

            ret
        }
    }
}

cfg_test_util_unstable! {
    use crate::sync::oneshot;

    struct Inner<T> {
        raw: Option<RawTask>,
        oneshot: oneshot::Receiver<T>,
    }

    impl<T> JoinHandle<T> {
        pub(super) fn new(raw: RawTask, rx: oneshot::Receiver<T>) -> JoinHandle<T> {
            JoinHandle { inner: Inner { raw: Some(raw), oneshot: rx } }
        }
    }

    impl<T> Future for JoinHandle<T> {
        type Output = super::Result<T>;
        fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output> {
            // Keep track of task budget
            ready!(crate::coop::poll_proceed(cx));
            let Inner { raw, ref mut oneshot, .. } = self.get_mut().inner;
            // Raw should always be set. If it is not, this is due to polling after
            // completion
            let raw = raw
                .as_ref()
                .expect("polling after `JoinHandle` already completed");

            // When the Syscall trait is active, all spawned futures will result in ().
            // Their results are instead captured in a oneshot::Receiver.
            let mut ret: Poll<super::Result<()>> = Poll::Pending;

            unsafe {
                raw.try_read_output(&mut ret as *mut _ as *mut (), cx.waker());
            }
            match ret {
                Poll::Ready(Err(e)) => Poll::Ready(Err(e)),
                Poll::Ready(Ok(())) => {
                    // If the task did not panic, it's return should always be available on
                    // the oneshot channel.
                    let result = oneshot.try_recv().expect("task should have completed");
                    Poll::Ready(Ok(result))
                },
                Poll::Pending => Poll::Pending,
            }
        }
    }
}

unsafe impl<T: Send> Send for JoinHandle<T> {}
unsafe impl<T: Send> Sync for JoinHandle<T> {}

impl<T> Unpin for JoinHandle<T> {}

impl<T> Drop for JoinHandle<T> {
    fn drop(&mut self) {
        if let Some(raw) = self.inner.raw.take() {
            if raw.header().state.drop_join_handle_fast().is_ok() {
                return;
            }

            raw.drop_join_handle_slow();
        }
    }
}

impl<T> fmt::Debug for JoinHandle<T>
where
    T: fmt::Debug,
{
    fn fmt(&self, fmt: &mut fmt::Formatter<'_>) -> fmt::Result {
        fmt.debug_struct("JoinHandle").finish()
    }
}
