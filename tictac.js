let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let container = document.querySelector(".container");
let msg = document.querySelector(".msg");
let turnO = true,countTurns=0;
const winPatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        countTurns++;
        if (countTurns % 2 == 0) {
            box.style.color="#9CDBA6"
        }
        else {
            box.style.color="#468595"
        }
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableAll = () => {
    boxes.forEach((box)=>{
        box.disabled = true;
    })
}
const enableAll = () => {
    boxes.forEach((box)=>{
        box.disabled = false;
    })
}
const checkWinner = () => {
    for(let pattern of winPatterns)
    {
        let box1 = boxes[pattern[0]];
        let box2 = boxes[pattern[1]];
        let box3 = boxes[pattern[2]];
        if (countTurns === 9)
            {
                disableAll();
                msg.style.display = 'block';
                msg.innerText=`Game Tied`;
                resetBtn.innerText = "New Game";
               container.style.display = "none";
            }
        if (box1.innerText === box2.innerText && box2.innerText === box3.innerText && box1.innerText !== "") {
            disableAll();
            msg.style.display = 'block';
            msg.innerText = `Congratulations!!! Player ${box1.innerText} wins!`;
            resetBtn.innerText = "New Game";
            container.style.display = "none";
            return;
        }
    }
}
const reset = () => {
     boxes.forEach((box) => {
        box.innerText='';
     })
    enableAll();
    msg.innerText = '';
    msg.style.display = "none";
    turnO = true;
    countTurns = 0;
    resetBtn.innerText = "Reset Game";
    container.style.display = "flex";
}
resetBtn.addEventListener("click", reset);