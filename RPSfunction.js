// get all the image elements
const rockImage = document.getElementById("Rock");
const paperImage = document.getElementById("Paper");
const scissorsImage = document.getElementById("Scissors");

// add event listeners to each image element
let chooseRock = rockImage.addEventListener("click", startGame);
let choosePaper = paperImage.addEventListener("click", startGame);
let chooseScissors = scissorsImage.addEventListener("click", startGame);
let finalChoiceU = "";

function startGame(image) {
  let user = 0;
  let computer = 0;
  finalChoiceU = image.target.dataset.value;
  debugger;

  let choices = ["Rock", "Paper", "Scissors"];

  //function userChoice() {
  //let userSelect = Math.floor(Math.random() * choices.length);

  //return finalChoiceU;
  //}

  //function computerChoice() {
  let computerSelect = Math.floor(Math.random() * choices.length);
  let finalChoiceC = choices[computerSelect];

  //return finalChoiceC;
  //}

  //function compareChoices(finalChoiceC, finalChoiceU) {
  let results = document.querySelector("#results");
  let scoreEach = document.querySelector("#score");
  let score = "";
  let answer = "";
  switch (true) {
    case finalChoiceC === finalChoiceU:
      answer = `User chose ${finalChoiceU}\nComputer chose ${finalChoiceC}\nIt's a draw`;
      break;
    case finalChoiceC === "Rock" && finalChoiceU === "Scissors":
    case finalChoiceC === "Paper" && finalChoiceU === "Rock":
    case finalChoiceC === "Scissors" && finalChoiceU === "Paper":
      answer = `User chose ${finalChoiceU}\nComputer chose ${finalChoiceC}\nComputer wins!`;
      computer++;
      score = `${user} - ${computer}`;
      break;
    case finalChoiceC === "Rock" && finalChoiceU === "Paper":
    case finalChoiceC === "Paper" && finalChoiceU === "Scissors":
    case finalChoiceC === "Scissors" && finalChoiceU === "Rock":
      answer = `User chose ${finalChoiceU}\nComputer chose ${finalChoiceC}\nYou win!`;
      user++;
      score = `${user} - ${computer}`;
      break;
    default:
      answer = "Invalid choices!";
  }

  let finalScore = document.createTextNode(score);
  scoreEach.style.lineheight = "2";
  scoreEach.appendChild(finalScore);

  let answerPaste = document.createTextNode(answer);
  results.style.lineheight = "2";
  results.appendChild(answerPaste);
}
//}
