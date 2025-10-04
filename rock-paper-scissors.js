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
        console.log("No change in Player 1 score (human) -" +humanScore);
        console.log("No change in Player 2 score (computer) -" +computerScore);
    }

    else if (humanChoice==="paper" && computerChoice==="rock" || humanChoice==="rock" && computerChoice==="scissors" || humanChoice==="scissors" && computerChoice==="paper") 
        {
        console.log(`Player 1 (Human Wins), ${humanChoice} beats ${computerChoice} `)
        humanScore +=1;
        console.log(humanScore);
        console.log(computerScore);
        return "Player 1 Winner";
    }

    else {
        console.log(`Player 2 (computer Wins), ${computerChoice} beats ${humanChoice} `)
        computerScore +=1;
        console.log(humanScore);
        console.log(computerScore);
        return "Player 2 Winner";
        
    }

    }

    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();

    playRound(humanSelection, computerSelection); //everytime playGame() runs it calls the playround function

}

for (let i=1; i<6; i++){
    playGame();  // for logic is executed first according to which playGame() runs 5 times
}