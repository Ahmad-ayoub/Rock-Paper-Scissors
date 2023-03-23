// get all the image elements
const rockImage = document.getElementById("Rock");
const paperImage = document.getElementById("Paper");
const scissorsImage = document.getElementById("Scissors");

// add event listeners to each image element
rockImage.addEventListener("click", startGame);
paperImage.addEventListener("click", startGame);
scissorsImage.addEventListener("click", startGame);

const userScoreDisplay = document.querySelector("#userScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");
const finalResultsDisplay = document.querySelector("#finalResultsDisplay");

const userChoiceDisplay = document.getElementById("userChoiceDisplay");
const computerChoiceDisplay = document.getElementById("computerChoiceDisplay");

let userSelect = "";
let computerSelectFinal = 0;
let userScoreCount = 0;
let computerScoreCount = 0;
let gameResult = 0;
//debugger;

function startGame(image) {
  getUserChoice(image);
  getComputerChoice();
  finalChoice();
  displayResult();
}

function getUserChoice(image) {
  userSelect = image.target.dataset.value;
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const computerSelect = Math.floor(Math.random() * choices.length);
  computerSelectFinal = choices[computerSelect];
}

function finalChoice() {
  if (computerSelectFinal === userSelect) {
    gameResult = "It's a tie";
  } else if (
    (computerSelectFinal === "Rock" && userSelect === "Scissors") ||
    (computerSelectFinal === "Paper" && userSelect === "Rock") ||
    (computerSelectFinal === "Scissors" && userSelect === "Paper")
  ) {
    computerScoreCount++;
    computerScoreDisplay.textContent = computerScoreCount;
    gameResult = "Computer Wins!";
  } else if (
    (computerSelectFinal === "Rock" && userSelect === "Paper") ||
    (computerSelectFinal === "Paper" && userSelect === "Scissors") ||
    (computerSelectFinal === "Scissors" && userSelect === "Rock")
  ) {
    userScoreCount++;
    userScoreDisplay.textContent = userScoreCount;
    gameResult = "You win!";
  } else {
    gameResult = "Invalid choices!";
  }
}

function displayResult() {
  userChoiceDisplay.textContent = "You chose " + userSelect;
  computerChoiceDisplay.textContent = "Computer chose " + computerSelectFinal;
  finalResultsDisplay.textContent = gameResult;
  finalResultsDisplay.classList.add("new");
}
