
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
const game = document.getElementById('game');
const playerWinMessage = document.querySelector('.player-win-message')
const computerWinMessage = document.querySelector('.computer-win-message')
const playerRestartButton = document.querySelector('.player-reset-button')
const computerRestartButton = document.querySelector('.computer-reset-button')


const rockSound = new Audio('/audio/impact_brick_hit_ground_002.mp3');
const paperSound = new Audio('/audio/paper-sound.mp3');
const scissorsSound = new Audio('/audio/scissors.mp3');
const homer = new Audio('/audio/homer.mp3')
const homerTwo = new Audio('/audio/homer2.mp3')

const playerScore = document.querySelector('#player-score');
playerScore.textContent = "Player score 0"
const computerScore = document.querySelector('#computer-score')
computerScore.textContent = "Computer score 0"


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
    playerWin = () => {
        winMessage.innerHTML = ' '
        winMessage.innerHTML = 'Player Selected, ' + playerSelection + '. Computer selected, ' + computerSelection + '. Player wins!'
    }
    computerWin = () => {
        winMessage.innerHTML = ' '
        winMessage.innerHTML = 'Player Selected, ' + playerSelection + '. Computer selected, ' + computerSelection + '. Computer wins!'
    }
    draw = () => {
        winMessage.innerHTML = ' '
        winMessage.innerHTML = 'Player Selected, ' + playerSelection + '. Computer selected, ' + computerSelection + '. It\'s a draw!'
    }
    
        if(playerSelection == computerSelection){
            draw();
            return console.log('It\'s a draw!')
        }
        else if(playerSelection == 'rock' && computerSelection == 'paper') {
            computerWinCount++;
            setComputerScore();
            computerWin();
            whoWinGame(); 
            return console.log('Computer wins this round!')
        } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            computerWinCount++;
            setComputerScore();
            computerWin();
            whoWinGame(); 
            return console.log('Computer wins this round!')
        } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            computerWinCount++;
            setComputerScore();
            computerWin();
            whoWinGame(); 
            return console.log('Computer wins this round!')
        } else {
            playerWinCount++;
            setPlayerScore()
            playerWin();
            whoWinGame(); 
            return console.log('Player wins this round!')
        } 
    }


//functions to set both player and computer score
function setComputerScore(){
    computerScore.textContent = "Computer score " + computerWinCount;   
}

function setPlayerScore(){
    playerScore.textContent = "Player score " + playerWinCount;

}
function resetGame(){
    playerWinCount = 0;
    computerWinCount = 0;
    setComputerScore();
    setPlayerScore();
    winMessage.textContent = " ";
}



playerRestartButton.addEventListener('click', () =>{
    resetGame();
    playerModal();
    
})


computerRestartButton.addEventListener('click', () => {
    resetGame();
    computerModal();
} )


whoWinGame = () => {
    if (playerWinCount === 5) {
        homerTwo.play();
        playerModal();
    } else if(computerWinCount === 5){
        homer.play();
        computerModal();
    }
}

function playerModal() {
    playerWinMessage.classList.toggle("show-modal");
    

}


function computerModal() {
    computerWinMessage.classList.toggle("show-modal")
}