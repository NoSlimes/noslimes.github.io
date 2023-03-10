$(function() {
  let urlParams = new URLSearchParams(window.location.search);
  let filename;
  if (urlParams.has("file")) {
    filename = urlParams.get("file");
  } else {
    filename = "default.html"; // Default filename if none is specified
  }
  $("#file-placeholder").load(filename);
  $("#nav-placeholder").load("nav.html");
  $("#foot-placeholder").load("foot.html");
});
