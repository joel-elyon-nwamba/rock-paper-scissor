let choiceOfComputer = "";
let playerChoice = "";
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");

buttons.forEach(buttons => {
    buttons.addEventListener("click", function() {
        console.log(getGameResult())
    })
})
// const rockButton = document.getElementById("btn-rock");
// const paperButton = document.getElementById("btn-paper");
// const scissorButton = document.getElementById("btn-scissor");



// player choice of action
function playerSelection() {
    let playerOption = [rockButton, paperButton, scissorButton];
    playerChoice = playerOption;
    return playerChoice;
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

// get the results of the game

function getGameResult() {
    if(playerChoice == "rock" && choiceOfComputer == "scissor") {
        playerScore++
        return "You win! Rock beats scissor";
    } else if(playerChoice == "rock" && choiceOfComputer == "paper") {
        computerScore++
        return "You lose paper beats rock"
    } else if(playerChoice == "paper" && choiceOfComputer == "rock") {
        playerScore++
        return "You won paper beats rock"
    } else if(playerChoice == "paper" && choiceOfComputer == "scissor") {
        computerScore++
        return "You lose scissor beats paper";
    } else if(playerChoice == "scissor" && choiceOfComputer == "paper") {
        playerScore++
        return "You win scissor beats paper";
    } else if(playerChoice == choiceOfComputer) {
        return "You tie!"
    } else {
        return "this is invalid please try again!"
    }
}


