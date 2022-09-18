//define inital scores
let computerScore = 0
let playerScore = 0
// get the computers random choice and return it
function getComputerChoice() {
    // define rock paper sizzors in an array local to the function
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}
// get the users input with an input function and return it 
function getUserChoice () {
    return window.prompt("Enter your choice: ");
}
// use logic to determine who is the winner in the match
function determineWinner () {
    // call the choice functions
    p = getUserChoice().toLowerCase();
    c = getComputerChoice();
    if (p === c) {
        return winStr = ["Tie!", 0]
    }else if (p === "scissors" && c === "paper") {
        return ["You win! Scissors beats paper!", "p"]
    }else if (p === "rock" && c === "scissors"){
        return ["You win! Rock beats scissors!", "p"]
    }else if (p === "paper" && c === "rock"){
        return ["You win! Paper beats rock!", "p"]
    }else if (c === "rock" && p === "scissors"){
        return ["Computer wins! Rock beats scissors!", "c"]
    }else if (c === "paper" && p === "rock"){
        return ["Computer wins! Paper beats rock!", "c"]
    }else if (c === "scissors" && p === "paper"){
        return ["Computer wins! Scissors beats paper!", "c"]
    }
}
function game() {
    
    for (let i = 0; i < 5; i++){
        winner = determineWinner();
        console.log (winner[0])
        if (winner[1] == "p") {
            playerScore ++
        }else if (winner[1] == "c") {
            computerScore ++
        }
    }
    if (computerScore > playerScore) {
        console.log(`Computer wins with a score of ${computerScore}`)
    }else if (playerScore > computerScore) {
        console.log(`Player wins with a score of ${playerScore}`)
    }else {
        console.log("Tie")
    }
}
// call determine winner function
game();
