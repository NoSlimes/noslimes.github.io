window.onload = function () {
  /* Get all dropdown buttons and dropdown contents */
  var dropdownButtons = document.querySelectorAll(".dropbtn");
  var dropdownContents = document.querySelectorAll(".dropdown-content");

  /* Add a click event listener to each dropdown button */
  dropdownButtons.forEach(function (dropdownButton) {
    dropdownButton.addEventListener("click", function () {
      /* Toggle the display of the associated dropdown content block */
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  });

  /* Add a click event listener to the document body to close dropdowns when clicked elsewhere */
  document.body.addEventListener("click", function (event) {
    dropdownContents.forEach(function (dropdownContent) {
      if (event.target !== dropdownContent.previousElementSibling && dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      }
    });
  });
}
