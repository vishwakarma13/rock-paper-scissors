let paraSelector1 = document.querySelector("#para1")
let paraSelector2 = document.querySelector("#para2")
let paraSelector3 = document.querySelector("#para3")
let paraSelector4 = document.querySelector("#para4")





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
    roundcount +=1;
    console.log("Round "+roundcount);// to display roundnumber

    
        let roundMessage = winnerDeciderfunction(humanRes, getComputerChoice().toLowerCase()); 

        function winnerDeciderfunction (humanChoice, computerChoice) {
            detailMessage= "Human Chose "+humanChoice+".  Computer Chose "+computerChoice;
            

            if (humanChoice===computerChoice) {
            let text1 = "It's a Tie";
            let text2 = "Final Score Human: "+humanScore+" Points";
            let text3 = "Final Score Computer: "+computerScore+" Points";
            paraSelector1.textContent = text1;
            paraSelector2.textContent = text2;
            paraSelector3.textContent = text3;
            }


            else if (humanChoice==="paper" && computerChoice==="rock" || humanChoice==="rock" && computerChoice==="scissors" || humanChoice==="scissors" && computerChoice==="paper") 
            {

            humanScore +=1; //score update
            let text1 = `Human Won, ${humanChoice} beats ${computerChoice} `
            let text2 = "Final Score Human: "+humanScore+" Points"
            let text3 = "Final Score Computer: "+computerScore+" Points"
            paraSelector1.textContent = text1;
            paraSelector2.textContent = text2;
            paraSelector3.textContent = text3;
            }

            else {

            computerScore +=1; //score update
            let text1 = `Computer Won, ${computerChoice} beats ${humanChoice} `
            let text2 = "Final Score Human: "+humanScore+" Points"
            let text3 = "Final Score Computer: "+computerScore+" Points"
            paraSelector1.textContent = text1;
            paraSelector2.textContent = text2;
            paraSelector3.textContent = text3;   
            }

            
        }//ends winnerDeciderfunction()

        

    }//ends playGame()










