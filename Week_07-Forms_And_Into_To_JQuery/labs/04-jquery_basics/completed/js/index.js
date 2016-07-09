
"use strict";

var start = function () {
	var question = $("#question");
	var answer = $("#answer");

	question.on("click", function () {
	   answer.fadeIn(5000, function () {
		question.addClass("coolblue");
       });
     });

	   answer.on("click", function () {
		answer.slideUp(4000, function () {
		question.removeClass("coolblue");
       });
      });
     };

$(document).ready(start);
