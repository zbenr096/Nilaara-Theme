document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const menuItems = document.querySelectorAll(".navbar .menu-item"); // Adjust the selector to match your theme's structure

  menuItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      navbar.classList.add("show");
    });
    item.addEventListener("mouseleave", () => {
      navbar.classList.remove("show");
    });
  });
});
