try {
  console.log("try error starts");

  // ozymandias;

  console.log("the end of try");
} finally {
  console.log("finally always runs");
}

console.log("the execution continues");

let json = `{"age": 20}`;
try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }
  console.log(user.name);
} catch (e) {
  console.log("JSON Error: " + e);
}
