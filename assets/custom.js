document.addEventListener('DOMContentLoaded', function() {
  // Select all dropdown toggle elements
  var dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  dropdownToggles.forEach(function(toggle) {
    // Prevent default click behavior
    toggle.addEventListener('click', function(event) {
      event.preventDefault();
    });
  });
});
