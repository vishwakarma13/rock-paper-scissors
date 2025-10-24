//to select all the p elements for manipulation
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
    playGame(); //calling the playgame()
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

    function playGame(){
    
        function winnerDeciderfunction (humanChoice, computerChoice) {

            let choiceText = "You chose "+humanChoice+" and  Computer chose "+computerChoice;

            if (humanChoice===computerChoice) {
                let text1 = "It's a Tie";
                let text2 = "You Scored: "+humanScore+" Points";
                let text3 = "Computer Scored: "+computerScore+" Points";
                paraSelector1.textContent = text1;
                paraSelector2.textContent = text2;
                paraSelector3.textContent = text3;
                paraSelector4.textContent = choiceText; //shows the selected choices of both

            }


            else if (humanChoice==="paper" && computerChoice==="rock" || humanChoice==="rock" && computerChoice==="scissors" || humanChoice==="scissors" && computerChoice==="paper") 
            {
                humanScore +=1; //score update
                let text1 = "You Won!"
                let text2 = "You Scored: "+humanScore+" Points"
                let text3 = "Computer Scored: "+computerScore+" Points"
                paraSelector1.textContent = text1;
                paraSelector2.textContent = text2;
                paraSelector3.textContent = text3;
                paraSelector4.textContent = choiceText; //shows the selected choices of both
            }

            else {
                computerScore +=1; //score update
                let text1 = "Computer Won!"
                let text2 = "You Scored: "+humanScore+" Points"
                let text3 = "Computer Scored: "+computerScore+" Points"
                paraSelector1.textContent = text1;
                paraSelector2.textContent = text2;
                paraSelector3.textContent = text3;
                paraSelector4.textContent = choiceText; //shows the selected choices of both
            }

            
        }//ends winnerDeciderfunction()

         winnerDeciderfunction (humanRes, getComputerChoice().toLowerCase());//calling winnerdeciderfunction()

    }//ends playGame()

    //playGame() is called at the click of the mouse button by the user








