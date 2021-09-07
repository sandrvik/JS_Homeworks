const statusDisplay = document.getElementById('score');
const roundText = document.getElementById('round');
const restart = document.getElementById('restart');
restart.setAttribute('disabled', 'disabled');

const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

let gameActive = true;

let round = 1;

let score = {
    player1: 0,
    player2: 0
}

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let currentPlayer = "X";

let gameState = ["", "", "", "", "", "", "", "", ""];

function handleCellClick(clickedCellEvent) {

    const clickedCell = clickedCellEvent.target;

    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('data-cell-index')
    );

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
    if (roundWon) {
        handleWinning();
        restart.removeAttribute('disabled');
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        restart.removeAttribute('disabled');
        gameActive = false;
        return;
    }

    handlePlayerChange();
}

function handleWinning() {
    if (currentPlayer === "X") {
        ++score['player1'];
        player1.innerText = `Player1  ${score['player1']}`;
    } else {
        ++score['player2'];
        player2.innerText = `${score['player2']} Player2`;
    }
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function clearField() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
}

function handleRestartGame() {
    ++round;
    restart.setAttribute('disabled', 'disabled');
    roundText.innerText = `Round ${round}`
    clearField();
    document.querySelectorAll('.game-container__cell')
        .forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll('.game-container__cell').forEach(cell => cell.addEventListener('click', handleCellClick));
restart.addEventListener('click', handleRestartGame);