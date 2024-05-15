var computerScore = 0;
var humanScore = 0;

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

let playRound = () => {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    console.log("Computer choice: " + computerChoice + " Human choice: " + humanChoice);

    if(computerChoice === humanChoice){
        console.log("It's a tie!");
    } else if(computerChoice === "rock" && humanChoice === "scissors"){
        console.log("Computer wins!");
        computerScore++;
    } else if(computerChoice === "paper" && humanChoice === "rock") {
        console.log("Computer wins!");
        computerScore++;
    } else if(computerChoice === "scissors" && humanChoice === "paper") {
        console.log("Computer wins!");
        computerScore++;
    } else {
        console.log("Human wins!");
        humanScore++;
    }
 }

while(computerScore < 5 && humanScore < 5){
    playRound();
}