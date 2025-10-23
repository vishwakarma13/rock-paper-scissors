// Logic to get computer choice

function getComputerChoice () {
    let choices = ["Rock", "Paper", "Scissors"];
    let compChoiceIndex = Math.floor(Math.random()*3);
    let compResult = (choices[compChoiceIndex]);
    return compResult; // necessary return statement as it would be used for function value assignment
}

// Logic to get human choice
humanRes= "";
function getHumanChoice(text){
    
    humanRes = text.toLowerCase();
    playGame();
}

let rockButton = document.querySelector("#rockButton");//selection is required for using evenlistener

rockButton.addEventListener("click",()=> {getHumanChoice("ROCK")})

let paperButton = document.querySelector("#paperButton");//selection is required for using evenlistener

paperButton.addEventListener("click",()=> {getHumanChoice("PAPER")})

let scissorsButton = document.querySelector("#scissorsButton");//selection is required for using evenlistener

scissorsButton.addEventListener("click",()=> {getHumanChoice("SCISSORS")})


// to track score
let humanScore =0;
let computerScore =0; 
let roundcount =0;

    function playGame(){
    console.log("Round "+roundcount);// to display roundnumber
    
        winnerDeciderfunction(humanRes, getComputerChoice().toLowerCase()); 

        function winnerDeciderfunction (humanChoice, computerChoice) {
            if (humanChoice===computerChoice) {
            console.log("It's a Tie");
            console.log("Final Score Player 1: "+humanScore+" Points");
            console.log("Final Score Player 2: "+computerScore+" Points");
            console.log("");
            }
            else if (humanChoice==="paper" && computerChoice==="rock" || humanChoice==="rock" && computerChoice==="scissors" || humanChoice==="scissors" && computerChoice==="paper") 
            {
            console.log(`Player 1 Won, ${humanChoice} beats ${computerChoice} `);
            humanScore +=1; //score update
            console.log("Final Score Player 1: "+humanScore+" Points");
            console.log("Final Score Player 2: "+computerScore+" Points");
            console.log("");
            }
            else {
                console.log(`Player 2 Won, ${computerChoice} beats ${humanChoice} `);
                computerScore +=1; //score update
                console.log("Final Score Player 1: "+humanScore+" Points");
                console.log("Final Score Player 2: "+computerScore+" Points");
                console.log("");       
            }
        }//ends winnerDeciderfunction()

        

    }//ends playGame()










