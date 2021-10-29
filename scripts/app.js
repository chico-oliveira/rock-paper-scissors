///////////////
// FUNCTIONS //
///////////////

// Creates possible options array
let options = ["rock", "paper", "scissors"];

// Capitalizes first letter
function Capitalize(string){
   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// returns one of the possibilities at random
function computerPick(){

    // Creates random number between 1 and 3 inclusive to use as an index for the array
    let index = Math.floor(Math.random()*(options.length));

    // Use the index to return the answer
    return options[index];
}

// Starts game based on what button the player picked
function playerPick(e){
    let playerSelection = e.target.textContent;
    game(playerSelection);
}

// Play one round of Rock Paper Scissors. Receive player and computer selections
function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();

    // In case of same selection, return a draw
    if (playerSelection === computerSelection){
        console.log(`You Draw! Both picked ${Capitalize(computerSelection)}`);
        return null
    }

    // Win cases
    if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")){
        
        console.log(`You Win! ${Capitalize(playerSelection)} beats ${Capitalize(computerSelection)}`);
        return true
    } 

    // Lose cases
    if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")){
    
        console.log(`You Lose! ${Capitalize(computerSelection)} beats ${Capitalize(playerSelection)}`);
        return false
    } 
}

// Full 5 round game
function game(player){

    let playerScore = 0;
    let computerScore = 0;

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
    
    displayResult(playerScore, computerScore);
}

// Gets the scores and determines the result
function displayResult(playerScore, computerScore){
    let finalScore = `  [Score: ${playerScore} - ${computerScore}]`;

    console.log("--------------------------------------------");    
    // Compares scores and gives final result
    if (playerScore > computerScore){
        console.log(`Congratulations! You won :) ${finalScore}`);
    }
    else if (playerScore < computerScore){
        console.log(`Sadge! You lost.. ${finalScore}`);
    }
    else {
        console.log(`You drew.. Awkward... ${finalScore}`);
    }
    console.log("--------------------------------------------");
}

/////////////////
// DOM METHODS //
/////////////////

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click', playerPick);
});
