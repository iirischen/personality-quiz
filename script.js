//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var blairScore = 0;
var serenaScore = 0;
var danScore = 0;
var chuckScore = 0;

var result = document.getElementById("result");
function updateResult(){
  if (blairScore >= 2){
    result.innerHTML = "Blair Waldorf!"
 }
 else if(serenaScore >=2){
   result.innerHTML = "Serena van der Woodsen!"
 }
 else if(danScore >=2){
   result.innerHTML = "Dan Humphrey!"
 }
 else if (chuckScore>= 2){
   result.innerHTML = "Chuck Bass!"
 }
 else{

 }
}


//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");




//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", blair);
q1a2.addEventListener("click", serena);
q1a3.addEventListener("click", dan);
q1a4.addEventListener("click", chuck);

q2a1.addEventListener("click", serena);
q2a2.addEventListener("click", dan);
q2a3.addEventListener("click", blair);
q2a4.addEventListener("click", chuck);

q3a1.addEventListener("click", blair);
q3a2.addEventListener("click", dan);
q3a3.addEventListener("click", serena);
q3a4.addEventListener("click", chuck);

q4a1.addEventListener("click", chuck);
q4a2.addEventListener("click", blair);
q4a3.addEventListener("click", serena);
q4a4.addEventListener("click", dan);


//#TODO: Define quiz functions here
function blair() {
  blairScore += 1;
  questionCount += 1;
  alert("That's something Blair would do.")
  if (questionCount >=3){ 
    updateResult();
}

function serena() {
  serenaScore += 1;
  questionCount += 1;
  alert("That's something Serena would do.")
  if (questionCount >=3){ 
    updateResult();
}

function dan() {
  danScore += 1;
  questionCount += 1;
  alert("That's something Dan would do.")
  if (questionCount >=3){ 
    updateResult();
}

function chuck() {
  chuckScore += 1;
  questionCount += 1;
  alert("That's something Chuck would do.")
  if (questionCount >=3){ 
    updateResult();
}