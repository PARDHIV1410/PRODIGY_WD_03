let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

function makeMove(index) {
    if (gameActive && board[index] === "") {
        board[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].innerText = currentPlayer;
        checkForWinner();
        togglePlayer();
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkForWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            document.getElementById("status").innerText = `Player ${board[a]} wins!`;
            break;
        }
    }

    if (board.every(cell => cell !== "")) {
        gameActive = false;
        document.getElementById("status").innerText = "It's a draw!";
    }
}

function resetGame() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;

    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = "";
    }

    document.getElementById("status").innerText = "";
}
