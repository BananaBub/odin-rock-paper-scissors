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

const buttonContainer = document.querySelector(".container");
buttonContainer.style.cssText = "text-align: center;";

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const message = document.querySelector(".message");
const scoreCount = document.querySelector(".scoreCount");
const reloadMessage = document.querySelector(".reloadMessage");

let choice;

rockBtn.addEventListener("click", () => roundStatus("rock"));
paperBtn.addEventListener("click", () => roundStatus("paper"));
scissorsBtn.addEventListener("click", () => roundStatus("scissors"));

function getHumanChoice() {
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
            (choice === "rock") ? message.textContent = "Rock = Rock" :
            (choice === "paper") ? (message.textContent = "Paper beats Rock", ++humanScore ):
            (choice ===  "scissors") ? (message.textContent = "Rock beats Scissors", ++computerScore) :
            alert('Your choices are: "rock", "paper", "scissors"!'); 
            break;
        case "paper":
            (choice === "rock") ? (message.textContent = "Paper beats Rock", ++computerScore) :
            (choice === "paper") ? message.textContent = "Paper = Paper" :
            (choice === "scissors") ? (message.textContent = "Scissors beat Paper", ++humanScore) :
            alert('Your choices are: "rock", "paper", "scissors"!'); 
            break;
        case "scissors":
            (choice  === "rock") ? (message.textContent = "Rock beats Scissors", humanScore++) :
            (choice === "paper") ? (message.textContent = "Paper beats Rock", computerScore++) :
            (choice === "scissors") ? message.textContent = "Scissors = Scissors" :
            alert('Your choices are: "rock", "paper", "scissors"!'); 
            break;
    }
}

function checkScore(computerScore, humanScore) {
    if(humanScore === 5) {
        gameStatus = "finished";
        message.textContent = `YOU WIN!`;
        reloadMessage.textContent = "reload the page to try again";
        buttonContainer.remove();
    } else if (computerScore === 5) {
        gameStatus = "finished";
        message.textContent = `YOU LOSE!`;
        reloadMessage.textContent = "reload the page to try again";
        buttonContainer.remove();
    } else {
        gameStatus = "ongoing";
    }

    scoreCount.textContent = `You: ${humanScore}\ Computer: ${computerScore}`;
}

function roundStatus(playerChoice) {
    choice = playerChoice;

    playRound(getComputerChoice, getHumanChoice);

    console.log(`You: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);

    checkScore(computerScore, humanScore);  
}