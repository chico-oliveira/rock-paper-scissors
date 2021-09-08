// Creates possible options array
let options = ["Rock", "Paper", "Scissors"];

// returns one of the possibilities at random
function ComputerPlay(){

    // Creates random number between 1 and 3 inclusive to use as an index for the array
    let index = Math.floor(Math.random()*(options.length));
    
    // Use the index to return the answer
    return options[index];
}