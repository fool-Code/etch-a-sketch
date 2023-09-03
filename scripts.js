// scripts.js
const container = document.querySelector('.container');

function createGrid(nRows, nCols) {
    for (let i = 0; i < nRows*nCols; i++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        container.appendChild(gridSquare);
    }
}

// Grid 16x16
createGrid(16,16)