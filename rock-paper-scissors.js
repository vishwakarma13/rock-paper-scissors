// Logic to get computer choice
let compChoiceIndex;
let choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice () {
    compChoiceIndex = Math.floor(Math.random()*3);
    console.log(choices[compChoiceIndex])
}