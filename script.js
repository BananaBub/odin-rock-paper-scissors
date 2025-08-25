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

let gameStatus;
let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    gameStatus = "ongoing";

    switch (computerChoice()) {
        case "rock":
            (humanChoice() === "rock") ? alert("It's a tie! Rock vs Rock.") :
            (humanChoice() === "paper") ? (alert("You win! Paper beats Rock."), ++humanScore ):
            (humanChoice() ===  "scissors") ? (alert("You lose! Rock beats Scissors."), ++computerScore) :
            alert("There is an error!");
            break;
        case "paper":
            (humanChoice() === "rock") ? (alert("You lose!, Paper beats Rock."), ++computerScore) :
            (humanChoice() === "paper") ? alert("It's a tie! Paper vs Paper.") :
            (humanChoice() === "scissors") ? (alert("You win! Scissors beat Paper."), ++humanScore) :
            alert("There is an error!");
            break;
        case "scissors":
            (humanChoice()  === "rock") ? (alert("You win! Rock beats Scissors."), humanScore++) :
            (humanChoice() === "paper") ? (alert("You lose! Scissors beat Rock."), computerScore++) :
            (humanChoice() === "scissors") ? alert("It's a tie! Scissors vs Scissors.") :
            alert("There is an error!");
            break;
    }
}

for(i = 1; i <= 9; i++) {
    if (gameStatus === "ongoing")
    {
        playRound(getComputerChoice, getHumanChoice);
        console.log(`Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);

        let checkScore = (computerScore, humanScore) =>
            (humanScore === 5 || computerScore === 5) ? gameStatus = "finished" :
            gameStatus = "ongoing";

        checkScore(computerScore, humanScore);   
    } else {
        alert("Winner");
    }
}