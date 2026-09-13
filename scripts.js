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

  //welcometitle shrink and grow
  var scale = Math.max(0.2, 1 - currentscrollpos /500);
  document.getElementById("welcometitle").style.transform =
    "scale(" + scale + ")";
};
