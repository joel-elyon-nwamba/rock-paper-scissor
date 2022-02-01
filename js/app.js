let choiceOfComputer = "";
let playerChoice = "";
let playerScore = 0;
let computerScore = 0;
// const rockButton = document.getElementById("btn-rock");
// const paperButton = document.getElementById("btn-paper");
// const scissorButton = document.getElementById("btn-scissor");
const computerDisplay = document.getElementById("computer-score")
const playerDisplay = document.getElementById("display-score");
const buttons = document.querySelectorAll("button");
let displayResult = document.getElementById("display-result");


// rockButton.addEventListener("click", playRound);


buttons.forEach(buttons => {
    buttons.addEventListener("click", playRound);
})



// player choice of action

function playerSelection(e) {
    if(e.target.id === "btn-rock") {
        return playerChoice = "rock";
    } else if(e.target.id === "btn-paper") {
        return playerChoice = "paper";
    } else if(e.target.id === "btn-scissor") {
        return playerChoice = "scissor";
    } else {
        return "something is wrong"
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

function playRound(e) {
    getGameResult(e);
    displayTheWinner();
    // resetGame()
}



// get the results of the game

function getGameResult(e) {
    const computerSelection = computerPlay();
    const playerSelect = playerSelection(e);
    playerDisplay.textContent = "Players Score: " + playerScore;
    computerDisplay.textContent = "Computers Score: " + computerScore;
    console.log(playerSelect)
    if(playerSelect == "rock" && computerSelection == "scissor") {
        playerScore++
        displayResult.textContent = "You win! Rock beats scissor";
    } else if(playerSelect == "scissor" && computerSelection == "rock") {
        computerScore++
        displayResult.textContent = "You lose! Rock beats scissor"
    } else if(playerSelect == "paper" && computerSelection == "rock") {
        playerScore++
        displayResult.textContent = "You won! Paper beats rock"
    } else if(playerSelect == "paper" && computerSelection == "scissor") {
        computerScore++
        displayResult.textContent = "You lose! scissor beats paper";
    } else if(playerSelect == "scissor" && computerSelection == "paper") {
        playerScore++
        displayResult.textContent = "You win scissor beats paper";
    } else if(playerSelect == computerSelection) {
        displayResult.textContent = "It's a tie!"
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
    // displayResult.textContent = "";

}


