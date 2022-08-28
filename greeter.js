"use strict";
class Student {
    constructor(firstname, middleInitial, lastname) {
        this.firstname = firstname;
        this.middleInitial = middleInitial;
        this.lastname = lastname;
        return this.firstname + "" + this.middleInitial + "" + this.lastname;
    }
}
function greeter(person) {
    return ("Hello " +
        person.firstname +
        "" +
        person.middleInitial +
        "" +
        person.lastname);
}
let user = new Student("hossam", "A", "tuwano");
document.body.textContent = greeter(user);
