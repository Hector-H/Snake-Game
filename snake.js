let startDirection = { x: 0, y: 0};
let speed = 10;
let lastPaintTime = 0;
let snakeHead = [{x: 7, y: 15}]
let food = {x: 16, y: 5}


//updates game board 
function main(currentTime) {
    window.requestAnimationFrame(main)
    // console.log(currentTime)
    if((currentTime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = currentTime
    gameLogic();
}
//
function gameLogic(){
    background.innerHTML = "";
    snakeHead.forEach((e) => {    //creates div for snake head
        snakeBody = document.createElement('div');
        snakeBody.style.gridRowStart = e.y;
        snakeBody.style.gridColumnStart = e.x;
        snakeBody.classList.add('snake');
        background.appendChild(snakeBody)
    })

    foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    background.appendChild(foodElement)
}



window.requestAnimationFrame(main)
