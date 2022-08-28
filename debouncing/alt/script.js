let schedualed = null;
window.addEventListener("mousemove", (event) => {
  if (!schedualed) {
    setTimeout(() => {
      document.body.textContent = `Mouse at ${schedualed.pageX}, ${schedualed.pageY}`;
      schedualed = null;
    }, 250);
  }
  schedualed = event;
});
