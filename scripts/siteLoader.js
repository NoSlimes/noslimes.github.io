/*
 * siteLoader.js
 * Loads common site chrome (nav + footer) and initializes theme toggle.
 */

$(function() {
  // Load navigation
  $("#nav-placeholder").load("/nav.html", function() {
    // Initialize theme toggle after navigation is loaded
    if (window.ThemeToggle) {
      try { new window.ThemeToggle(); } catch (e) { console.error(e); }
    }
  });

  // Load footer
  $("#foot-placeholder").load("/foot.html");
});
