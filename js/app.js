let computerScore = 0;
let playerScore = 0;


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
        playerScore++
        return "Player 1 wins!";
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


function game() {
//loop 5 rounds to play
    for(let i= 0; i < 5; i++) {
        let playerSelection = prompt("Make your selection!");
        let computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection));
    }
    //display winner
    
}

game()