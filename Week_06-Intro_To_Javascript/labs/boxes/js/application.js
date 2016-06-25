
"use strict";

function main () {
  var redThing, greenThing, blueThing;

  redThing = document.getElementById("redbox");
  greenThing = document.getElementById("greenbox");
  blueThing = document.getElementById("bluebox");

  redThing.addEventListener("click", clickedRed);
  greenThing.addEventListener("click", clickedGreen);
  blueThing.addEventListener("click", clickedBlue);

  return false;
}


function clickedRed () {
  window.alert("CLICKED RED!");
  return false;
}


function clickedGreen () {
  window.alert("CLICKED GREEN!");
  return false;
}


function clickedBlue () {
  window.alert("CLICKED BLUE!");
  return false;
}


window.addEventListener("load", main);
