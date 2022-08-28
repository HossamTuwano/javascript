const btns = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector(".btn-equal");
const clearBtn = document.querySelector(".btn-clear");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let number = btns[i].dataset.num;
    screen.value += number;
  });
}

equalBtn.addEventListener("click", () => {
  if (screen.value === "") {
    alert("input is empty");
  } else {
    let value = eval(screen.value);
    screen.value = value;
  }
});

clearBtn.addEventListener("click", () => {
  screen.value = "";
});