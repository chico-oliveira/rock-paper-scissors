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

    // In case of same selection, return a draw
    if (playerSelection === computerSelection){
        return `You Draw! Both picked ${Capitalize(computerSelection)}. Sadge :( try again..`;
    }

    // Player chooses rock
    if (playerSelection === options[0]){

    } 
    // PLayer chooses paper
    else if (playerSelection === options[1]){
    } 
    // Player chooses scissors 
    else {

    }
}

const playerSelection = "ROck";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
