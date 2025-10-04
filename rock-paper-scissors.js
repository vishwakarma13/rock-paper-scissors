// Logic to get computer choice

function getComputerChoice () {
    let choices = ["Rock", "Paper", "Scissors"];
    let compChoiceIndex = Math.floor(Math.random()*3);
    let compResult = (choices[compChoiceIndex]);
    return compResult;
}

// Logic to get human choice

function getHumanChoice () {
    let humRes= prompt("Write \"Rock\", \"Paper\" or \"Scissors\" (case sensitive)");
    return humRes;
}

// Score tracking

let humanScore =0;
let computerScore =0;

//Logic for a single round

function playRound(humanChoice, computerChoice) {

    if (humanChoice===computerChoice) {
    console.log("it's a tie");
}

else if (humanChoice==="Paper" && computerChoice==="Rock" || humanChoice==="Rock" && computerChoice==="Scissors" || humanChoice==="Scissors" && computerChoice==="Paper") 
    {
    console.log(`Player 1 (Human Wins), ${humanChoice} beats ${computerChoice} `)
    return "Player 1 Winner";
}

else {
    console.log(`Player 2 (computer Wins), ${computerChoice} beats ${humanChoice} `)
    return "Player 2 Winner";
}

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);