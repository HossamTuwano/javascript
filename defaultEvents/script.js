// document.querySelector("a").addEventListener("click", (event) => {
//   event.preventDefault();
// });

window.addEventListener("keydown", (event) => {
  if (event.key == "v") {
    document.body.style.background = "yellow";
  }
});

window.addEventListener("keyup", (event) => {
  if (event.key == "v") {
    document.body.style.background = "v";
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key == "a") {
    // console.log("okay");
    document.querySelector("h4").innerHTML = "a key is clicked";
  }
});

window.addEventListener("click", (event) => {
  let dot = document.createElement("div");
  dot.className = ".dot";
  dot.style.left = event.pageX - 1 + "px";
  dot.style.top = event.pageY - 4 + "px";
  document.body.appendChild(dot);
});
