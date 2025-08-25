function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = undefined;

    switch (randomNum) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }

    return computerChoice;
}

//Prompt user to choose an option
//Check validity of user choice
//Get user prompt and input in a variable

function getHumanChoice() {
    let humanChoice = String(prompt("Rock, Paper, or Scissors?", "rock")).toLowerCase();

    if (humanChoice !== "rock"
        && humanChoice !== "paper"
        && humanChoice !== "scissors") {
            alert(`"${humanChoice}" is not a valid answer!\n Restart the page to try again!`);
    } else {
        console.log(humanChoice);
        return humanChoice;
    }
}

getHumanChoice();
