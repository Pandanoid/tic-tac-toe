const fieldState = [
    null, null, null,
    null, null, null,
    null, null, null,
]


const imgX = createImage("X.png")
const imgO = createImage("O.png")
let currentTurn = imgX;
const fieldElement = document.querySelector('.playing-field');
const gameCells = document.getElementsByClassName('game-cell');

fieldElement.addEventListener('click', function (event) {
    const index = [...gameCells].indexOf(event.target);

    if (index !== -1 && fieldState[index] === null) {
        fieldState[index] = currentTurn;
        event.target.appendChild(currentTurn.cloneNode());
        if (currentTurn === imgX) {
            currentTurn = imgO;
        } else {
            currentTurn = imgX;
        }
    }
})

document.getElementById('reset').addEventListener('click', function (event) {
    for (let i = 0; i < gameCells.length; i += 1) {
        gameCells[i].innerHTML = '';
        fieldState[i] = null;
    }
    currentTurn = imgX;
})

function createImage(src) {
    const imgX = document.createElement('img');
    imgX.src = src;
    return imgX;
}