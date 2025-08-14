const options = Array("paper", "scissors", "rock");
let humanScore = 0;
let computerScore = 0;
const body = document.querySelector("body");
const gameCont = document.createElement("div");
const scoreCont = document.createElement("div")
const h1 = document.createElement("h1");
const p = document.createElement("p");
const inputCont = document.createElement("div");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const rockBtn = document.createElement("button");
const startGameBtn = document.createElement("button");
const scoreP = document.createElement("p");
const humanP = document.createElement("p")
const computerP = document.createElement("p")

h1.textContent = "Welcome to Odin's RPS!"
p.textContent = "Click on a button to make your choice";
p.style.visibility = "hidden"
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";
rockBtn.textContent = "Rock";
startGameBtn.textContent = "Start Game"
gameCont.classList = "gameCont"
scoreCont.classList = "scoreCont"
scoreP.textContent = "Score"
humanP.textContent = `You: ${humanScore}`
computerP.textContent = `Computer: ${computerScore}`

inputCont.appendChild(startGameBtn);
gameCont.appendChild(h1);
gameCont.appendChild(p);
gameCont.appendChild(inputCont);

scoreCont.appendChild(scoreP);
scoreCont.style.visibility = "hidden";
scoreCont.appendChild(humanP);
scoreCont.appendChild(computerP);

body.style.backgroundColor = "#000";
body.style.color = "#fff";
body.style.textAlign = "center";
body.appendChild(gameCont);
body.appendChild(scoreCont)

paperBtn.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    let result = playRound("paper", computerSelection);
    avaluateResult(result);
});

scissorsBtn.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    result = playRound("scissors", computerSelection);
    avaluateResult(result);
})

rockBtn.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    let result = playRound("rock", computerSelection);
    avaluateResult(result);
})

startGameBtn.addEventListener("click", () => {
    p.style.visibility = "visible";
    scoreCont.style.visibility = "visible";
    inputCont.removeChild(startGameBtn);
    inputCont.appendChild(paperBtn);
    inputCont.appendChild(scissorsBtn);
    inputCont.appendChild(rockBtn);
});

const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    return selectedChoice = options[choice];
};

const avaluateResult = (result) => {
    if (result == 0) {
        humanScore += 1
        humanP.textContent = `You: ${humanScore}`
    }
    else if (result == 1) {
        computerScore += 1;
        computerP.textContent = `Computer: ${computerScore}`
    }
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
    // console.log("round ", i + 1);
    let result = getResult(humanChoice, computerChoice);
    console.log("---------------");
    return result;
}

function playGame() {

    for (i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection)
    }

    getScores(humanScore, computerScore);
}

// playGame()