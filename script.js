let humanScore = 0;
let computerScore = 0;
const playButton = document.getElementById("play-game");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultsDiv = document.getElementById("results");
let message;

function getComputerChoice (){
  let value = Math.floor(Math.random() * 3);
  switch(value) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    default:
      return "scissors";
      break;
  }
}

function getHumanChoice () {
  const regexOption = new RegExp('^(rock)|(paper)|(scissors)$', "i","m");
  let isValid = false;
  let choice = prompt("Select (rock, paper, scissors)");
  do {
    if (regexOption.test(choice)) {
      isValid = true;
    }
  } while (isValid == false);
  return choice;
}

function playRound (humanChoice, computerChoice) {
  let state = '';

  if (humanChoice == "rock") {
    if(computerChoice == "paper") {
      computerScore += 1;
      state = "lose";
    }
    else if (computerChoice == "scissors") {
      humanScore += 1;
      state = "win";
    }
    else {
      state = "tie";
    }
  }
  else if (humanChoice == "paper") {
    if (computerChoice == "scissors") {
      computerScore += 1;
      state = "lose";
    }
    else if (computerChoice == "rock") {
      humanScore += 1;
      state = "win";
    }
    else {
      state = "tie";
    }
  }
  else {
    if (computerChoice == "rock") {
      computerScore += 1;
      state = "lose";
    }
    else if (computerChoice == "paper") {
      humanScore += 1;
      state = "win";
    }
    else {
      state = "tie";
    }
  }
  message = document.createElement("span");
  message.innerHTML = `<p class="${state} result"><b>${state}</b>
                <br> You: ${humanChoice} Computer: ${computerChoice}
                <br> Your Score: ${humanScore} Computer Score: ${computerScore}</p>`;
  resultsDiv.prepend(message);

  if(humanScore == 5) {
    resultsDiv.innerHTML = `<p class="win result"><b>You win the game!</b>
                           <br>Your Score: ${humanScore} Computer Score: ${computerScore}</p>`;
    endGame();
  }
  else if (computerScore == 5) {
    resultsDiv.innerHTML = `<p class="lose result"><b>You lose!</b>
                            <br>Your Score: ${humanScore} Computer Score: ${computerScore}</p>`;
    endGame();
  }
}

function endGame () {
  rockButton.style.display = "none";
  paperButton.style.display = "none";
  scissorsButton.style.display = "none";
  playButton.style.display = "block";
}

function playGame () {
  clear();
  rockButton.style.display = "block";
  paperButton.style.display = "block";
  scissors.style.display = "block";
  playButton.style.display = "none";
}

function clear () {
  resultsDiv.innerHTML = ``;
  humanScore = 0;
  computerScore = 0;
}

rockButton.addEventListener("click", () => playRound("rock",getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));
playButton.addEventListener("click", () => playGame());

playGame();
