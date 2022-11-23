
const weapons = ["rock", "paper", "scissors"];
let playerWinCount = 0;
let computerWinCount = 0;

function getComputerChoice(){
    return weapons[Math.floor(Math.random()*weapons.length)]
}


function getPlayerChoice(){
    let playerChoice = prompt("Pick your weapon. Rock, Paper or Scissors?!").toLowerCase();
    if((playerChoice == 'rock') || (playerChoice == 'paper') || (playerChoice == 'scissors')){
        return playerChoice;
    } else {
        alert("You must enter a valid weapon!")
        return getPlayerChoice();
    }
}

function playRound (){
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
        if(playerSelection == computerSelection){
            return console.log('It\'s a draw!')
        }
        else if(playerSelection == 'rock' && computerSelection == 'paper') {
            computerWinCount++;
            return console.log('Computer wins this round!')
        } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            computerWinCount++;
            return console.log('Computer wins this round!')
        } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            computerWinCount++;
            return console.log('Computer wins this round!')
        } else {
            playerWinCount++;
            return console.log('Player wins this round!')
        } 
    
}


function game(){
    for(i = 1; i < 5; i++) {
        playRound();
    }
    if(playerWinCount > computerWinCount){
        console.log('Player wins the game!')
    } else {
        console.log('You lost to a computer lol.')
    }

    resetGame();
    
}

function resetGame(){
    playerWinCount = 0;
    computerWinCount = 0;
}