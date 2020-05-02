mod app;
mod utils;

use seed::{App, prelude::wasm_bindgen};
use app::{update, view};

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen(start)]
pub fn render() {
    utils::set_panic_hook();
    App::builder(update, view)
        .build_and_start();
}