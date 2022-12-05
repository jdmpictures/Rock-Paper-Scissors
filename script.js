
const weapons = ["rock", "paper", "scissors"];
let playerWinCount = 0;
let computerWinCount = 0;
let playerSelection;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const startGame = document.querySelector('.weapons');
const rstGame = document.querySelector('.button');
const winMessage = document.querySelector('#win-message');


const rockSound = new Audio('/audio/impact_brick_hit_ground_002.mp3');
const paperSound = new Audio('/audio/paper-sound.mp3');
const scissorsSound = new Audio('/audio/scissors.mp3');
const typeSound = new Audio('/audio/typewriter-1.mp3');

const playerScore = document.querySelector('#player-score');
playerScore.textContent = "Player score: 0"
const computerScore = document.querySelector('#computer-score')
computerScore.textContent = "Computer score: 0"


rock.addEventListener ('click',() =>{
    playerSelection = 'rock';
    rockSound.play();
})

paper.addEventListener ('click', () => {
    playerSelection = 'paper';
    paperSound.play();
})

scissors.addEventListener ('click', () => {
    playerSelection = 'scissors';
    scissorsSound.play();
})

startGame.addEventListener('click', () =>{
    
    playRound();
});

rstGame.addEventListener('click', () => {
    resetGame();
    winMessageDelete();
    setComputerScore();
    setPlayerScore();

});

//Randomises the computers choice of weapon
function getComputerChoice(){
    return weapons[Math.floor(Math.random()*weapons.length)]
}

//Plays one round of the game 
function playRound (){
    const computerSelection = getComputerChoice();

        if(playerSelection == computerSelection){
            return console.log('It\'s a draw!')
        }
        else if(playerSelection == 'rock' && computerSelection == 'paper') {
            computerWinCount++;
            setComputerScore();
            return console.log('Computer wins this round!')
        } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            computerWinCount++;
            setComputerScore();
            return console.log('Computer wins this round!')
        } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            computerWinCount++;
            setComputerScore();
            return console.log('Computer wins this round!')
        } else {
            playerWinCount++;
            setPlayerScore()
            playerWin(); 
            return console.log('Player wins this round!')
        } 
    
}

function setComputerScore(){
    computerScore.textContent = "Computer score: " + computerWinCount;   
}

function setPlayerScore(){
    playerScore.textContent = "Player score: " + playerWinCount;

}
function resetGame(){

    playerWinCount = 0;
    computerWinCount = 0;
}


winMessageDelete = () =>{
    winMessage.textContent = " ";
}


//'Pick your weapon function 

let messageArray =['Choose your weapon.'];
let textPosition = 0;
let speed = 100;

typewriter = () => {
    document.querySelector('#message').
    innerHTML = messageArray[0].substring(0,
        textPosition) + "<span>\u25ae</span>"

        if(textPosition++ != messageArray[0].length)
        setTimeout(typewriter, speed);    
}
window.addEventListener("load", () => {
    typewriter();
    typeSound.play();
});



let playerWinArray = ["Player won this round!"]
let textPositionTwo = 0;

playerWin = () => {
    winMessage.
    innerHTML = playerWinArray[0].substring(0,
        textPositionTwo) + "<span>\u25ae</span>"

        if(textPositionTwo++ != playerWinArray[0].length)
        setTimeout(playerWin, speed);
    
}