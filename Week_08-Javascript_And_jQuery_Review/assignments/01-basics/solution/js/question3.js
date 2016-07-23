
"use strict";

var main = function () {

  var box1 = $('article#box1');

  box1.on('click', function () {

    $('article#box2').fadeOut(2000, function () {
      box1.css('background-color', '#FF0000');
    })

  });

};


// We need to add this so that the `main` function
// will execute once the document is ready.
$(document).ready(main);

