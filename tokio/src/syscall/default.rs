//! Default [Syscalls]
use super::Syscalls;
use std::future::Future;
use std::pin::Pin;

pub(crate) struct DefaultSyscalls;

impl Syscalls for DefaultSyscalls {
    fn spawn(
        &self,
        future: Pin<Box<dyn Future<Output = ()>>>,
    ) -> Pin<Box<dyn Future<Output = ()>>> {
        future
    }
}
