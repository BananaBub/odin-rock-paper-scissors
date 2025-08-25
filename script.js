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

console.log(getComputerChoice());

