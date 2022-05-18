let numCells = 16;

for (let i = 0; i < numCells*numCells; i++) {
    const container = document.querySelector('.container');
    cell = document.createElement('div');
    cell.classList.add("cell");
    container.appendChild(cell);
}

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('mouseover', onHover))

function onHover(e) {
    console.log(e.target);
    e.target.style.backgroundColor = "black";
}