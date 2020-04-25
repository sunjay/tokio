//! Default [Syscalls]
use super::Syscalls;
use std::pin::Pin;
use std::future::Future;

pub(crate) struct DefaultSyscalls;

impl Syscalls for DefaultSyscalls {
    fn spawn(&self, future: Pin<Box<dyn Future<Output = ()>>>) -> Pin<Box<dyn Future<Output = ()>>> {
        future
    }
}
