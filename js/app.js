
let playerScore = 0;
let computerScore = 0;
const button = document.querySelectorAll("button").length;
const playerDisplay = document.getElementById("player-display");
const computerDisplay = document.getElementById("computer-display");
const rockBtn = document.getElementById("btn-rock");
const paperBtn = document.getElementById("btn-paper");
const scissorBtn = document.getElementById("btn-scissor");

// click on all buttons
for(let i= 0; i < button; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        console.log("clicked!")
    })
}


// The computer randomly gets rock, paper, or scissor
function computerPlay() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    if(randomNum === 1) {
        return "rock";
    } else if(randomNum === 2) {
        return "paper";
    } else if(randomNum === 3) {
        return "scissor"
    } else {
        console.log("Something went wrong with selection")
    }
}
// Create a single round game

function playRound(playerSelection, computerSelection) {
    if(playerSelection == "rock" && computerSelection == "scissor") {
        console.log("clicked!");
    } else if(playerSelection == "rock" && computerSelection == "paper") {
        computerScore++
        return "The computer wins";
    } else if(playerSelection == "paper" && computerSelection == "rock") {
        playerScore++
        return "Player 1 wins!"
    } else if(playerSelection == "paper" && computerSelection == "scissor") {
        computerScore++
        return "The computer wins"
    } else if(playerSelection == "scissor" && computerSelection == "paper") {
        playerScore++
        return "player 1 wins!"
    } else if(playerSelection == computerSelection) {
        return "It's a tie!"
    } else {
        return "this is invalid please try again!"
    }
}


function playgame() {


    
}