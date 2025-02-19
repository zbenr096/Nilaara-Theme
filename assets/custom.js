/*
  Add here your own custom javascript codes
*/

document.addEventListener('DOMContentLoaded', function() {
  // Select all dropdown toggle elements
  var dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  dropdownToggles.forEach(function(toggle) {
    // Remove default Bootstrap event listeners
    toggle.removeEventListener('click', toggle.clickHandler);

    // Prevent default action on click
    toggle.addEventListener('click', function(event) {
      event.preventDefault();
    });
  });
});
