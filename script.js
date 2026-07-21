const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector("nav ul");
const darkToggle = document.querySelector("#dark-toggle");
const navItems = document.querySelectorAll("nav ul li a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("fa-bars");
  hamburger.classList.toggle("fa-xmark");
})

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("show");
    hamburger.classList.toggle("fa-bars");
    hamburger.classList.toggle("fa-xmark");
  })
})

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if(document.body.classList.contains("dark")) {
    darkToggle.textContent = "☀️";
  } else {
    darkToggle.textContent = "🌙";
  }
})