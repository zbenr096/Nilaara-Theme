document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.nav-item');

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener('mouseenter', function () {
      const menu = dropdown.querySelector('.dropdown-menu');
      if (menu) {
        menu.style.display = 'block';
        setTimeout(function () {
          menu.style.opacity = '0';
          menu.style.transform = 'translateY(0)';
        }, 10);
      }
    });

    dropdown.addEventListener('mouseleave', function () {
      const menu = dropdown.querySelector('.dropdown-menu');
      if (menu) {
        menu.style.opacity = '0';
        menu.style.transform = 'translateY(-10px)';
        setTimeout(function () {
          menu.style.display = 'none';
        }, 300); // Match the duration of the transition
      }
    });
  });
});
