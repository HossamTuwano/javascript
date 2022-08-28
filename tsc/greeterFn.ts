function greeter(fn: (s: string) => void) {
  fn("hello world");
}

function prinToConsole(a: string) {
  console.log(a);
}

greeter(prinToConsole);

// using type alias to name function type

type GreetFunction = (s: string) => void;

function greeterFn(fn: GreetFunction) {
  return fn(a: string);
}
greeterFn();
