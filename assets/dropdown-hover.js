document.addEventListener('DOMContentLoaded', function() {
  // Select all navbar list items that have a dropdown.
  var dropdownParents = document.querySelectorAll('.navbar li.dropdown');

  dropdownParents.forEach(function(parent) {
    // Prevent the parent category link from being clickable.
    var link = parent.querySelector('a');
    if (link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
      });
    }

    // Find the dropdown menu inside the parent.
    var dropdownMenu = parent.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      // Initialize dropdown menu styles.
      dropdownMenu.style.opacity = '0';
      dropdownMenu.style.visibility = 'hidden';
      dropdownMenu.style.transform = 'translateY(10px)';
      dropdownMenu.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

      // On mouse enter, animate dropdown to appear.
      parent.addEventListener('mouseenter', function() {
        dropdownMenu.style.opacity = '1';
        dropdownMenu.style.visibility = 'visible';
        dropdownMenu.style.transform = 'translateY(0)';
      });

      // On mouse leave, animate dropdown to hide.
      parent.addEventListener('mouseleave', function() {
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.visibility = 'hidden';
        dropdownMenu.style.transform = 'translateY(10px)';
      });
    }
  });
});
