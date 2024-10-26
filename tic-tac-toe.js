document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    const statusDiv = document.getElementById("status");
    const newGameButton = document.querySelector(".btn");
    let currentPlayer = "X";
    let boardState = Array(9).fill(null);


    function initializeBoard() {
        squares.forEach((square, index) => {
            square.className = "square";
            square.textContent = "";
            boardState[index] = null;

            square.addEventListener("click", () => handleSquareClick(square, index));

            square.addEventListener("mouseover", () => square.classList.add("hover"));
            square.addEventListener("mouseout", () => square.classList.remove("hover"));
        });

        // Reset status and class for a new game
        currentPlayer = "X";
        statusDiv.textContent = "Move your mouse over a square and click to play X or O.";
        statusDiv.classList.remove("you-won");
    }

    function handleSquareClick(square, index) {
        if (!square.textContent && !checkWinner()) {
            square.textContent = currentPlayer;// set X or O
            square.classList.add(currentPlayer);
            boardState[index] = currentPlayer;

            //check for the winner
            if (checkWinner()) {
                statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                statusDiv.classList.add("you-won");
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";

            }

        }
    }
    function checkWinner() {

        const winningCombinations = [
            //Row
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            //Column 
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            //Diagonal
            [0, 4, 8], [2, 4, 6]

        ];

        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c];
        });

    }
    newGameButton.addEventListener("click", initializeBoard);


    initializeBoard();


});