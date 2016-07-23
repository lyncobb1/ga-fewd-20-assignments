
"use strict";

var main = function () {

  var mainform = $('form#mainform');

  mainform.on('submit', function () {
    var num1 = $('input#num1');
    var num2 = $('input#num2');
    var stringVal1 = num1.val();
    var stringVal2 = num2.val();
    var numVal1 = parseFloat(stringVal1);
    var numVal2 = parseFloat(stringVal2);
    var sumOfNumbers = numVal1 + numVal2;
    window.alert("The sum of the numbers is: " + sumOfNumbers);
    return false;
  });

};


// We need to add this so that the `main` function
// will execute once the document is ready.
$(document).ready(main);

