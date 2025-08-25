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
            alert(`"${choice}" is not a valid answer!`);
    } else {
        return choice;
    }
} 


let gameStatus = "ongoing";
let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    gameStatus = "ongoing";
    choice = humanChoice();

    switch (computerChoice()) {
        case "rock":
            (choice === "rock") ? console.log("It's a tie! Rock vs Rock.") :
            (choice === "paper") ? (console.log("You win! Paper beats Rock."), ++humanScore ):
            (choice ===  "scissors") ? (console.log("You lose! Rock beats Scissors."), ++computerScore) :
            alert('Your choices are: "rock", "paper", "scissors"!'); 
            break;
        case "paper":
            (choice === "rock") ? (console.log("You lose!, Paper beats Rock."), ++computerScore) :
            (choice === "paper") ? console.log("It's a tie! Paper vs Paper.") :
            (choice === "scissors") ? (console.log("You win! Scissors beat Paper."), ++humanScore) :
            alert('Your choices are: "rock", "paper", "scissors"!'); 
            break;
        case "scissors":
            (choice  === "rock") ? (console.log("You win! Rock beats Scissors."), humanScore++) :
            (choice === "paper") ? (console.log("You lose! Paper beats Rock."), computerScore++) :
            (choice === "scissors") ? console.log("It's a tie! Scissors vs Scissors.") :
            alert('Your choices are: "rock", "paper", "scissors"!'); 
            break;
    }
}

function checkScore(computerScore, humanScore) {
    if(humanScore === 5) {
        gameStatus = "finished";
        alert(`You win!\n You: ${humanScore}\n Computer: ${computerScore}`);
    } else if (computerScore === 5) {
        gameStatus = "finished";
        alert(`You lose!\n You: ${humanScore}\ Computer: ${computerScore}`);
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