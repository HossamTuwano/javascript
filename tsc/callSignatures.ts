type discribableFunction = {
  description: string;
  (someArg: number): boolean;
};

function doSomething(fn: discribableFunction) {
  console.log(fn.description + "returned " + fn(6));
}

doSomething();
