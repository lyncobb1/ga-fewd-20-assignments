
"use strict";

/**
 * This is the main function that gets called when the document
 * has fully loaded.
 */
var main = function () {
  $("form#calculator").on("submit", handleForm);
};


/**
 * This handles the form submission
 */
var handleForm = function () {
  var number1Elem = $("#number_1");
  var number1String = number1Elem.val();
  var number1 = parseFloat(number1String);

  var number2Elem = $("#number_2");
  var number2String = number2Elem.val();
  var number2 = parseFloat(number2String);

  var operationElem = $("#operation");
  var operation = operationElem.val();

  var answerResult = getAnswer(number1, number2, operation);
  var answerElem = $("#answer");
  $("#answer").val(answerResult);

  return false;
};


/**
 * This function returns the answer
 */
var getAnswer = function (number1, number2, operation) {
  var result;
  if (operation === "plus") {
    result = number1 + number2
  }
  else if (operation === "minus") {
    result = number1 - number2;
  }
  return result;
};


// We need to add this so that the `main` function
// will execute once the document is ready.
$(document).ready(main);

