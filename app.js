// SmechOS site behavior -- hand-authored vanilla JS, no frameworks.

(function () {
  "use strict";

  var navToggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");

  navToggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close the mobile nav after following a link, so the menu doesn't stay
  // open over the section the user just jumped to.
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // The real Wix site's "Download Now" button currently points at an empty
  // file-share library (confirmed by interactively clicking it -- see
  // functional_spec.txt). Rather than fake a working download link, this
  // reveals an honest status message instead.
  var downloadBtn = document.getElementById("downloadBtn");
  var downloadNote = document.getElementById("downloadNote");

  downloadBtn.addEventListener("click", function () {
    downloadNote.hidden = false;
    downloadBtn.disabled = true;
  });
})();
