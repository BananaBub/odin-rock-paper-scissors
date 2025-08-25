function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let choice = undefined;

    switch (randomNum) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }

    return choice;
}

function getHumanChoice() {
    let choice = String(prompt("Rock, Paper, or Scissors?", "rock")).toLowerCase();

    if (choice !== "rock"
        && choice !== "paper"
        && choice !== "scissors") {
            alert(`"${choice}" is not a valid answer!\n Restart the page to try again!`);
    } else {
        return choice;
    }
} 

let gameStatus = "ongoing";
let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    gameStatus = "ongoing";

    switch (computerChoice()) {
        case "rock":
            (humanChoice() === "rock") ? console.log("It's a tie! Rock vs Rock.") :
            (humanChoice() === "paper") ? (console.log("You win! Paper beats Rock."), ++humanScore ):
            (humanChoice() ===  "scissors") ? (console.log("You lose! Rock beats Scissors."), ++computerScore) :
            alert("There is an error!");
            break;
        case "paper":
            (humanChoice() === "rock") ? (console.log("You lose!, Paper beats Rock."), ++computerScore) :
            (humanChoice() === "paper") ? console.log("It's a tie! Paper vs Paper.") :
            (humanChoice() === "scissors") ? (console.log("You win! Scissors beat Paper."), ++humanScore) :
            alert("There is an error!");
            break;
        case "scissors":
            (humanChoice()  === "rock") ? (console.log("You win! Rock beats Scissors."), humanScore++) :
            (humanChoice() === "paper") ? (console.log("You lose! Scissors beat Rock."), computerScore++) :
            (humanChoice() === "scissors") ? console.log("It's a tie! Scissors vs Scissors.") :
            alert("There is an error!");
            break;
    }
}

function checkScore(computerScore, humanScore) {
    if(humanScore === 5) {
        gameStatus = "finished";
        alert(`You win!\n Final Score: ${humanScore} vs ${computerScore}`);
    } else if (computerScore === 5) {
        gameStatus = "finished";
        alert(`You lose!\n Final Score: ${humanScore} vs ${computerScore}`);
    } else {
        gameStatus = "ongoing";
    }
}

while (gameStatus === "ongoing") {
    playRound(getComputerChoice, getHumanChoice);
    console.log(`You: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);

    checkScore(computerScore, humanScore);   
}