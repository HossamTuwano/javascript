// function that return first element of arr
// using generic inputs
function firstEl(arr) {
    console.log("firstEl:");
    console.log(arr[0]);
}
// there our function returns type any
// the right way using type parameter
function firstElement(arr) {
    console.log("firstElement");
    console.log(arr[0]);
    return arr[0];
}
// using multiple types
function map(arr, func) {
    console.log(arr.map(func));
    //   return arr.map(func);
}
// using type extend
function longest(a, b) {
    console.log("longest function result");
    if (a.length > b.length) {
        console.log(a);
    }
    else {
        console.log(b);
    }
}
firstEl([1, 2, 3, 4]);
var s = firstElement(["hossam", "tuwano"]);
var n = firstElement([1, 2, 3]);
var u = firstElement([]);
s;
n;
u;
var longerArray = longest([1, 2, 3], [1, 2, 3, 4]);
var longerString = longest("hossam", "tuwano");
// let noOk = longest(1, 2);
longerArray;
longerString;
// const parsed = map([1, 2, 3, 4], (p) => parseInt(p));
