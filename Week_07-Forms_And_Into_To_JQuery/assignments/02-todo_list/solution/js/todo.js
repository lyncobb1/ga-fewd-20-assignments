
"use strict";

var main = function () {
  $("form#todoForm").on("submit", handleForm);
};


var handleForm = function () {
  var taskVal = $("#task").val();
  var priorityVal = $("#priority").val();
  var dueVal = $("#due").val();

  var itemString = (
    "<li>" +
      "Priority: " + priorityVal + "; " +
      "Due: " + dueVal + "; " +
      "Task: " + taskVal + "; " +
      "</li>"
  );
  var itemElement = $(itemString);
  var todoItems = $("ol#todoItems");
  todoItems.append(itemElement);

  return false;
};


$(document).ready(main);

