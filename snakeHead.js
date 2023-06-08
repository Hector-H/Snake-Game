import {  getControlDirection } from "./controls.js";

export const speed = 5;
let snakeHead = [{x: 7, y: 15},]
let newSegments = 0

export function update() {
    addSegments()

    let controlDirection = getControlDirection()
    for(let i = snakeHead.length - 2; i >= 0; i--) {
        snakeHead[i + 1] = {...snakeHead[i] }
    }
    snakeHead[0].x += controlDirection.x
    snakeHead[0].y += controlDirection.y
}

export function draw(background) {
    background.innerHTML = "";
    snakeHead.forEach((e) => {    //creates div for snake head
        let snakeBody = document.createElement('div');
        snakeBody.style.gridRowStart = e.y;
        snakeBody.style.gridColumnStart = e.x;
        snakeBody.classList.add('snake');
        background.appendChild(snakeBody)
    })

}

export function growSnake(amount) {
    newSegments += amount 
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeHead.some((snakeBody, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(snakeBody, position)
    })
}

export function getSnakeHead() {
    return snakeHead[0]
}

export function snakeIntersection() {
    return onSnake(snakeHead[0], { ignoreHead: true })
}

function equalPositions(pos1, pos2) {
    return (
        pos1.x === pos2.x && pos1.y === pos2.y
)}

function addSegments() {
    for(let i = 0; i < newSegments; i++) {
        snakeHead.push({ ...snakeHead[snakeHead.length - 1] })
    }
    newSegments = 0
}