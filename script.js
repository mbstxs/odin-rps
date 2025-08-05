const options = Array("paper", "scissors", "rock");
let humanScore = 0;
let computerScore = 0;

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

const getScores = () => {
    console.log("-Scores-");
    console.log("human: ", humanScore);
    console.log("computer: ", computerScore);
};

const getResult = (humanChoice, computerChoice) => {
    if (humanChoice == computerChoice)
        return console.log("tie");
    if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1;
        return console.log("User Wins");
    }
    if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
        return console.log("User Wins");
    }
    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
        return console.log("User Wins");
    }
    else {
        computerScore += 1;
        return console.log("Computer Wins");
    }
};

function playRound(humanChoice, computerChoice) {
    console.log("welcome to Odin's RPS!\n");
    console.log(`computer choice:  ${computerChoice}`);
    console.log(`user choice:  ${humanChoice}`);
    getResult(humanChoice, computerChoice);
    getScores();
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

