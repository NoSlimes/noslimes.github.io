window.onload = function () {
  /* Get all dropdown buttons and dropdown contents */
  var dropdownButtons = document.querySelectorAll(".dropbtn");
  var dropdownContents = document.querySelectorAll(".dropdown-content");

  /* Add click event listeners to all dropdown buttons */
  dropdownButtons.forEach(function (dropdownButton) {
    dropdownButton.addEventListener("click", function (event) {
      /* Prevent the click event from bubbling up to the body */
      event.stopPropagation();

      /* Get the corresponding dropdown content */
      var dropdownContent = dropdownButton.nextElementSibling;

      /* Toggle the display of the dropdown content block */
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  });

  /* Add click event listener to body */
  document.body.addEventListener("click", function () {
    /* Hide all dropdown contents */
    dropdownContents.forEach(function (dropdownContent) {
      dropdownContent.style.display = "none";
    });
  });
};
