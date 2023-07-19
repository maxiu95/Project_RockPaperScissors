const getComputerChoice = () => {
    const ranNum = Math.floor(Math.random() * 3);

    switch (ranNum) {
        case 0:
            return "rock";
            break;
        case 1:
            return "scissors";
            break;
        case 2:
            return "paper";
            break;
    }
}

const getPlayerChoice = () => {
    while (true) {
        const playerChoice = prompt("Rock/Paper/Scissors?: ").toLowerCase();
        if ((playerChoice != "ROCK") && (playerChoice != "SCISSORS") && (playerChoice != "PAPER")) {
            console.log("Invalid input. Please choose: rock, paper or scissors.");
        } else {
            return playerChoice;
        }
    }
}

const roundOfGame = (computer, player) => {
    if (player === computer) {
        return "Draw!";
    } else if ((computer === "rock" && player === "scissors") || 
        (computer === "scissors" && player === "paper") || 
        (computer === "paper" && player === "rock")) {
        return "Lose!";
    } else {
        return "Win!";
    }
}

const game = () => {
    let ROUNDS = 0;
    let SCORE = 0;

    while (ROUNDS < 5) {
        const computer = getComputerChoice();
        const player = getPlayerChoice();
        round = roundOfGame(computer, player);
        console.log(round);
        
        if (round === "Win!") {
            SCORE++
        }

        ROUNDS++;
    }
    console.log(`Your score is... ${SCORE}!!`);
}

game();