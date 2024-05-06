let humanScore = 0;
let computerScore = 0;

function getComputerChoice (){
  const value = Math.floor(Math.random() * 3);

  if ( value == 0 ){
    return "rock";
  } else if (value == 1){
    return "paper";
  } else {
    return "scissors";
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
    if(computerChoice = "paper") {
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
  console.log(`You ${state}\n You: ${humanChoice} Computer: ${computerChoice}\n Your Score: ${humanScore} Computer Score: ${computerScore}`);
}

function playGame () {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(),getComputerChoice());
  }
}

playGame();
