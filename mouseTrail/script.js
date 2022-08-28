window.addEventListener("mousemove", (event) => {
  let move = document.createElement("div");
  move.className = "trail";
  move.style.left = event.pageX - 4 + "px";
  move.style.top = event.pageY - 4 + "px";
  document.body.appendChild(move);
});
