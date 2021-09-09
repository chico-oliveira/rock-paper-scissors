// Creates possible options array
let options = ["rock", "paper", "scissors"];

// Capitalizes first letter
function Capitalize(string){
   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// returns one of the possibilities at random
function computerPlay(){

    // Creates random number between 1 and 3 inclusive to use as an index for the array
    let index = Math.floor(Math.random()*(options.length));

    // Use the index to return the answer
    return options[index];
}

// Play one round of Rock Paper Scissors. Receive player and computer selections
function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();

    console.log(`You chose ${Capitalize(playerSelection)}`)

    // In case of same selection, return a draw
    if (playerSelection === computerSelection){
        return `You Draw! Both picked ${Capitalize(computerSelection)}. Sadge :( try again..`;
    }

    // Win cases
    if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")){
        
        return `You Win! ${Capitalize(playerSelection)} beats ${Capitalize(computerSelection)}`
    } 

    // Lose cases
    if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")){
    
        return `You Lose! ${Capitalize(computerSelection)} beats ${Capitalize(playerSelection)}`
    } 
}

// Full 5 round game
function game(){

    let playerWins = 0;
    let computerWins = 0;
    
    // Loops the 5 rounds
    for (let i=0; i < 5; i++){
        let player = window.prompt("Choose Rock, Paper or Scissors!");
        let computer = computerPlay();
        
        console.log(playRound(player, computer));
    }
}
