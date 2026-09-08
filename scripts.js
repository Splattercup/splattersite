/*body stats*/
body {
  margin: 0;
  background: linear-gradient(#9db399, #ffffff);
}

html {
    scroll-behavior: smooth;
}

h1 {
  color: blue;
  text-align: center;
  font-size: 60px;
}
p {
  color: red;
  font-size: 30px;
}

#topmenu {
  display: flex;
  align-items: center;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  transition: top 0.3s;
}

.menu-left,
.menu-right {
  display: flex;
}

.menu-right {
  margin-left: auto;
}

/* The links inside topmenu bar */
#topmenu a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 28px 32px;
  text-decoration: none;
  font-size: 17px;
  transition: 0.2s linear; 
}

/* Background topmenu change when mouse is on */
#topmenu a:hover {
  transform: translateX(0px);
  background-color: #ddd;
  color: black;
}

#topmenu a:active {
  transition: 0.06s linear;
  Background-color: green;
  color: white;
}

/* The bottommenu bar */
#bottommenu {
  overflow: hidden;
  background-color: #333;
  width: 100%;
}

/* The links inside bottommenu bar */
#bottommenu a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 28px 32px;
  text-decoration: none;
  font-size: 17px;
}

/* Background change when mouse is on */
#bottommenu a:hover {
  background-color: #ddd;
  color: black;
}

#bottommenu a:active {
  Background-color: green;
  color: white;
}

/*Automatic Link Layout*/
a:link {
  color: blue;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: purple;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}

/*Splatt logo*/

#topmenu .menu-left a:first-child {
  padding: 0;
}

#topmenu .menu-left a:first-child img {
  display: block;
  width: 17em;
  height: auto;
}

/* Hover */
#topmenu .menu-left a:first-child:hover img {
  content: url("../img/splattlogohover.png");
}

/* While clicking */
#topmenu .menu-left a:first-child:active img {
  content: url("../img/splattlogoclicked.png");
}



