function makeGrid(evt) {
    evt.preventDefault();
    const table = document.querySelector('#pixelCanvas')
    const gridHeight = parseInt(document.querySelector('#inputHeight').value)
    const gridWidth = parseInt(document.querySelector('#inputWidth').value)
    if (table.innerHTML !== ''){
        table.innerHTML = '';
    };

    for (let i = 0; i < gridHeight; i++) {
        const newTrElement = document.createElement('tr');
        newTrElement.className = 'tableRow';
        table.appendChild(newTrElement);
        for (let j = 0; j < gridWidth; j++) {
            const newTdElement = document.createElement('td');
            newTdElement.className = 'tableCell';
            newTrElement.appendChild(newTdElement);
        }
    }
}

function pixelPainter(event) {
    if (event.target.nodeName === 'TD'){
        event.target.style.backgroundColor = document.getElementById('colorPicker').value;
    }
}

function pixelEraser(e) {
    if (e.target.nodeName === 'TD') {
        e.target.style.backgroundColor = 'white';
    }
}

document.querySelector('#sizePicker').addEventListener('submit', makeGrid);

const theTable = document.getElementById('pixelCanvas')
theTable.addEventListener('click', pixelPainter);

document.getElementById('buttons').addEventListener('click', function(evt){
    let target = evt.target;
    if (target.id === 'brush') {
        theTable.removeEventListener('click', pixelEraser)
        theTable.addEventListener('mouseover', pixelPainter);
    } else if (target.id === 'pointer') {
        theTable.removeEventListener('mouseover', pixelPainter);
        theTable.removeEventListener('click', pixelEraser)
        theTable.addEventListener('click', pixelPainter);
    } else if (target.id === 'eraser') {
        theTable.removeEventListener('mouseover', pixelPainter);
        theTable.addEventListener('click', pixelEraser)
    }
})
