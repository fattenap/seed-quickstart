use seed::{*, prelude::*};

pub struct Model {
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
pub enum Msg {
  Increment,
}

pub fn update(msg: Msg, model: &mut Model, _: &mut impl Orders<Msg>) {
  match msg {
      Msg::Increment => model.val += 1,
  }
}

pub fn view(model: &Model) -> Node<Msg> {
  button![
      simple_ev(Ev::Click, Msg::Increment),
      format!("Hello World × {}", model.val)
  ]
}