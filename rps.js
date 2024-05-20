var computerScore = 0;
var humanScore = 0;

const scoreBox = document.querySelector("#score-box");
const scores = document.createElement("div");
scores.classList.add("scores");

const pHumanScore = document.createElement("div");
pHumanScore.classList.add("score");
pHumanScore.textContent = "You: "+ humanScore;

const divider = document.createElement("div");
divider.classList.add("divider");
divider.textContent = " - ";

const pComputerScore = document.createElement("div");
pComputerScore.classList.add("score");
pComputerScore.textContent = "Computer: "+ computerScore;

const winner = document.createElement("div")
winner.classList.add("winner")
winner.textContent = "";


scores.append(pHumanScore,divider,pComputerScore);
scoreBox.append(scores, winner);

let getComputerChoice = () => {
    let random = Math.floor(Math.random()* 3);
    switch(random){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

let getHumanChoice = () => {
    let choice = prompt("Enter your choice: ");
    return choice;
}

let playRound = (humanChoice) => {
    let computerChoice = getComputerChoice();
    
    console.log("Computer choice: " + computerChoice + " Human choice: " + humanChoice);

    if(computerChoice === humanChoice){
        winner.textContent = "It's a tie!";
    } else if(computerChoice === "rock" && humanChoice === "scissors"){
        winner.textContent = "Computer wins!";
        computerScore++;
    } else if(computerChoice === "paper" && humanChoice === "rock") {
        winner.textContent = "Computer wins!";
        computerScore++;
    } else if(computerChoice === "scissors" && humanChoice === "paper") {
        winner.textContent = "Computer wins!";
        computerScore++;
    } else {
        winner.textContent = "Human wins!";
        humanScore++;
    }

    pHumanScore.textContent = "You: "+ humanScore;
    pComputerScore.textContent = "Computer: " + computerScore;
 }

 const rock = document.querySelector("#rock");
 rock.addEventListener("click", () => {
    if(computerScore === 5 || humanScore === 5){
        winner.textContent = "Game Over - Reload the Page to start a new Game!"
    } else {
        playRound("rock");
    }
 })
 
 const paper = document.querySelector("#paper");
 paper.addEventListener("click", () => {
    if(computerScore === 5 || humanScore === 5){
        winner.textContent = "Game Over - Reload the Page to start a new Game!"
    } else {
        playRound("paper");
    }
 })

 const scissors = document.querySelector("#scissors");
 scissors.addEventListener("click", () => {
    if(computerScore === 5 || humanScore === 5){
        winner.textContent = "Game Over - Reload the Page to start a new Game!"
    } else {
        playRound("scissors");
    }
 })