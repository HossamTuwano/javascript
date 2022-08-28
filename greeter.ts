class Student {
  fullname: String;
  constructor(
    public firstname: string,
    public middleInitial: string,
    public lastname: string
  ) {
    return this.firstname + "" + this.middleInitial + "" + this.lastname;
  }
}

interface Person {
  firstname: string;
  secondname: string;
}

function greeter(person: Person) {
  return (
    "Hello " +
    person.firstname +
    "" +
    person.middleInitial +
    "" +
    person.lastname
  );
}

let user = new Student("hossam", "A", "tuwano");

document.body.textContent = greeter(user);
