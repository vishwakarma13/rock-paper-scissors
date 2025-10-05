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
// Score tracking outside the function to prevent score reset
let humanScore =0;
let computerScore =0;

function playGame(){
    console.log("Round "+roundcount)//prints Round number before every round
    //Logic for a single round
    function playRound (humanChoice, computerChoice) {

        if (humanChoice===computerChoice) {
        console.log("It's a Tie");
        console.log("Final Score Player 1: "+humanScore+" Points");
        console.log("Final Score Player 2: "+computerScore+" Points");
        console.log("") //add space between rounds
        }

        else if (humanChoice==="paper" && computerChoice==="rock" || humanChoice==="rock" && computerChoice==="scissors" || humanChoice==="scissors" && computerChoice==="paper") 
        {
        console.log(`Player 1 Won, ${humanChoice} beats ${computerChoice} `)
        humanScore +=1;
        console.log("Final Score Player 1: "+humanScore+" Points");
        console.log("Final Score Player 2: "+computerScore+" Points");
        console.log("") //add space between rounds
        return "Player 1 Won";  
        }

        else {
            console.log(`Player 2 Won, ${computerChoice} beats ${humanChoice} `)
            computerScore +=1;
            console.log("Final Score Player 1: "+humanScore+" Points");
            console.log("Final Score Player 2: "+computerScore+" Points");
            console.log("") //add space between rounds
            return "Player 2 Won";    
        }
    }//ends playRound()

    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();

    playRound(humanSelection, computerSelection); //playRound() calling with arguments passed

}//ends playGame()

roundcount=0;
for (let i=1; i<6; i++){
    
    roundcount= roundcount+1;
    playGame();  // for logic is executed first according to which playGame() runs 5 times
}