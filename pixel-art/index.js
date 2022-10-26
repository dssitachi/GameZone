import { Board } from './board.js'
const rows = 15
const cols = 10

const board = new Board(rows, cols)
const boardElement = document.querySelector('#board')

for(let i = 0; i < board.rows * board.cols; i++) {
    const box = document.createElement('div')
    box.classList.add('box')
    boardElement.appendChild(box)
}

for(let i = 0; i < board.cols; i++) {
    const box = document.createElement('div')
    box.classList.add('box')
    box.classList.add('pallete')
    box.style.backgroundColor = getGetHEXColorCode();
    boardElement.appendChild(box)
}

function getGetHEXColorCode() {
    const rValue = Math.round(0xff * Math.random())
      .toString(16)
      .padStart(2, '0');
    const gValue = Math.round(0xff * Math.random())
      .toString(16)
      .padStart(2, '0');
    const bValue = Math.round(0xff * Math.random())
      .toString(16)
      .padStart(2, '0');
    return '#' + rValue + gValue + bValue;
  }


let mouseDown = false
let currColor = '#ffffff'

boardElement.addEventListener('mousedown', (event) => {
    if(event.target.className == "box pallete")
        currColor = event.target.style.backgroundColor
    else
        event.target.style.backgroundColor = currColor
    mouseDown = true
})

boardElement.addEventListener('mouseup', (event) => {
    mouseDown = false
})

boardElement.addEventListener('mouseover', (event) => {
    if (mouseDown) {
        const target = event.target;
        if (target.classList.contains('box') && !target.classList.contains('pallete')) {
          target.style.backgroundColor = currColor;
        }
      }
})