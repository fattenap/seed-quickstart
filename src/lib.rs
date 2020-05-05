mod utils;

use seed::{*, prelude::*};

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

struct Model {
  pub val: i32,
}

impl Default for Model {
  fn default() -> Self {
      Self {
          val: 0,
      }
  }
}

#[derive(Clone)]
enum Msg {
  Increment,
}

fn update(msg: Msg, model: &mut Model, _: &mut impl Orders<Msg>) {
  match msg {
      Msg::Increment => model.val += 1,
  }
}

fn view(model: &Model) -> Node<Msg> {
  button![
      simple_ev(Ev::Click, Msg::Increment),
      format!("Hello World × {}", model.val)
  ]
}

#[wasm_bindgen(start)]
pub fn start() {
    utils::set_panic_hook();
    App::builder(update, view)
        .build_and_start();
}