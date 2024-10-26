document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board div");

    const boardState = Array(9).fill(null);

    let currentPlayer = "X";

    squares.forEach((square, index) => {
        square.classList.add("square");

        square.addEventListener("mouseover", function(){
            if (!boardState[index]) {
                square.classList.add("hover");  
            }
        });

        //mouseout effect
        square.addEventListener("mouseout", function(){
            square.classList.remove("hover");
        });

        square.addEventListener("click", function(){
            if (!boardState[index]) {
                boardState[index] = currentPlayer;
                square.textContent = currentPlayer;

                square.classList.add(currentPlayer);
                
                currentPlayer = currentPlayer === "X"? "O" : "X";
            }
        });
    });
});