
"use strict";

var main = function () {

  $('article#box1').on('click', function () {

    var box2 = $('article#box2');
    box2.css('background-color', '#FF0000');

  });

};


// We need to add this so that the `main` function
// will execute once the document is ready.
$(document).ready(main);

