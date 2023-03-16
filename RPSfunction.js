// get all the image elements
const rockImage = document.getElementById("Rock");
const paperImage = document.getElementById("Paper");
const scissorsImage = document.getElementById("Scissors");

// add event listeners to each image element
rockImage.addEventListener("click", startGame);
paperImage.addEventListener("click", startGame);
scissorsImage.addEventListener("click", startGame);

function startGame() {
  let user = 0;
  let computer = 0;

  let choices = ["Rock", "Paper", "Scissors"];

  function userChoice() {
    let userSelect = Math.floor(Math.random() * choices.length);
    let finalChoiceU = choices[userSelect];

    return finalChoiceU;
  }

  function computerChoice() {
    let computerSelect = Math.floor(Math.random() * choices.length);
    let finalChoiceC = choices[computerSelect];

    return finalChoiceC;
  }

  function compareChoices(finalChoiceC, finalChoiceU) {
    switch (true) {
      case finalChoiceC === finalChoiceU: {
        let resultOne = document.querySelector("#results");
        let answer = `User chose ${finalChoiceU}\nComputer chose ${finalChoiceC}\nIt's a draw`;
        let answerPaste = document.createTextNode(answer);
        resultOne.style.lineheight = "2";
        resultOne.appendChild(answerPaste);
      }
    }
  }
}
