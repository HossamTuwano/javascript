function greet(person: string, date: Date) {
  return `hello ${person} today is ${date.toDateString()}`;
}

greet("hossam", new Date());
