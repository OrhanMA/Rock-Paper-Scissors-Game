const options = ["rock", "paper", "scissors"];
function getComputerChoice() {
  const choice = Math.floor(Math.random() * options.length);
  return choice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Pick 'rock','paper' or 'scissors'").toLowerCase();
  computerSelection = options[getComputerChoice()];

  if (playerSelection === computerSelection) {
    console.log(
      `You selected ${playerSelection} and the computer ${computerSelection}. These are the same so this is a draw.`
    );
    return "draw";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(
      `You picked ${playerSelection} and it wins over the computer's ${computerSelection}`
    );
    return "won";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    console.log(
      `You picked ${playerSelection} but it's losing against the computer's ${computerSelection}`
    );
    return "lost";
  } else {
    console.log(
      `You put an invalid value "${playerSelection}" so we count it as a draw. Be careful next time!`
    );
    return "invalid";
  }
}
// console.log(playRound(playerSelection, computerSelection));

function game() {
  let computerScore = 0;
  let playerScore = 0;
  let draw = 0;
  for (i = 1; i < 6; i++) {
    console.log(`----- START of ROUND ${i} -----`);
    const roundResult = playRound();
    if (roundResult === "won") {
      playerScore++;
      console.log(
        `Current score: you have ${playerScore} points ; computer ${computerScore} ; draw ${draw}`
      );
    } else if (roundResult === "lost") {
      computerScore++;
      console.log(
        `Current score: you have ${playerScore} points ; computer ${computerScore} ; draw ${draw}`
      );
    } else {
      draw++;
      console.log(
        `Current score: you have ${playerScore} points ; computer ${computerScore} ; draw ${draw}`
      );
    }
  }
  if (playerScore > computerScore) {
    console.log("----- TIME FOR RESULTS... -----");
    console.log(`You won with ${playerScore} vs ${computerScore}. GG!`);
  } else if (playerScore < computerScore) {
    console.log("----- TIME FOR RESULTS... -----");
    console.log(`You lost with ${playerScore} vs ${computerScore}. Too bad :(`);
  } else if (playerScore === computerScore) {
    console.log("----- TIME FOR RESULTS... -----");
    console.log(
      `You have ${playerScore} and the machine ${computerScore}. Nobody won today...`
    );
  }
}

game();
