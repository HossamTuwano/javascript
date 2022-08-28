const name = document.querySelector("#name");
const password = document.querySelector("#password");
const errorElement = document.querySelector("#error");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  let messages = [];
  if (password.value.length <= 6) {
    alert("Password must be more than 6 characters");
  }
  if (password.value.length >= 20) {
    alert("Password must not be longer than 20 character");
  }

  errorElement.innerText = messages.join(",");
  event.preventDefault();
});
