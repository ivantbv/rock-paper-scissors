let rps = ['Rock', 'Paper', 'Scissors']; 
let playerScore = 0;
let computerScore = 0;
let draw = 0;

let loseCondition = 'You lose!';
let winCondition = 'You win!';
let tie = 'Its a tie!';

function computerPlay() {  
    return rps[Math.floor(Math.random() * rps.length)]
}

function singleRound(playerSelection, computerSelection) {

computerSelection = computerPlay();

if (playerSelection == rps[2] && computerSelection == rps[0]) {
div.textContent = `You selected ${playerSelection} but Computer selected ${computerSelection}. ${loseCondition}`;
computerScore++
return container.appendChild(div);
} else if (playerSelection == rps[0] && computerSelection == rps[1]) {
div.textContent = `You selected ${playerSelection} but Computer selected ${computerSelection}. ${loseCondition}`;
computerScore++
return container.appendChild(div);
} else if (playerSelection == rps[1] && computerSelection == rps[2]) {
div.textContent = `You selected ${playerSelection} but Computer selected ${computerSelection}. ${loseCondition}`;
computerScore++
return container.appendChild(div);
} else if (playerSelection == rps[2] && computerSelection == rps[1]) {
div.textContent = `You selected ${playerSelection} and Computer selected ${computerSelection}. ${winCondition}`;
return container.appendChild(div);
playerScore++
} else if (playerSelection == rps[0] && computerSelection == rps[2]) {
div.textContent = `You selected ${playerSelection} and Computer selected ${computerSelection}. ${winCondition}`;
return container.appendChild(div);
playerScore++
} else if (playerSelection == rps[1] && computerSelection == rps[0]) {
div.textContent = `You selected ${playerSelection} and Computer selected ${computerSelection}. ${winCondition}`;
return container.appendChild(div);
playerScore++
} else {
div.textContent = `You both selected ${computerSelection}. ${tie}`;
return container.appendChild(div);
draw++;
}
}     

//const playerSelection = prompt('Rock, paper scissors?').toLowerCase();
const computerSelection = computerPlay();

function game() {   

// singleRound(prompt('Rock, paper or scissors?').toLowerCase());
// console.log(`Player ${playerScore} : ${computerScore} Computer`)

//    if (playerScore > computerScore) {
//        alert('You beat the computer in his own game!');
//    } else if (computerScore > playerScore) {
//        alert('You lost. Roll again!')
//    } else if (playerScore == computerScore) {
//        draw;
//        console.log('Its a tie!')
//    }
}    
//let playerSelection = '';


const buttonR = document.querySelector('.r');
const buttonP = document.querySelector('.p');
const buttonS = document.querySelector('.s');
const container = document.querySelector('.container')
const div = document.createElement('div');
div.style.fontWeight = 'bolder';
div.style.fontSize = '20px';

const clickR = buttonR.addEventListener('click', function() {
let playerSelection = rps[0];
singleRound(playerSelection)
});

const clickP = buttonP.addEventListener('click', function() {
let playerSelection = rps[1];
singleRound(playerSelection)
});

const clickS = buttonS.addEventListener('click', function() {  
let playerSelection = rps[2];
singleRound(playerSelection)
});   
