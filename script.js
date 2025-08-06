const options = Array("paper", "scissors", "rock");

const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    return selectedChoice = options[choice];
};

const getHumanChoice = () => {
    let humanChoice = prompt("make your pick [1-3]");
    if (isNaN(humanChoice) || humanChoice === 0)
        return console.log("invalid choice");
    else
        return options[humanChoice - 1];
}

const getScores = (humanScore, computerScore) => {
    console.log("-Scores-");
    console.log("human: ", humanScore);
    console.log("computer: ", computerScore);
};

const getResult = (humanChoice, computerChoice, humanScore, computerScore) => {
    if (humanChoice == computerChoice)
        return console.log("tie");
    if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1;
        return console.log(`You Win, ${humanChoice} beats ${computerChoice}`);
    }
    if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
        return console.log(`You Win, ${humanChoice} beats ${computerChoice}`);
    }
    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
        return console.log(`You Win, ${humanChoice} beats ${computerChoice}`);
    }
    else {
        computerScore = computerScore + 1;
        return console.log(`You Lose, ${computerChoice} beats ${humanChoice}`);
    }
};

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    console.log(`computer choice:  ${computerChoice}`);
    console.log(`user choice:  ${humanChoice}`);
    getResult(humanChoice, computerChoice, humanScore, computerScore);
    getScores(humanScore, computerScore);
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    console.log("welcome to Odin's RPS!\n");

    // for (i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection, humanScore, computerScore);
    // }
}

playGame()