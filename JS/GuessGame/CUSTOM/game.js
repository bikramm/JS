/*
User will be prompted with question for which they can answer. 
The total correct answer will be calculated and displayed at the end.
*/

// Initiliazation of correctScore to 0. Start of the game.
var correctScore = 0;

// Store the value of answer that was wrong...
var wrongAnswer = 0;


// Questions
var question = prompt("Where is the tallest mountain in the world? ");
if(question.toUpperCase() === "NEPAL"){
 	correctScore = correctScore + 1;
 	document.write("Questions 1 correct. <br/>");
}else{
 	wrongAnswer = wrongAnswer + 1;
 	document.write("Questions 1 wrong. <br/>");
}


var question = prompt("How many users are there in Facebook? ");
if(question >= 1000000000){
 	correctScore = correctScore + 1;
 	document.write("Questions 2 correct. <br/>");
}else{
 	wrongAnswer = wrongAnswer + 1;
 	document.write("Questions 2 wrong. <br/>");
}



var question = prompt("What is the population of Planet Earth? ");
if(question >= 6000000000){
 	correctScore = correctScore + 1;
 	document.write("Questions 3 correct. <br/>");
}else{
 	wrongAnswer = wrongAnswer + 1;
 	document.write("Questions 3 wrong. <br/>");
}



var question = prompt("How many alphabets are there? ");
if(question == 26){
 	correctScore = correctScore + 1;
 	document.write("Questions 4 correct. <br/>");
}else{
 	wrongAnswer = wrongAnswer + 1;
 	document.write("Questions 4 wrong. <br/>");
}



var question = prompt("how much is 3 + 4 ");
 if(question == 7){
 	correctScore = correctScore + 1;
 	document.write("Questions 5 correct. <br/>");
}else{
 	wrongAnswer = wrongAnswer + 1;
 	document.write("Questions 5 wrong. <br/>");
}


var question = prompt("Whis is the father of Computer Science? ");
if(question.toUpperCase() === "ALAN TURING"){
 	correctScore = correctScore + 1;
 	document.write("Questions 6 correct. <br/>");
}else{
 	wrongAnswer = wrongAnswer + 1;
 	document.write("Questions 6 wrong. <br/>");
}





document.write("<br/><br/><br/>");
document.write("Your score is " + correctScore + ".<br/>");
document.write("You made " + wrongAnswer + " wrong answer."); 



