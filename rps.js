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
        gameresults.textContent = (`${playerSelection} beats ${computerSelection}! You win the round.`);
        game();
        return (`${playerSelection} beats ${computerSelection}! You win the round.`);
    }
    else if (((playerSelection === "Scissors") && (computerSelection === "Rock")) ||
    ((playerSelection === "Rock") && (computerSelection === "Paper")) ||
    ((playerSelection === "Paper") && (computerSelection === "Scissors")))
    {   
        computerWins++;
        gameresults.textContent = (`${computerSelection} beats ${playerSelection}! You lose the round.`);
        game();
    return (`${computerSelection} beats ${playerSelection}! You lose the round.`);

    } else if (((playerSelection === "Scissors") && (computerSelection === "Scissors")) ||
    ((playerSelection === "Paper") && (computerSelection === "Paper")) ||
    ((playerSelection === "Rock") && (computerSelection === "Rock")))    
    {   ties++;
        gameresults.textContent = (`${playerSelection} matches ${computerSelection}: it's a tie! Re-play the round.`);
        game();
        return (`${playerSelection} matches ${computerSelection}: it's a tie!`);
    }

}

function game() {   
    // for (let i = 0; i < 5; i++) {
    //     playRound(playerPlay(), computerPlay());      
    // }
    
    // if(playerWins > computerWins) {
    //     console.log(`You win the game by a score of ${playerWins} to ${computerWins}`);
    // }
    // if(computerWins > playerWins) {
    //     console.log(`The computer wins by a score of ${playerWins} to ${computerWins}`);
    // }
    // if(computerWins === playerWins) {
    //     console.log(`It's a tie! Final score: Player: ${playerWins}. Computer: ${computerWins}`);
    // }

    if(playerWins === 5){      
       
        gamescore.textContent = (`Player wins the match! Final score: ${playerWins} to ${computerWins}. Congratulations! \n
        Reload to play again.`)
        window.alert("Maday loves Cwissy!");
        document.getElementById("button1").disabled = true;
        document.getElementById("button2").disabled = true;
        document.getElementById("button3").disabled = true;
    } 

    else if(computerWins === 5) {     
        document.getElementById("button1").disabled = true;
        document.getElementById("button2").disabled = true;
        document.getElementById("button3").disabled = true;       
        window.alert("Maday loves Cwissy!"); 
        gamescore.textContent = (`Computer wins the match! Final score: ${computerWins} to ${playerWins}. Better luck next time :( \n
            Reload to play again.`)
      
    } else {
     
        gamescore.textContent = (`Player: ${playerWins} points | Computer:  ${computerWins} points.`);
    }
}
document.getElementById("button1").addEventListener("click", () => playRound("Rock", computerPlay()));
document.getElementById("button2").addEventListener("click", () => playRound("Paper", computerPlay()));
document.getElementById("button3").addEventListener("click", () =>  playRound("Scissors", computerPlay()));


