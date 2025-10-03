$(function() {
  $("#nav-placeholder").load("/nav.html", function() {
    // Initialize theme toggle after navigation is loaded
    if (window.ThemeToggle) {
      new window.ThemeToggle();
    }
  });
});