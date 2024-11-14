function playerMove(param) {
  let computerChoice = computerMove();
  let result = "";
  if (param === "Rock") {
    if (computerChoice === "Rock") {
      result = "tie";
    } else if (computerChoice === "Paper") {
      result = "you lose";
    } else if (computerChoice === "Scissor") {
      result = "you won";
    }

    alert(
      `computer: ${computerChoice} ---  Player: ${param} result:${result} `
    );
  }
  if (param === "Paper") {
    if (computerMove === "Rock") {
      result = "you won";
    } else if (computerMove === "Paper") {
      result = "tie";
    } else if (computerMove === "Scissor") {
      result = "you lode";
    }
    alert(
      `computer: ${computerChoice} ---  Player: ${param} result:${result} `
    );
  }
  if (param === "Scissor") {
    if (computerMove === "Rock") {
      result = "you lose";
    } else if (computerMove === "Paper") {
      result = "you won";
    } else if (computerMove === "Scissor") {
      result = "tie";
    }
    alert(
      `computer: ${computerChoice} ---  Player: ${param} result:${result} `
    );
  }
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
