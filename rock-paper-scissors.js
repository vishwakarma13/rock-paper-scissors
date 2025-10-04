// Logic to get computer choice

let compChoiceIndex;
let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    compChoiceIndex = Math.floor(Math.random()*3);
    console.log(choices[compChoiceIndex]);
}

// Logic to get human choice

function gethumanChoice () {
    let humanChoice= prompt("Write \"Stone\", \"Paper\" or \"Scissors\" (case sensitive)");
    console.log(humanChoice);
}

// Score tracking

let humanScore =0;
let computerScore =0;