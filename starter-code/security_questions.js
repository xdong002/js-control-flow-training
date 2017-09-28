console.log("security_questions.js loaded");

var securityQuestions =[{question: "Do you like cat?", expectedAnswer: "Yes"},
{question: "What was your favorite NBA Team", expectedAnswer: "Warrior"},
{question: "What was your favorite city", expectedAnswer: "New York"}];


var result = window.prompt(securityQuestions[0].question);

if (result === "Yes"){
  var resultTwo = window.prompt(securityQuestions[1].question)
  if (resultTwo === "Warrior") {
    var resultThree = window.prompt(securityQuestions[2].question)
    if (resultThree === "New York"){
      alert("All right!")
    }
    else {
      alert("Wrong")
    }
  }
  else {
    alert("Wrong")
  }
}
else {
  alert("Wrong")
}
