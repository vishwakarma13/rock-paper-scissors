// Logic to get computer choice

function getComputerChoice () {
    let choices = ["Rock", "Paper", "Scissors"];
    let compChoiceIndex = Math.floor(Math.random()*3);
    let compResult = (choices[compChoiceIndex]);
    return compResult; // necessary return statement as it would be used for function value assignment
}

// Logic to get human choice

function getHumanChoice () {
    let humRes= prompt("Write \"Rock\", \"Paper\" or \"Scissors\" (case insensitive)");
    return humRes; // necessary return statement as it would be used for function value assignment
}

// Five round playGame function
// Score tracking outside the function to prevent score reset
let humanScore =0;
let computerScore =0;

function playGame(){
    console.log("Round "+roundcount);//prints Round number before every round
    //Logic for a single round
    function playRound (humanChoice, computerChoice) { //these two are paremeters (not actual arguments) on which every logical operation is performed

        if (humanChoice===computerChoice) {
        console.log("It's a Tie");
        console.log("Final Score Player 1: "+humanScore+" Points");
        console.log("Final Score Player 2: "+computerScore+" Points");
        console.log(""); //add space between rounds
        }

        else if (humanChoice==="paper" && computerChoice==="rock" || humanChoice==="rock" && computerChoice==="scissors" || humanChoice==="scissors" && computerChoice==="paper") 
        {
        console.log(`Player 1 Won, ${humanChoice} beats ${computerChoice} `);
        humanScore +=1; //score update
        console.log("Final Score Player 1: "+humanScore+" Points");
        console.log("Final Score Player 2: "+computerScore+" Points");
        console.log(""); //add space between rounds
          
        }

        else {
            console.log(`Player 2 Won, ${computerChoice} beats ${humanChoice} `);
            computerScore +=1; //score update
            console.log("Final Score Player 1: "+humanScore+" Points");
            console.log("Final Score Player 2: "+computerScore+" Points");
            console.log(""); //add space between rounds
                
        }
    }//ends playRound()

    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();

    playRound(humanSelection, computerSelection); // playGame() is calling this i.e. playRound() 

}//ends playGame()

roundcount=0;
for (let i=1; i<6; i++){
    
    roundcount= roundcount+1;
    playGame();  // for logic is executed first according to which playGame() runs 5 times
}