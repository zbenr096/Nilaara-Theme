document.addEventListener("DOMContentLoaded", function () {
  let navbar = document.querySelector(".navbar");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      navbar.classList.remove("show"); // Hide on scroll down
    } else {
      navbar.classList.add("show"); // Show on scroll up
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative values
  });
});
