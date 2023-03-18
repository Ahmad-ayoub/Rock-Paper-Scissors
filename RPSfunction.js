// get all the image elements
const rockImage = document.getElementById("Rock");
const paperImage = document.getElementById("Paper");
const scissorsImage = document.getElementById("Scissors");

// add event listeners to each image element
rockImage.addEventListener("click", startGame);
paperImage.addEventListener("click", startGame);
scissorsImage.addEventListener("click", startGame);
let finalChoiceU = "";

let user = 0;
let computer = 0;

function startGame(image) {
  const finalChoiceU = image.target.dataset.value;
  const choices = ["Rock", "Paper", "Scissors"];
  const computerSelect = Math.floor(Math.random() * choices.length);
  const finalChoiceC = choices[computerSelect];

  const results = document.querySelector("#results");
  const scoreU = document.querySelector("#scoreU");
  const scoreC = document.querySelector("#scoreC");
  let score = "";
  let answer = "";
  switch (true) {
    case finalChoiceC === finalChoiceU:
      answer = `You chose ${finalChoiceU}<br><br>Computer chose ${finalChoiceC}<br><br>It's a draw`;
      break;
    case finalChoiceC === "Rock" && finalChoiceU === "Scissors":
    case finalChoiceC === "Paper" && finalChoiceU === "Rock":
    case finalChoiceC === "Scissors" && finalChoiceU === "Paper":
      answer = `You chose ${finalChoiceU}<br><br>Computer chose ${finalChoiceC}<br><br>Computer wins!`;
      computer++;
      score = `${computer}`;
      scoreC.textContent = score;
      break;
    case finalChoiceC === "Rock" && finalChoiceU === "Paper":
    case finalChoiceC === "Paper" && finalChoiceU === "Scissors":
    case finalChoiceC === "Scissors" && finalChoiceU === "Rock":
      answer = `You chose ${finalChoiceU}<br><br>Computer chose ${finalChoiceC}<br><br>You win!`;
      user++;
      score = `${user}`;
      scoreU.textContent = score;
      break;
    default:
      answer = "Invalid choices!";
  }

  results.innerHTML = answer;
  results.style.lineheight = "2";
  results.style.textAlign = "center";
}
