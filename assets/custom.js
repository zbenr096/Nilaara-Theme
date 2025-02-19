document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.navbar .nav-item');

  navItems.forEach(item => {
    const dropdownMenu = item.querySelector('.dropdown-menu');

    if (dropdownMenu) {
      item.addEventListener('mouseenter', function () {
        dropdownMenu.style.display = 'block';
        setTimeout(() => {
          dropdownMenu.style.opacity = '1';
        }, 10); // Small delay to ensure the display change is applied
      });

      item.addEventListener('mouseleave', function () {
        dropdownMenu.style.opacity = '0';
        setTimeout(() => {
          dropdownMenu.style.display = 'none';
        }, 240); // Matches the CSS transition duration
      });
    }
  });
});

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down - hide navbar
    navbar.style.top = "-60px";  // Adjust based on your navbar height
  } else {
    // Scrolling up - show navbar
    navbar.style.top = "0";
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
});