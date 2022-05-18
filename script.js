function onSlide() {
    console.log('entered');
    const existing = document.querySelectorAll('.cell');
    for (const elem of existing) {
        elem.remove();
    }

    const squares = document.querySelector('.slider');
    createGrid(squares.value);
    
    const label = document.querySelector('label');
    label.textContent = `${squares.value}`;
    listen();
}

function createGrid(cells) {
    for (let i = 0; i < cells*cells; i++) {
        const container = document.querySelector('.container');
        const cell = document.createElement('div');
        cell.classList.add("cell");
        container.appendChild(cell);
    }
    const contain = document.querySelector('.container');
    contain.style.gridTemplateColumns=`repeat(${cells}, 1fr)`;
    contain.style.gridTemplateRows=`repeat(${cells}, 1fr)`;
}

function onHover(e) {
    e.target.style.backgroundColor = "black";
}

let numCells = 16;
createGrid(numCells);
listen();

function listen() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseover', onHover))
}