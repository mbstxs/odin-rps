const options = Array("paper", "scissors", "rock");

const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    return selectedChoice = options[choice];
};

const getHumanChoice = () => {
    let humanChoice = prompt("make your pick. [1-3]");
    if (isNaN(humanChoice) || humanChoice === 0)
        return console.log("invalid choice");
    else
        return options[humanChoice - 1];
}

const getScores = (humanScore, computerScore) => {
    console.log("")
    console.log("-Scores-");
    console.log("human: ", humanScore);
    console.log("computer: ", computerScore);
    console.log("");
};

const getResult = (humanChoice, computerChoice) => {
    if (humanChoice == computerChoice) {
        console.log("tie");
        return 2
    }

    switch (humanChoice) {
        case "paper":
            if (computerChoice == "rock") {
                console.log(`You Win, ${humanChoice} beats ${computerChoice}`);
                return 0
            } else if (computerChoice == "scissors") {
                console.log(`You Lose, ${computerChoice} beats ${humanChoice}`);
                return 1
            }
            break;
        case "rock":
            if (computerChoice == "scissors") {
                console.log(`You Win, ${humanChoice} beats ${computerChoice}`);
                return 0
            } else if (computerChoice == "paper") {
                console.log(`You Lose, ${computerChoice} beats ${humanChoice}`);
                return 1
            }

            break;
        case "scissors":
            if (computerChoice == "paper") {
                console.log(`You Win, ${humanChoice} beats ${computerChoice}`);
                return 0
            } else if (computerChoice == "rock") {
                console.log(`You Lose, ${computerChoice} beats ${humanChoice}`);
                return 1
            }
            break;
        default:
            console.log("Ivalid choice");
            break;
    }
};

function playRound(humanChoice, computerChoice) {
    console.log("round ", i + 1);
    let result = getResult(humanChoice, computerChoice);
    console.log("---------------");
    return result;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    console.log("welcome to Odin's RPS!");
    console.log('');

    for (i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection)
        if (result == 0)
            humanScore += 1
        else if (result == 1)
            computerScore += 1;
    }

    getScores(humanScore, computerScore);
}

playGame()