const sketchPad = document.querySelector('.grid');

const selectNumBtn = document.createElement('button');
selectNumBtn.textContent = 'Select A Number';
selectNumBtn.setAttribute('class', 'select-number');
selectNumBtn.addEventListener('click', () => {
    let number = parseInt(prompt("enter the grid dimansion (maximum is 100)"));
    if (isNaN(number) || number > 100) {
        return;
    }
    else {
        while (sketchPad.firstChild) {
            sketchPad.removeChild(sketchPad.firstChild);
        }

        drawingGrid(number);
    }

});

document.body.insertBefore(selectNumBtn, sketchPad);

function drawingGrid(number) {
    const squareDimension = (960 / number) + "px";
    for (let i = 1; i <= number; i++) {

        const row = document.createElement('div');
        row.setAttribute('class', 'row');

        for (let j = 1; j <= number; j++) {

            const square = document.createElement('div');
            square.style.width = squareDimension;
            square.style.height = squareDimension;
            square.setAttribute('class', 'square');
            square.style.opacity = '1';
            square.addEventListener('mouseover', (event) => {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                event.target.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
                let squareOpacity = parseFloat(event.target.style.opacity);
                if (squareOpacity >= 0.1) {
                    event.target.style.opacity = '' + (squareOpacity - 0.1);
                }

            });

            row.appendChild(square);
        }
        sketchPad.appendChild(row);
    }
}
drawingGrid(16);
