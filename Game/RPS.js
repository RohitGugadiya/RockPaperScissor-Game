let score = JSON.parse(localStorage.getItem("scoree"));

if (!score) {
  score = {
    win: 0,
    lose: 0,
    tie: 0,
  };
}
updateScore();
function playerMove(param) {
  let result = "";
  let computerChoice = computerMove();

  if (param === "Rock") {
    if (computerChoice === "Rock") {
      result = "tie";
    } else if (computerChoice === "Paper") {
      result = "you lose";
    } else if (computerChoice === "Scissor") {
      result = "you won";
    }
  } else if (param === "Paper") {
    if (computerChoice === "Rock") {
      result = "you won";
    } else if (computerChoice === "Paper") {
      result = "tie";
    } else if (computerChoice === "Scissor") {
      result = "you lose";
    }
  } else if (param === "Scissor") {
    if (computerChoice === "Rock") {
      result = "you lose";
    } else if (computerChoice === "Paper") {
      result = "you won";
    } else if (computerChoice === "Scissor") {
      result = "tie";
    }
  }

  if (result === "you won") {
    score.win += 1;
  } else if (result === "you lose") {
    score.lose += 1;
  } else if (result === "tie") {
    score.tie += 1;
  }
  localStorage.setItem("scoree", JSON.stringify(score));

  let computerShowImage = document.querySelector(".computer-choice");
  computerShowImage.src = `${computerChoice}.png`;
  let userShowImage = document.querySelector(".user-choice");
  userShowImage.src = `${param}.png`;
  let showresultElem = document.querySelector(".show-result");
  showresultElem.innerHTML = `${result}`;

  updateScore();

  // alert(
  //   `computer: ${computerChoice} ---  Player: ${param} result:${result}
  //     win:${score.win} tie:${score.tie} lose: ${score.lose}`
  // );
}

function updateScore() {
  let showscoreElem = document.querySelector(".show-score");
  showscoreElem.innerHTML = ` win:${score.win} tie:${score.tie} lose: ${score.lose}`;
}

function computerMove() {
  let randomNumber = Math.random();
  let computerChoice = "";

  if (randomNumber > 0 && randomNumber < 1 / 3) {
    computerChoice = "Rock";
  } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    computerChoice = "Paper";
  } else if (randomNumber > 2 / 3 && randomNumber < 1) {
    computerChoice = "Scissor";
  }
  return computerChoice;
}
