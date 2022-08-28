"use strict";
function greet(person, date) {
    return `hello ${person} today is ${date.toDateString()}`;
}
greet("hossam", new Date());
