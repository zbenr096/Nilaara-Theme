document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.navbar .nav-item');
  const navbar = document.querySelector('.navbar');
  let lastScrollTop = 0;

  // Handle dropdown behavior on hover
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

  // Hide navbar when scrolling down and show it when scrolling up
  window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scrolling down - hide navbar and disable dropdowns
      navbar.style.top = "-60px";  // Adjust based on navbar height
      disableDropdowns();
    } else {
      // Scrolling up - show navbar and enable dropdowns
      navbar.style.top = "0";
      enableDropdowns();
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
  });

  // Disable dropdown menus and pointer events
  function disableDropdowns() {
    navItems.forEach(item => {
      const dropdownMenu = item.querySelector('.dropdown-menu');
      if (dropdownMenu) {
        dropdownMenu.style.pointerEvents = 'none'; // Disable dropdown interaction
      }
    });
  }

  // Enable dropdown menus and pointer events
  function enableDropdowns() {
    navItems.forEach(item => {
      const dropdownMenu = item.querySelector('.dropdown-menu');
      if (dropdownMenu) {
        dropdownMenu.style.pointerEvents = 'auto'; // Enable dropdown interaction
      }
    });
  }
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-wrapper").style.top = "0";
  } else {
    document.getElementById("navbar-wrapper").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
