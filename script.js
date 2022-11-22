function playRound (playerSelection, computerSelection){

}
//Randomises computer choice
function getComputerChoice(){
    return weapons[Math.floor(Math.random()*weapons.length)]
}

//Prompts player to enter their choice 
function getPlayerChoice(){
    let playerChoice = prompt("Pick your weapon. Rock, Paper or Scissors?!").toLowerCase();
    if((playerChoice == 'rock') || (playerChoice == 'paper') || (playerChoice == 'scissors')){
        return playerChoice;
    } else {
        alert("You must enter a valid choice")
        return getPlayerChoice();
    }

}

const weapons = ["rock", "paper", "scissors"]