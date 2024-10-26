document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
    const statusDiv = document.getElementById("status");
    const boardState = Array(9).fill(null);

    let currentPlayer = "X";


    squares.forEach((square, index) => {
        square.classList.add("square");

        square.addEventListener("mouseover", function () {
            if (!square.classList.contains("X") && !square.classList.contains("O")) {
                square.classList.add("hover");
            }
        });

        //mouseout effect
        square.addEventListener("mouseout", function () {
            square.classList.remove("hover");
        });

        square.addEventListener("click", function () {
            if (!boardState[index]) {
                boardState[index] = currentPlayer;
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                //check for the winner
                if (checkWinner(currentPlayer)) {
                    statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`
                    statusDiv.classList.add("you-won");
                    disableclicking();
                } else if (boardState.every(cell => cell !== null)) {
                    statusDiv.textContent = "Its a draw!";
                    statusDiv.classList.remove("you-won");
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";

                }

            }
        });
    });
    function checkWinner(player) {

        const winningCombinations = [
            //Row
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            //Column 
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            //Diagonal
            [0, 4, 8],
            //Anti-Diagonal
            [2, 4, 6]

        ];

        return winningCombinations.some(combination => {
            return combination.every(index => boardState[index] === player);
        });
    }

    function disableclicking() {
        squares.forEach(square => {
            square.style.pointerEvents = "none";
        })
    }

});