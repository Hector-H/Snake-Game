import {  getControlDirection } from "./controls.js";

export const speed = 5;
let snakeHead = [{x: 7, y: 15},]


export function update() {
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

export function addToSnake() {

}