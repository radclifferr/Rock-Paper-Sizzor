// html manipulation
// select three buttons
const rock = document.querySelector('#rock');
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// add event listeners
rock.addEventListener('click', () => game("rock"));
paper.addEventListener("click", () => game("paper"));
scissors.addEventListener("click", () => game("scissors"));

// define the round winner text div
const buttons = document.querySelector(".buttons")
const roundWinner = document.createElement("div");
roundWinner.classList.add("roundWinner");

//define the user game score div
const userScore = document.createElement("div");
userScore.classList.add("userScores");

//define the computer score div
const compScore = document.createElement("div");
compScore.classList.add("compScores");

//define the winning score div
const score = document.querySelector(".score");
const winningScore = document.createElement("div");
winningScore.classList.add("winningScore");



//define inital scores
let computerScore = 0
let playerScore = 0
// get the computers random choice and return it
function getComputerChoice() {
    // define rock paper sizzors in an array local to the function
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}




// use logic to determine who is the winner in the match
function determineWinner (userChoice) {
    // call the choice functions
    p = userChoice.toLowerCase();
    c = getComputerChoice();
    if (p === c) {
        roundWinner.textContent = "Tie!"
        score.appendChild(roundWinner)
        return 0
    }else if (p === "scissors" && c === "paper") {
        roundWinner.textContent = "You win! Scissors beats paper!"
        score.appendChild(roundWinner)
        return "p"
    }else if (p === "rock" && c === "scissors"){
        roundWinner.textContent = "You win! Rock beats scissors!"
        score.appendChild(roundWinner)
        return "p"
    }else if (p === "paper" && c === "rock"){
        roundWinner.textContent = "You win! Paper beats rock!"
        score.appendChild(roundWinner)
        return "p"
    }else if (c === "rock" && p === "scissors"){
        roundWinner.textContent = "Computer wins! Rock beats scissors!"
        score.appendChild(roundWinner)
        return "c"
    }else if (c === "paper" && p === "rock"){
        roundWinner.textContent = "Computer wins! Paper beats rock!"
        score.appendChild(roundWinner)
        return "c"
    }else if (c === "scissors" && p === "paper"){
        roundWinner.textContent = "Computer wins! Scissors beats paper!"
        score.appendChild(roundWinner)
        return "c"
    }
}

let roundCount = 0;
function game(userChoice) {
    if (playerScore <= 4 && computerScore <= 4) {
        winner = determineWinner(userChoice);
        roundCount ++
        if (winner === "p") {
            playerScore ++
        }else if (winner === "c") {
            computerScore ++
        }else if (winner === 0) {
            console.log("tie")
        }
        userScore.textContent = `Your score is ${playerScore}`
        score.appendChild(userScore)
        compScore.textContent = `The computer's score is ${computerScore}`
        score.appendChild(compScore)
        if (playerScore === 5 || computerScore === 5){
            if (computerScore > playerScore) {
                winningScore.textContent = `Computer wins with a score of ${computerScore}`
                score.appendChild(winningScore)
                console.log(`Computer wins with a score of ${computerScore}`)
            }else if (playerScore > computerScore) {
                winningScore.textContent = `Player wins with a score of ${playerScore}`
                score.appendChild(winningScore)
                console.log(`Player wins with a score of ${playerScore}`)
            }
            }
        }
    }
