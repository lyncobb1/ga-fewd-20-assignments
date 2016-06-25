
"use strict";


function main () {
  var userValue;

  userValue = window.prompt("Hello! Please enter a value!");
  window.alert("You entered: " + userValue);

  return false;
}


window.addEventListener("load", main);
