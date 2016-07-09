
"use strict";


var main = function () {
  var mainform = $("form#mainform");

  mainform.on("submit", function () {
    var emailElem = $("input#email");
    var emailVal = emailElem.val();
    var output = $("p#output");
    var txt = "Your email is " + emailVal;
    emailElem.val("");
    output.text(txt);
    return false;
  });

};


// Call the `main` function when document is ready
$(document).ready(main);
