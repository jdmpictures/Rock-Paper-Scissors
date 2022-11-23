
const weapons = ["rock", "paper", "scissors"];

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

function playRound (){
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection)
        if(playerSelection == computerSelection){
            return console.log('It\'s a draw!')
        }
        else if(playerSelection == 'rock' && computerSelection == 'paper') {
            return console.log('Computer wins!')
        } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            return console.log('Computer wins!')
        } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            return console.log('Computer wins!')
        } else {
            return console.log('Player wins!')
        } 
    
}
