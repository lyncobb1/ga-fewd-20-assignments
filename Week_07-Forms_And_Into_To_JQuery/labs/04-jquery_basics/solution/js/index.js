
"use strict";


var main = function () {
  var question = $("#question");
  var answer = $("#answer");

  question.on("click", function () {
    answer.fadeIn(4000);
  });

  answer.on("click", function () {
    answer.fadeOut(1000);
  })

};


// Call the `main` function when document is ready
$(document).ready(main);
