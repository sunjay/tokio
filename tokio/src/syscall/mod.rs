//! The [syscall] module is intended to provide a centralized location
//! for interacting with OS resources such as disks and network.
//!
//! ## Extension
//! The Syscall trait allows hooking into implementations of Tokio
//! disk and networking resources to supply alternate implementations
//! or mocks.
//!
//! Extension requires compiling with `--cfg tokio_unstable` in addition
//! to the `syscall` feature flag.
//!
//! [syscall]:crate::syscall
mod default;
use std::future::Future;
use std::pin::Pin;

pub(crate) use default::DefaultSyscalls;

/// Syscalls trait allows for hooking into the Tokio runtime.
pub trait Syscalls: Send + Sync {
    /// Hook into tokio::spawn
    fn spawn(&self, future: Pin<Box<dyn Future<Output = ()>>>)
        -> Pin<Box<dyn Future<Output = ()>>>;
}
