// define rock paper sizzors in an array
let choices = ["rock", "paper", "scissors"]
//define inital scores
let computerScore = 0
let playerScore = 0


// get the computers random choice and return it
function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}
// define computer selection variable
let computerSelection =  getComputerChoice(choices)
console.log(computerSelection)

// get the users input with an input function and return it 
function getUserChoice () {
    return window.prompt("Enter your choice: ");
}
//define user selection variable 
let playerSelection = "scissors"
console.log(playerSelection)
// = getUserChoice()


// use logic to determine who is the winner in the match
function determineWinner (p, c) {
    if (p === c) {
        console.log("Tie!")
    }else if (p === "scissors" && c === "paper") {
        console.log("You win! Scissors beats paper!")
    }else if (p === "rock" && c === "scissors"){
        console.log("You win! Rock beats scissors!")
    }else if (p === "paper" && c === "rock"){
        console.log("You win! Paper beats rock!")
    }else if (c === "rock" && p === "scissors"){
        console.log("Computer wins! Rock beats scissors!")
    }else if (c === "paper" && p === "rock"){
        console.log("Computer wins! Paper beats rock!")
    }else if (c === "scissors" && p === "paper"){
        console.log("Computer wins! Scissors beats paper!")
    }
}

// call determine winner function
determineWinner(playerSelection, computerSelection);

// if user picks sizzors and computer picks rock
    // computer wins
// if user picks rock and computer picks paper
    // computer wins
// if user picks paper and computer picks sizzors
    // computer wins

// if player selection is the same
    // tie

//output the winner in the form of a console log statement

//count point acumulation

// play a 5 match game 