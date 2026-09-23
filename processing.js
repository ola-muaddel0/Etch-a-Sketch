const sketchPad = document.querySelector('.grid');
function drawingGrid(number) {
    for (let i = 1; i <= number * number; i++) {
        const squareDimension = 1000 / number + "px";
        console.log(squareDimension);
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        for (let j = 1; j <= number; j++) {
            const square = document.createElement('div');
            square.style.width = squareDimension;
            square.style.height = squareDimension;
            row.appendChild(square);
        }
        sketchPad.appendChild(row);
    }
}

