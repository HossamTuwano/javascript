// function that return first element of arr
// using generic inputs

function firstEl(arr: any[]) {
  console.log("firstEl:");
  console.log(arr[0]);
}

// there our function returns type any
// the right way using type parameter

function firstElement<Type>(arr: Type[]): Type | undefined {
  console.log("firstElement");
  console.log(arr[0]);
  return arr[0];
}

// using multiple types

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output) {
  console.log(arr.map(func));
  //   return arr.map(func);
}

// using type extend

function longest<Type extends { length: number }>(a: Type, b: Type) {
  console.log("longest function result");
  if (a.length > b.length) {
    console.log(a);
  } else {
    console.log(b);
  }
}
firstEl([1, 2, 3, 4]);
const s = firstElement(["hossam", "tuwano"]);
const n = firstElement([1, 2, 3]);
const u = firstElement([]);
s;
n;
u;
let longerArray = longest([1, 2, 3], [1, 2, 3, 4]);
let longerString = longest("hossam", "tuwano");
// let noOk = longest(1, 2);

longerArray;
longerString;
// const parsed = map([1, 2, 3, 4], (p) => parseInt(p));
