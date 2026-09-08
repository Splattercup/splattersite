//topmenu
document.getElementById("topmenu").innerHTML = '<a href="index.html" style="background-color:#8391a8;color:black">Home</a><a href="bio.html">About</a><a href="art-portfolio.html">Art</a><a href="music-portfolio.html">Music</a><a href="contact.html">Contact</a><a href="friends-list.html">Friends</a><a href="games.html">Games</a>';

//topmenu hide
var prevscrollpos = window.pageYOffset;
window.onscroll = function() {
var currentscrollpos = window.pageYOffset;
  if (prevscrollpos > currentscrollpos) {
  document.getElementById("topmenu").style.top = "0";
 } else {
 document.getElementById("topmenu").style.top = "-80px";
 }
 prevscrollpos = currentscrollpos;
}

document.getElementById("topmenu").innerHTML = `
  <div class="menu-left">
    <a href="index.html" style="background-color:#8391a8;color:black">Home</a>
    <a href="bio.html">About</a>
    <a href="art-portfolio.html">Art</a>
    <a href="music-portfolio.html">Music</a>
  </div>

  <div class="menu-right">
    <a href="contact.html">Contact</a>
    <a href="friends-list.html">Friends</a>
    <a href="games.html">Games</a>
  </div>
`;