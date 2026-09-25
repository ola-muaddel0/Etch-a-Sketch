const sketchPad = document.querySelector('.grid');

const selectNumBtn = document.createElement('button');
selectNumBtn.textContent= 'Select A Number';
selectNumBtn.setAttribute('class', 'select-number');

document.body.insertBefore(selectNumBtn, sketchPad);

function drawingGrid(number) {
    for (let i = 1; i <= number; i++) {
    
        const squareDimension = (450 / number) + "px";

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
drawingGrid(16);
