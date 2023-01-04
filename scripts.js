
// create the gameboard array
const GameBoard = (() => {
    let gameboard = new Array(9)
})()


const squares = document.querySelectorAll(".square")
const winnerText = document.getElementById("winnerText")
let turn = "X"
let winners = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
console.log(squares)
//change turn
function changeTurn() {
    if (turn === "X") {
        turn = "O"
    } else {
        turn = "X"
    }
}

// Display x/o based on gameBoard array
function displayGameboard() {
    for (let i = 0; i < 9; i++) {
        let square = squares.item(i)
        if (gameboard[i]) {
        square.innerHTML = gameboard[i]
        }
    }
}
displayGameboard()

//change array value when clicked
function assignValue() {
    squares.forEach(function(element, e) {
        element.addEventListener("click", () => {
            if (!gameboard[e]) {
            gameboard[e] = turn
            displayGameboard();
            checkWinner(gameboard);
            changeTurn();
        }
        })
    });
} assignValue()

// take in array, get index of all "x"s or "o"s
//compare all indexes of array to each subarray of winners
function checkWinner (sequence) {

    // adds indexes to array
    function getAllIndexes() {
        var indexes = [], i;
        for(i = 0; i < sequence.length; i++)
            if (sequence[i] === turn)
                indexes.push(i);
        return indexes;
    }

    //compare indexes to each subarray of winners, if matches = 3 then winner is declared
    for (x = 0; x < winners.length; x++) {
        let matches = [];
        let target = winners[x]
        //pushes each matching index to matches
        for (i = 0; i < target.length; i++) {
            
            if (getAllIndexes().includes(target[i])) {
                matches.push(target[i])
                
                console.log(matches)
            }
        }
        if (matches.length === 3) {
            
            winner(turn)
            break;
        }
        if (!gameboard.includes(undefined)) {
            winner("tie")
            break;
        }
    }
}

function winner(w) {
    switch(w) {
        case "X":
            winnerText.innerText = "X Wins"
            break;
        case "O":
            winnerText.innerText = "O Wins"
            break;
        case "tie":
            winnerText.innerText = "Tie"
            break;
    }
    
        let x = document.getElementById("winner");
        
        x.style.display = "flex";
        setTimeout(() => {x.style.display = "none"}, 5000)
        
        
}