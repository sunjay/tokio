#[cfg(all(feature = "test-util", tokio_unstable))]
mod unstable {
    use std::future::Future;
    use std::pin::Pin;
    use std::sync::Arc;
    use tokio::Syscalls;
    use tokio::runtime::Builder;

    tokio::task_local! {
        static TASK_ID: u32;
    }

    struct TestSyscalls;

    impl Syscalls for TestSyscalls {
        fn spawn(&self, future: Pin<Box<dyn Future<Output = ()>>>) -> Pin<Box<dyn Future<Output = ()>>> {
            Box::pin(TASK_ID.scope(42, future))
        }
    }

    async fn test_spawned_task_intercepted() {
        let inner_task_local = tokio::spawn(async {
            TASK_ID.get()
        }).await.unwrap();
        assert_eq!(42, inner_task_local);
    }

    #[test]
    fn syscall_spawn() {
        let syscalls = Arc::new(TestSyscalls);
        let mut runtime = Builder::new()
            .enable_all()
            .basic_scheduler()
            .syscalls(syscalls)
            .build()
            .unwrap();
        
        runtime.block_on(test_spawned_task_intercepted());
    }
}
