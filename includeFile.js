$(function() {
    let filename = "index.html; // Default filename is index.html
    let urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("file")) {
      filename = urlParams.get("file");
    }
    $("#file-placeholder").load(filename);
  });
  