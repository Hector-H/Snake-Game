import { update as updateSnake, draw as drawSnake, 
    speed, getSnakeHead, snakeIntersection} from "./snakeHead.js";
import { update as updateFood, draw as drawFood} from "./food.js"
import { outsideGrid } from "./grid.js";

let lastPaintTime = 0;
const background = document.getElementById('background')
let gameLost = false
let score = 0;


//updates game board 
function main(currentTime) {
    if(gameLost) {
        if(confirm('You lost. Press ok to restart')){
            window.location = '/'
        }
        return 
    }
    
    window.requestAnimationFrame(main)
    if((currentTime - lastPaintTime) / 1000 < 1 /  speed) {
    return;
        }
        lastPaintTime = currentTime
        update()
        draw()
}
window.requestAnimationFrame(main)



//functions to draw, update snake
function update() {
    updateSnake()
    updateFood()
    gameOver()
}
//draws new position for snake 
function draw() {
    drawSnake(background)
    drawFood(background)
}

function gameOver() {
    gameLost = outsideGrid(getSnakeHead()) || snakeIntersection()
}