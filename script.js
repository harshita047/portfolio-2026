const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("fa-bars");
  hamburger.classList.toggle("fa-xmark");
})