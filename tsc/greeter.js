"use strict";
class Student {
    constructor(firstname, middleInitial, lastname) {
        this.firstname = firstname;
        this.middleInitial = middleInitial;
        this.lastname = lastname;
        this.fullname = firstname + "" + middleInitial + "" + lastname;
    }
}
function greeter(person) {
    return "Hello " + person.firstname + " " + person.lastname;
}
let user = new Student("hossam", "A", "tuwano");
document.body.textContent = greeter(user);
