const colorBtn = document.querySelector(".colorBtn");
const bodyBcg = document.querySelector("body");
const hex = document.querySelector(".hex");
const white = document.querySelector("h2");
const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colors = ["yellow", "red", "green", "#3b5998"];

colorBtn.addEventListener("click", getHex);

function getHex() {
  let hexCol = "#";
  let random = Math.floor(Math.random() * hexNumbers.length);
  for (let i = 0; i < 6; i++) {
    hexCol += hexNumbers[random];
  }

  if (
    bodyBcg.style.backgroundColor == "rgb(68, 68, 68)" ||
    bodyBcg.style.backgroundColor == "rgb(255, 255, 255)"
  ) {
    white.classList.add("text");
  }

  console.log(bodyBcg.style.backgroundColor);

  bodyBcg.style.backgroundColor = hexCol;
  hex.innerHTML = hexCol;
}
