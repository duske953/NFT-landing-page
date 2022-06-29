const navIcon = document.querySelector(".nav-icon");
const closeIcon = document.querySelector(".close-icon");
const nav = document.querySelector(".nav");
const headerContainer = document.querySelector(".header__container");

headerContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("nav-icon") ||
    e.target.classList.contains("close-icon")
  ) {
    e.target.classList.contains("nav-icon")
      ? nav.classList.add("nav--active")
      : nav.classList.remove("nav--active");
  }
  return;
});
