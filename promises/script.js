// a promise is a  asychronous action that may complete at some point and produce a value
// easiest way to call a  promise is by calling "Promise.resolve" function

let fifteen = Promise.resolve(15);
fifteen.then((value) => console.log(`Got ${value}`));
