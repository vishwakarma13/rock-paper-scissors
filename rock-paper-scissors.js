// Logic to get computer choice
let compChoiceIndex;
let choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice () {
    compChoiceIndex = Math.floor(Math.random()*3);
    console.log(choices[compChoiceIndex])
}

// Logic to get human choice
let humanchoiceindex;

function gethumanchoice () {
    let humanchoice= prompt("Write Stone, Paper or Scissors (case sensitive)") 
    console.log(humanchoice);
}