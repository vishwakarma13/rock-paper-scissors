// Logic to get computer choice

function getComputerChoice () {
    let choices = ["Rock", "Paper", "Scissors"];
    let compChoiceIndex = Math.floor(Math.random()*3);
    let compResult = (choices[compChoiceIndex]);
    return compResult;
}

// Logic to get human choice

function getHumanChoice () {
    let humRes= prompt("Write \"Rock\", \"Paper\" or \"Scissors\" (case insensitive)");
    return humRes;
}

// Five round playGame function

function playGame(){
   
// Score tracking
let humanScore =0;
let computerScore =0;

//Logic for a single round

function playRound (humanChoice, computerChoice) {

    if (humanChoice===computerChoice) {
    console.log("it's a tie");
}

else if (humanChoice==="paper" && computerChoice==="rock" || humanChoice==="rock" && computerChoice==="scissors" || humanChoice==="scissors" && computerChoice==="paper") 
    {
    console.log(`Player 1 (Human Wins), ${humanChoice} beats ${computerChoice} `)
    return "Player 1 Winner";
}

else {
    console.log(`Player 2 (computer Wins), ${computerChoice} beats ${humanChoice} `)
    return "Player 2 Winner";
}

}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();


}

for (let i=1; i<6; i++){
playGame();
    if (playRound()==="Player 1 Winner"){
        humanScore +=1;
        console.log(humanScore);
        console.log(computerScore);
    }
    else if (playRound()==="Player 2 Winner"){
        computerScore +=1;
        console.log(humanScore);
        console.log(computerScore);
    }
    else {
        console.log("No change " +humanScore);
        console.log("No change " +computerScore);
    }
}