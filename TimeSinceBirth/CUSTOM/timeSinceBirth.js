var seconds 	= 60;
var minutes 	= 60;
var hours   	= 24;
var daysInYear	= 365;

var input = prompt("What is your age?");


var totalSecondsInYear = parseInt(seconds) * parseInt(minutes) * parseInt(hours) * parseInt(daysInYear) * parseInt(input);

document.write("You have been living for " + totalSecondsInYear + " seconds!");
