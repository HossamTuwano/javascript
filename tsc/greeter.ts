class Student {
  fullname: string;
  constructor(
    public firstname: string,
    public middleInitial: string,
    public lastname: string
  ) {
    this.fullname = firstname + "" + middleInitial + "" + lastname;
  }
}

interface Person {
  firstname: string;
  lastname: string;
}

function greeter(person: Student) {
  return "Hello " + person.firstname + " " + person.lastname;
}

let user = new Student("hossam", "A", "tuwano");

document.body.textContent = greeter(user);
