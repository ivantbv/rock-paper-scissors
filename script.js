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
div.textContent = `Player selected: ${playerSelection} | Computer selected: ${computerSelection} | ${loseCondition}`;
++computerScore
// return 
container.appendChild(div);
} else if (playerSelection == rps[0] && computerSelection == rps[1]) {
div.textContent = `Player selected: ${playerSelection} | Computer selected: ${computerSelection} | ${loseCondition}`;
++computerScore
container.appendChild(div);
} else if (playerSelection == rps[1] && computerSelection == rps[2]) {
div.textContent = `Player selected: ${playerSelection} | Computer selected: ${computerSelection} | ${loseCondition}`;
++computerScore
container.appendChild(div);
} else if (playerSelection == rps[2] && computerSelection == rps[1]) {
div.textContent = `Player selected: ${playerSelection} | Computer selected: ${computerSelection} | ${winCondition}`;
++playerScore
container.appendChild(div);
} else if (playerSelection == rps[0] && computerSelection == rps[2]) {
div.textContent = `Player selected: ${playerSelection} | Computer selected: ${computerSelection} |  ${winCondition}`;
++playerScore
container.appendChild(div);
} else if (playerSelection == rps[1] && computerSelection == rps[0]) {
div.textContent = `Player selected: ${playerSelection} | Computer selected: ${computerSelection} | ${winCondition}`;
++playerScore
container.appendChild(div);
} else {
div.textContent = `You both selected ${computerSelection}. ${tie}`;
++draw;
container.appendChild(div);
}
score.textContent = `Player score: ${playerScore} | Computer score: ${computerScore} | Ties: ${draw}`
scoreDiv.appendChild(score);

if (click === 4) {
if (playerScore > computerScore) {
    displayResult.textContent = 'You defeated the AI!';
    resultDiv.appendChild(displayResult);
} else if (computerScore > playerScore) {
    displayResult.textContent = 'You have been terminated!';
    resultDiv.appendChild(displayResult);
} else {
    displayResult.textContent = 'Its a tie.';
    resultDiv.appendChild(displayResult);
    }
   }
}     

const computerSelection = computerPlay();

const scoreDiv = document.querySelector('.score')
const score = document.createElement('p')

const resultDiv = document.querySelector('.count')
const displayResult = document.createElement('p')

function game() {  

// for (let i = 0; i < 5; ++i) { 
//     if (playerScore > computerScore) {
//         score.textContent = `Player score: ${playerScore} | Computer score: ${computerScore} | Ties: ${draw}`
// scoreDiv.appendChild(score);
//     } else if (computerScore > playerScore) {
//         score.textContent = `Player score: ${playerScore} | Computer score: ${computerScore} | Ties: ${draw}`
// scoreDiv.appendChild(score);
//     } else if (playerScore == computerScore) {
//         score.textContent = `Player score: ${playerScore} | Computer score: ${computerScore} | Ties: ${draw}`
// scoreDiv.appendChild(score);
//     }
// }
 

}  


const buttonR = document.querySelector('.r');
const buttonP = document.querySelector('.p');
const buttonS = document.querySelector('.s');
const container = document.querySelector('.container')
const div = document.createElement('div');
div.style.fontWeight = 'bolder';
div.style.fontSize = '20px';

let click = 0;

const clickR = buttonR.addEventListener('click', function() {
let playerSelection = rps[0];
singleRound(playerSelection)
++click;

    let stopClick = function() {
    if (click > 5) {
        displayResult.textContent = 'Reset for 5 new rounds!';
    resultDiv.appendChild(displayResult);
    buttonR.removeEventListener('click', stopClick);  
}
}
stopClick();
});

const clickP = buttonP.addEventListener('click', function() {
let playerSelection = rps[1];
singleRound(playerSelection);

++click;

    let stopClick = function() {
    if (click > 5) {
        displayResult.textContent = 'Reset for 5 new rounds!';
    resultDiv.appendChild(displayResult);
    buttonP.removeEventListener('click', stopClick);  
}
}
stopClick();
});

const clickS = buttonS.addEventListener('click', function() {  
let playerSelection = rps[2];
singleRound(playerSelection);

++click;
    let stopClick = function() {
    if (click > 5) {
        displayResult.textContent = 'Reset for 5 new rounds!';
    resultDiv.appendChild(displayResult);
    buttonS.removeEventListener('click', stopClick);  
}
}
stopClick();

});   

//todo - make the created divs and p disappear when 5 rounds (clicks) have been
//made


   