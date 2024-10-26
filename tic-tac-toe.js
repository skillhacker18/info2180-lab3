document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board div");

    const boardState = Array(9).fill(null);

    let currentPlayer = "x";

    squares.forEach((square, index) => {
        square.classList.add("square");

        square.addEventListener("click", function(){
            if (!boardState[index]) {
                boardState[index] = currentPlayer;
                square.textContent = currentPlayer;
                
                currentPlayer = currentPlayer === "X"? "O" : "X";
            }
        });
    });
});