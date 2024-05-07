let humanScore = 0;
let computerScore = 0;
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultsDiv = document.getElementById("results");

function getComputerChoice (){
  let value = Math.floor(Math.random() * 3);
  console.log(value);
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
  resultsDiv.innerHTML += `<p>${state}
                <br> You: ${humanChoice} Computer: ${computerChoice}
                <br> Your Score: ${humanScore} Computer Score: ${computerScore}</p>`;
}

function playGame () {
}

rockButton.addEventListener("click", () => playRound("rock",getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));

playGame();
