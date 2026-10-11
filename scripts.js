//topmenu
//document.getElementById("topmenu").innerHTML = '<a href="index.html" style="background-color:#8391a8;color:black">Home</a><a href="bio.html">About</a><a href="art-portfolio.html">Art</a><a href="music-portfolio.html">Music</a><a href="contact.html">Contact</a><a href="friends-list.html">Friends</a><a href="games.html">Games</a>';

window.onscroll = function() {
  var currentscrollpos = window.pageYOffset;

  //topmenu hide
  if (currentscrollpos > 0) {
    document.getElementById("topmenu").style.top = "0";
  } else {
    document.getElementById("topmenu").style.top = "-250px";
  }

  // title shrink and grow
  var scale = Math.max(0.2, 1 - currentscrollpos /500);
  document.getElementById("title").style.transform =
    "scale(" + scale + ")";
};

// page transition, fade out before navigating to another page.

document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll("a[href]").forEach(link => {

    link.addEventListener("click", function(event) {

      const href = this.getAttribute("href");

      // ignore empty links
      if (!href) {
        return;
      }

      // ignore links that only scroll on this page
      if (href.startsWith("#")) {
        return;
      }

      // ignore links that open in a new tab
      if (this.target === "_blank") {
        return;
      }

      // ignore external websites
      if (
        href.startsWith("http://") ||
        href.startsWith("https://")
      ) {
        return;
      }

      // fade the current page out
      document.querySelector(".page-content").classList.add("page-leaving");

      // navigate after the fade finishes
      setTimeout(() => {
        window.location.href = href;
      }, 400);

    });

  });

});
