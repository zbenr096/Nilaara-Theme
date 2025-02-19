document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.navbar .nav-item');

  navItems.forEach(item => {
    const dropdownMenu = item.querySelector('.dropdown-menu');
    
    if (dropdownMenu) {
      // Remove the JS hover event listeners
      item.removeEventListener('mouseenter', () => {});

      item.removeEventListener('mouseleave', () => {});
    }
  });
});
