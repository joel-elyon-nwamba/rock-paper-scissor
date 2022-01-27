let choiceOfComputer = "";
let playerChoice = "";
let playerScore = 0;
let computerScore = 0;
const computerDisplay = document.getElementById("computer-score")
const playerDisplay = document.getElementById("display-score");
const buttons = document.querySelectorAll("button");
let displayResult = document.getElementById("display-result");



// buttons.forEach(buttons => {
//     buttons.addEventListener("click", function() {
//         console.log(getGameResult())
//     });
// })

buttons.forEach(buttons => {
    buttons.addEventListener("click", playRound);
    // displayTheWinner();
})


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
    // resetGame()
}



// get the results of the game

function getGameResult() {
    const computerSelection = computerPlay();
    const playerSelect = playerSelection();
    playerDisplay.textContent = "Player Score: " + playerScore;
    computerDisplay.textContent = "Computer Score: " + computerScore;
    console.log(playerSelect)
    if(playerSelect == "rock" && computerSelection == "scissor") {
        playerScore++
        displayResult.textContent = "You win! Rock beats scissor";
    } else if(playerSelect == "rock" && computerSelection == "paper") {
        computerScore++
        displayResult.textContent = "You lose paper beats rock"
    } else if(playerSelect == "paper" && computerSelection == "rock") {
        playerScore++
        displayResult.textContent = "You won paper beats rock"
    } else if(playerSelect == "paper" && computerSelection == "scissor") {
        computerScore++
        displayResult.textContent = "You lose scissor beats paper";
    } else if(playerSelect == "scissor" && computerSelection == "paper") {
        playerScore++
        displayResult.textContent = "You win scissor beats paper";
    } else if(playerSelect == computerSelection) {
        displayResult.textContent = "You tie!"
    } else {
        return "invalid"
    }
}


// Display the winner

function displayTheWinner() {
    if(playerScore === 5) {
       displayResult.textContent = "You win this round!"
        resetGame()
    } else if(computerScore === 5) {
        displayResult.textContent = "You lost try again next time!"
        resetGame()
    }
}

// Reset the game

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    choiceOfComputer = "";
    playerChoice = "";
    displayResult = "";

}


