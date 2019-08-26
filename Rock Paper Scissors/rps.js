let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const endMessage = document.querySelector(".endgame > p");
var end = 0;

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function endGame() {
    if(computerScore == 5) {
        compWins();
    }
    if(userScore == 5) {
        youWin();
    }
}

function youWin() {
    endMessage.innerHTML = "You win overall! :)";
}

function compWins() {
    endMessage.innerHTML = "The computer wins overall :(";
}

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "computer".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    end++;
    userScore++;
    if(userScore == 5) {
        endGame();
    };

    userScore_span.innerHTML = (userScore);
    computerScore_span.innerHTML = (computerScore);
    result_p.innerHTML = (`${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(computerChoice)} ${smallComputerWord} you win!`);
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "computer".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    end++;
    computerScore++;
    if(computerScore == 5) {
        endGame();
    };

    userScore_span.innerHTML = (userScore);
    computerScore_span.innerHTML = (computerScore);
    result_p.innerHTML = (`${convertToWord(userChoice)} ${smallUserWord} loses to ${convertToWord(computerChoice)} ${smallComputerWord} you lose ;(`);
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "computer".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    end++;
    if(userScore || computerScore == 5) {
        endGame();
    };

    userScore_span.innerHTML = (userScore);
    computerScore_span.innerHTML = (computerScore);
    result_p.innerHTML = (`${convertToWord(userChoice)} ${smallUserWord} draws to ${convertToWord(computerChoice)} ${smallComputerWord} you draw :/`);
    userChoice_div.classList.add("orange-glow");
    setTimeout(() => userChoice_div.classList.remove("orange-glow"), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            
            break;
    }
}

function restart() {
    window.location.reload();
}

function main() {
    rock_div.addEventListener("click", () => game("r"));
    paper_div.addEventListener("click", () => game("p"));
    scissors_div.addEventListener("click", () => game("s"));
}

main();

