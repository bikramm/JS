/*
This program will generate number of random color based upon users input



*/

var html = '';

// Function to generate random color
function randomColor(){
	// Getting the RGB value of the color
	return Math.floor(Math.random() * 256 );
	 
}

// Create RGB(colorCode,colorCode,colorCode);
function RGB(){
	var rgb = 'rgb(';
	rgb += randomColor() + ',';
	rgb += randomColor() + ',';
	rgb += randomColor() + ')';
	
	return rgb;
}

// Prompt user to enter the number of times the color block should be displayed
var userInput = prompt("How many random color would you like to generate? ");

// loop until an unless it fulfil users request
for(var i = 0; i < userInput; i += 1){

	console.log(i);
	rgbColor = RGB();
	html +='<div style="width: 40px; height: 40px;   display: inline-block; background-color:' + rgbColor + '"></div>';
}

document.write(html);
