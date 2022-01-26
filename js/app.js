let choiceOfComputer = "";
let playerChoice = "";
let playerScore = 0;
let computerScore = 0;
const computerDisplay = document.getElementById("computer-score")
const playerDisplay = document.getElementById("display-score");
const buttons = document.querySelectorAll("button");
const displayWinner = document.getElementById("display-winner");



// buttons.forEach(buttons => {
//     buttons.addEventListener("click", function() {
//         console.log(getGameResult())
//     });
// })

// buttons.forEach(buttons => {
//     buttons.addEventListener("click", function() {
//         console.log(playRound())
//     })
// })


// player choice of action
function playerSelection() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if(randomNum === 1) {
        return playerChoice = "rock";
    } else if(randomNum === 2) {
        return playerChoice = "paper";
    } else if(randomNum === 3) {
        return playerChoice = "scissor"
    } else {
        return "something is wrong";
    }
}
// The computer randomly gets rock, paper, or scissor
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber === 1) {
        return choiceOfComputer = "rock";
    } else if(randomNumber === 2) {
        return choiceOfComputer = "paper";
    } else if(randomNumber === 3) {
        return choiceOfComputer = "scissor"
    } else {
        return "something is wrong";
    }
}

// Play the round

function playRound() {
    getGameResult();
    displayTheWinner();
    resetGame()
}

console.log(playRound())

// get the results of the game

function getGameResult() {
    const computerSelection = computerPlay();
    const playerSelect = playerSelection();
    playerDisplay.textContent = "Player Score: " + playerScore;
    computerDisplay.textContent = "Computer Score: " + computerScore;
    console.log(playerSelect)
    if(playerSelect == computerSelection) {
        return "You tie!"
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
    } else if(playerSelect == "rock" && computerSelection == "scissor") {
        playerScore++
        return "You win! Rock beats scissor";
    } else {
        return "invalid"
    }
}



// Display the winner

function displayTheWinner() {
    if(playerScore === 5) {
        displayWinner.textContent = "You win"
        resetGame()
    } else if(computerScore === 5) {
        displayWinner.textContent = "You lost try again next time"
        resetGame()
    }
}

// Reset the game

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    choiceOfComputer = "";
    playerChoice = "";

}

