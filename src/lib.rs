use seed::{prelude::*, *};

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

fn init(_: Url, _: &mut impl Orders<Msg>) -> Model {
  Model::default()
}

type Model = i32;

#[derive(Clone)]
enum Msg {
  Increment,
}

fn update(msg: Msg, model: &mut Model, _: &mut impl Orders<Msg>) {
  match msg {
    Msg::Increment => *model += 1,
  }
}

fn view(model: &Model) -> Node<Msg> {
  button![
    class!["btn btn-blue", "m-4"],
    simple_ev(Ev::Click, Msg::Increment),
    format!("Hello World × {}", model)
  ]
}

#[wasm_bindgen(start)]
pub fn run() {
  App::start("root", init, update, view);
}
