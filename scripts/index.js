var grid = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]];
var playerOneChance = true;
var noOfCellsOccupied = 0;
var winnerFound = false;
var gameText = document.getElementById("game_text");
var playAgainButton = document.getElementById("play_again_btn");

var cells = document.getElementsByClassName("cell");
for (let i = 0; i < cells.length; i++) {
    let cell = cells[i];
    cell.onclick = () => {
        markOnGrid(cell.id);
    }
}

function markOnGrid(id) {
    if (winnerFound) {
        return;
    }

    if (id <= 3) {
        i = 0;
    } else if (id <= 6) {
        i = 1;
    } else {
        i = 2;
    }
    
    j = (id-1) % 3;

    if (grid[i][j] != -1) {
        //We dont want to mark it again
        return;
    }

    noOfCellsOccupied++;

    if (playerOneChance) {
        grid[i][j] = 0;
        let cell = document.getElementById(id);
        cell.style.background = "url(images/button_1.jpg)";
        cell.style.backgroundSize = "100%";
        var result = someoneWon(grid);
        console.log(i + " " + j + "changed");
        if (result) {
            gameText.innerHTML = "Player 1 Won!";
            playAgainButton.style.opacity = 1;
            winnerFound = true;
        } else {
            if (noOfCellsOccupied == 9) {
                gameText.innerHTML = "Match Tied";
                playAgainButton.style.opacity = 1;
            }
        }
    } else {
        grid[i][j] = 1;
        let cell = document.getElementById(id);
        cell.style.background = "url(images/button_2.jpg)";
        cell.style.backgroundSize = "100%";
        var result = someoneWon(grid);
        console.log(i + " " + j + "changed");
        if (result) {
            gameText.innerHTML = "Player 2 Won!";
            winnerFound = true;
            playAgainButton.style.opacity = 1;
        } else {
            if (noOfCellsOccupied == 9) {
                gameText.innerHTML = "Match Tied";
                playAgainButton.style.opacity = 1;
            }
        }
    }

    playerOneChance = !playerOneChance;
}

playAgainButton.onclick = () => {
    //Reset everything
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        cell.style.background = "white";
    }
    grid = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]];
    playerOneChance = true;
    noOfCellsOccupied = 0;
    winnerFound = false;
    playAgainButton.style.opacity = 0;
    gameText.innerHTML = "Tic Tac Toe";
}