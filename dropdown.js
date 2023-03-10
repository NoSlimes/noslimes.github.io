<script>
  /* Get the dropdown button and dropdown content */
  var dropdownButton = document.getElementsByClassName("dropbtn")[0];
  var dropdownContent = document.getElementById("myDropdown");

  /* Add a click event listener to the dropdown button */
  dropdownButton.addEventListener("click", function() {
    /* Toggle the display of the dropdown content block */
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
</script>
