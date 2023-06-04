import { update as updateSnake, draw as drawSnake, 
    speed, } from "./snakeHead.js";
import { update as updateFood, draw as drawFood} from "./food.js"

let lastPaintTime = 0;
const background = document.getElementById('background')




//updates game board 
function main(currentTime) {
    window.requestAnimationFrame(main)
    // console.log(currentTime)
    if((currentTime - lastPaintTime) / 1000 < 1 /  speed) {
        return;
    }
    lastPaintTime = currentTime
    update()
    draw()
}
// function gameLogic(){
//     background.innerHTML = "";
//     snakeHead.forEach((e) => {    //creates div for snake head
//         let snakeBody = document.createElement('div');
//         snakeBody.style.gridRowStart = e.y;
//         snakeBody.style.gridColumnStart = e.x;
//         snakeBody.classList.add('snake');
//         background.appendChild(snakeBody)
//     })
//     let foodElement = document.createElement('div')
//     foodElement.style.gridRowStart = food.y;
//     foodElement.style.gridColumnStart = food.x;
//     foodElement.classList.add('food')
//     background.appendChild(foodElement)
// }
window.requestAnimationFrame(main)

//functions to draw, update snake


function update() {
    updateSnake()
    updateFood()
}

function draw() {
    drawSnake(background)
    drawFood(background)
}
