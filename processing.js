const sketchPad = document.querySelector('.grid');
function drawingGrid(number) {
    for (let i = 1; i <= number; i++) {
        const squareDimension = (1000 / number) - 4 + "px";
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        for (let j = 1; j <= number; j++) {
            const square = document.createElement('div');
            square.style.width = squareDimension;
            square.style.height = squareDimension;
            square.setAttribute('class', 'square');
            square.addEventListener('mouseover', (event) => {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                event.target.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
            });
            row.appendChild(square);
        }
        sketchPad.appendChild(row);
    }
}

drawingGrid(36);