const navbarBtn = document.querySelector(".navbar__btn");
const navbarLinks = document.querySelector(".navbar__links");

navbarBtn.addEventListener("click", () => {
  let value = navbarLinks.classList.contains("navbar__collapse");

  if (value) {
    navbarLinks.classList.remove("navbar__collapse");
    navbarBtn.value.remove("change");
  } else {
    navbarLinks.classList.add("navbar__collapse");
    navbarBtn.classList.add("change");
  }
});
