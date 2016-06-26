
"use strict";


function main () {
  var val1 = window.prompt ("Enter the first value");
  var val2 = window.prompt ("Enter the second value");
  var finalVal = parseInt(val1) + parseInt(val2);
  window.alert ("Final Value Is" + finalVal);
}

  
window.addEventListener("load" , main);
