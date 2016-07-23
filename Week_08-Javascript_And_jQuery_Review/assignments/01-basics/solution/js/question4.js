
"use strict";

var main = function () {

  var box1 = $('article#box1');
  var mainform1 = $('form#mainform1');
  var mainform2 = $('form#mainform2');

  mainform1.on('submit', function () {
    box1.addClass('userclicked');
    return false;
  });

  mainform2.on('submit', function () {
    box1.removeClass('userclicked');
    return false;
  });

};


// We need to add this so that the `main` function
// will execute once the document is ready.
$(document).ready(main);

