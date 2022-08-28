function greeter(fn) {
    fn("hello world");
}
function prinToConsole(a) {
    console.log(a);
}
greeter(prinToConsole);
function greeter(fn) {
    return fn("hossam");
}
greeter();
