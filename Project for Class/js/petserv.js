

"use strict";

var main = function () {
 	var theform = $("form#mainform");
 	theform.on("submit", handleSubmit);
};


var handleSubmit = function () {
	var zipVal = $("input#zip").val();
	var responseDiv = $("div#response");
	var txt = lookupZip(zipVal);
	responseDiv.text(txt);
	return false;
}

var lookupZip = function (zipVal) {
	if (zipVal === "90034") {
		return "Santa Monica Dog Shelter";
	}
	return "No Results Found.";
}

$(document).ready(main);

