import { onSnake, growSnake } from './snakeHead.js'
import {  randomGridPosition } from './grid.js';

let food = generateFood()
const growthRate = 1


export function update() {
    if(onSnake(food)) {
      growSnake(growthRate)
      food = generateFood()
    }
  }


  // adds food to board
export function draw(background) {
    let foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    background.appendChild(foodElement)
}
// generates food not on snake
function generateFood() {
  let foodPosition 
  while(foodPosition == null || onSnake(foodPosition)) {
    foodPosition = randomGridPosition()
  }
  return foodPosition
}


