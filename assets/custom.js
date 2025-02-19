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