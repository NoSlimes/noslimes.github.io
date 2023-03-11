window.onload = function() {
  /* Get all dropdown buttons and dropdown content */
  var dropdownButtons = document.querySelectorAll(".dropbtn");
  var dropdownContents = document.querySelectorAll(".dropdown-content");

  /* Add click event listeners to all dropdown buttons */
  dropdownButtons.forEach(function(button, index) {
    button.addEventListener("click", function() {
      /* Toggle the display of the corresponding dropdown content block */
      if (dropdownContents[index].style.display === "block") {
        dropdownContents[index].style.display = "none";
      } else {
        dropdownContents[index].style.display = "block";
      }
    });
  });

  /* Add click event listener to the document to close dropdowns when clicking outside */
  document.addEventListener("click", function(event) {
    dropdownContents.forEach(function(content) {
      if (event.target !== content && event.target.parentNode !== content.previousElementSibling) {
        content.style.display = "none";
      }
    });
  });
};
