let choiceOfComputer = "";
let playerChoice = "";
let playerScore = 0;
let computerScore = 0;
const computerDisplay = document.getElementById("computer-score")
const playerDisplay = document.getElementById("discplay-score");
const buttons = document.querySelectorAll("button");

buttons.forEach(buttons => {
    buttons.addEventListener("click", function() {
        console.log(getGameResult())
    });
})


// player choice of action
function playerSelection() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if(randomNum === 1) {
        playerChoice = "rock";
    } else if(randomNum === 2) {
        playerChoice = "paper";
    } else if(randomNum === 3) {
        playerChoice = "scissor"
    } else {
        return "something is wrong";
    }
}
// The computer randomly gets rock, paper, or scissor
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber === 1) {
        choiceOfComputer = "rock";
    } else if(randomNumber === 2) {
        choiceOfComputer = "paper";
    } else if(randomNumber === 3) {
        choiceOfComputer = "scissor"
    } else {
        return "something is wrong";
    }
}

// Play the round



// get the results of the game

function getGameResult() {
    let computerSelection = computerPlay();
    let playerSelect = playerSelection();
    if(playerSelect == "rock" && computerSelection == "scissor") {
        playerScore++
        return "You win! Rock beats scissor";
    } else if(playerSelect == "rock" && computerSelection == "paper") {
        computerScore++
        return "You lose paper beats rock"
    } else if(playerSelect == "paper" && computerSelection == "rock") {
        playerScore++
        return "You won paper beats rock"
    } else if(playerSelect == "paper" && computerSelection == "scissor") {
        computerScore++
        return "You lose scissor beats paper";
    } else if(playerSelect == "scissor" && computerSelection == "paper") {
        playerScore++
        return "You win scissor beats paper";
    } else if(playerSelect == computerSelection) {
        return "You tie!"
    } else {
        return "this is invalid please try again!"
    }
}


