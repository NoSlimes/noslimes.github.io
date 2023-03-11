window.onload = function () {
  /* Get the dropdown button and dropdown content */
  var dropdownButton = document.getElementById("dropdown-btn");
  var dropdownContent = document.getElementById("dropdown-content");

  /* Add a click event listener to the dropdown button */
  dropdownButton.addEventListener("click", function () {
    /* Toggle the display of the dropdown content block */
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });

  /* Get the dropdown button and dropdown content */
  var dropdownButton = document.getElementById("dropdown-btn-1");
  var dropdownContent = document.getElementById("dropdown-content-1");

  /* Add a click event listener to the dropdown button */
  dropdownButton.addEventListener("click", function () {
    /* Toggle the display of the dropdown content block */
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });


}

