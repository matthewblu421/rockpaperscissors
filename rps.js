let playerWins = 0;
let computerWins = 0;
let ties = 0;

function computerPlay(){
    let randomNum = (Math.floor(Math.random() * 3));
    if (randomNum === 0) {
        
        return "Rock";        
    } else if (randomNum === 1) {
       
        return "Paper";
    } else if (randomNum === 2) {
        
        return "Scissors";
    }

}

function playerPlay() {
    while(true) {
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    let playerChoiceCaps = playerChoice.toLowerCase();
    
    if(playerChoiceCaps === "rock") {        
        return "Rock";
    } else if (playerChoiceCaps === "scissors") {
        return "Scissors";
    } else if (playerChoiceCaps === "paper") {
        return "Paper";
    }

    alert("Invalid input! Please type \"Rock\", \"Paper\", or \"Scissors\"")
}
}

function playRound(playerSelection, computerSelection)
{
    if (((playerSelection === "Rock") && (computerSelection === "Scissors")) ||
    ((playerSelection === "Scissors") && (computerSelection === "Paper")) ||
    ((playerSelection === "Paper") && (computerSelection === "Rock")))
    {
        playerWins++;
        console.log(`${playerSelection} beats ${computerSelection}! You win the round.`);
        return (`${playerSelection} beats ${computerSelection}! You win the round.`);
    }
    else if (((playerSelection === "Scissors") && (computerSelection === "Rock")) ||
    ((playerSelection === "Rock") && (computerSelection === "Paper")) ||
    ((playerSelection === "Paper") && (computerSelection === "Scissors")))
    {   
        computerWins++;
        console.log(`${computerSelection} beats ${playerSelection}! You lose the round.`);
    return (`${computerSelection} beats ${playerSelection}! You lose the round.`);

    } else if (((playerSelection === "Scissors") && (computerSelection === "Scissors")) ||
    ((playerSelection === "Paper") && (computerSelection === "Paper")) ||
    ((playerSelection === "Rock") && (computerSelection === "Rock")))    
    {   ties++;
        console.log(`${playerSelection} matches ${computerSelection}: it's a tie!`);
        return (`${playerSelection} matches ${computerSelection}: it's a tie!`);
    }

}

function game() {   
    for (let i = 0; i < 5; i++) {
        playRound(playerPlay(), computerPlay());      
    }
    
    if(playerWins > computerWins) {
        console.log(`You win the game by a score of ${playerWins} to ${computerWins}`);
    }
    if(computerWins > playerWins) {
        console.log(`The computer wins by a score of ${playerWins} to ${computerWins}`);
    }
    if(computerWins === playerWins) {
        console.log(`It's a tie! Final score: Player: ${playerWins}. Computer: ${computerWins}`);
    }
}

game();