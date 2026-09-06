let boxes = document.querySelectorAll(".box");

let resetButton = document.querySelector("#resetButton");

let winnerPopup = document.querySelector("#winnerPopup");

let winnerMessage = document.querySelector("#winnerMessage");

let newGameButton = document.querySelector("#newGameButton");


let turnO = true; // Player O starts first


const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


// -------------------------
// BOX CLICK
// -------------------------

boxes.forEach((box) => {

    box.addEventListener("click", () => {

        if (turnO) {

            box.innerText = "O";

            turnO = false;

        } else {

            box.innerText = "X";

            turnO = true;
        }

        // Disable clicked box
        box.disabled = true;

        // Check winner
        checkWinner();
    });
});


// -------------------------
// CHECK WINNER
// -------------------------

const checkWinner = () => {

    for (let pattern of winningPatterns) {

        let box1 = boxes[pattern[0]].innerText;

        let box2 = boxes[pattern[1]].innerText;

        let box3 = boxes[pattern[2]].innerText;


        // Check if all boxes are filled
        if (box1 !== "" && box2 !== "" && box3 !== "") {

            // Check if all three are same
            if (box1 === box2 && box2 === box3) {

                showWinner(box1);

                return;
            }
        }
    }


    // -------------------------
    // CHECK DRAW
    // -------------------------

    let allFilled = true;

    boxes.forEach((box) => {

        if (box.innerText === "") {

            allFilled = false;
        }
    });


    if (allFilled) {

        showDraw();
    }
};


// -------------------------
// SHOW WINNER POPUP
// -------------------------

const showWinner = (winner) => {

    winnerMessage.innerText = winner + " is the Winner! 🎉";

    winnerPopup.style.display = "flex";

    // Disable all boxes
    boxes.forEach((box) => {

        box.disabled = true;
    });
};


// -------------------------
// SHOW DRAW POPUP
// -------------------------

const showDraw = () => {

    winnerMessage.innerText = "It's a Draw! 🤝";

    winnerPopup.style.display = "flex";
};


// -------------------------
// RESET GAME
// -------------------------

const resetGame = () => {

    turnO = true;

    boxes.forEach((box) => {

        box.innerText = "";

        box.disabled = false;
    });

    // Hide popup
    winnerPopup.style.display = "none";
};


// -------------------------
// RESET BUTTON
// -------------------------

resetButton.addEventListener("click", () => {

    resetGame();
});


// -------------------------
// NEW GAME BUTTON
// -------------------------

newGameButton.addEventListener("click", () => {

    resetGame();
});