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
  do {
    let choice = prompt("Select (rock, paper, scissors)");
    if (regexOption.test(choice)) {
      isValid = true;
    }
  } while (isValid == false);
}
