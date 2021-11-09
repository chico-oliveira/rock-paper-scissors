///////////////
// VARIABLES //
///////////////

const buttons = document.querySelectorAll("button");
const playerScoreText = document.querySelector(".player .value");
const computerScoreText = document.querySelector(".computer .value");
const feedbackText = document.querySelector(".feedback");

// Creates possible options array
let options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

/////////////////
// DOM METHODS //
/////////////////

buttons.forEach(button => {
    button.addEventListener('click', playerPick);
});

///////////////
// FUNCTIONS //
///////////////


// Capitalizes first letter
function Capitalize(string){
   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Returns one of the possibilities at random
function computerPick(){

    // Creates random number between 1 and 3 inclusive to use as an index for the array
    let index = Math.floor(Math.random()*(options.length));

    // Use the index to return the answer
    return options[index];
}

// Starts game based on what button the player picked
function playerPick(e){
    let playerSelection = e.target.getAttribute("alt");
    game(playerSelection);
}

// Full 5 round game
function game(player){

    let computer = computerPick();
    
    // Plays round and stores result
    let win = playRound(player, computer);
    
    // Given the result, updates the score
    if (win) {
        playerScore++;
    }
    else if(win === false){
        computerScore++;
    }
    
    UpdateResult(playerScore, computerScore);

    // Checks if anyone gets 5 points
    if (playerScore === 5) {
        endGame(true);
    } else if (computerScore === 5) {
        endGame(false);
    }
}

// Play one round of Rock Paper Scissors. Receive player and computer selections
function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();

    // In case of same selection, return a draw
    if (playerSelection === computerSelection){
        feedbackText.textContent = `You Draw! Both picked ${Capitalize(computerSelection)}`;
        return null
    }

    // Win cases
    if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")){
        
        feedbackText.textContent = `You Win this round! ${Capitalize(playerSelection)} beats ${Capitalize(computerSelection)}`;
        return true
    } 

    // Lose cases
    if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")){
    
        feedbackText.textContent = `You Lost this round! ${Capitalize(computerSelection)} beats ${Capitalize(playerSelection)}`;
        return false
    } 
}

// Gets the scores and determines the result
function UpdateResult(){

    playerScoreText.textContent = `${playerScore}`;
    computerScoreText.textContent = `${computerScore}`;
}

// Ends game and resets scores
function endGame(win){
    
    if (win){
        feedbackText.textContent = "Congratulations, you won the game! :)";
    }
    else {
        feedbackText.textContent = "Sadge! You lost..";
    }

    playerScore = 0;
    computerScore = 0;

    UpdateResult();
}



