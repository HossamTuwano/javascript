let textarea = document.querySelector("textarea");
let timeout;

textarea.addEventListener("input", () => {
  clearTimeout(timeout);
  setTimeout(console.log("Typed!"), 200);
});
