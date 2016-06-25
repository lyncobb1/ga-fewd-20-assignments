
"use strict";


function main () {
  var userValue, boxThing;

  userValue = window.prompt("Enter a color.");
  boxThing = document.getElementById("box");
  boxThing.style.backgroundColor = userValue;

  return false;
}


window.addEventListener("load", main);
