const getComputerChoice = () => {
    const ranNum = Math.floor(Math.random() * 3);

    switch (ranNum) {
        case 0:
            return "ROCK";
            break;
        case 1:
            return "SCISSORS";
            break;
        case 2:
            return "PAPER";
            break;
    }
}

const getPlayerChoice = () => {
    while (true) {
        const playerChoice = prompt("Rock/Paper/Scissors?: ").toUpperCase();
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
    } else if ((computer === "ROCK" && player === "SCISSORS") || 
        (computer === "SCISSORS" && player === "PAPER") || 
        (computer === "PAPER" && player === "ROCK")) {
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