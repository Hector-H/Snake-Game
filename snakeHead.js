export const speed = 1;
let snakeHead = [
    {x: 7, y: 15},
]
let food = {x: 16, y: 5}

export function update() {
    for(let i = snakeHead.length - 2; i >= 0; i--) {
        snakeHead[i + 1] = {...snakeHead[i] }
    }

    snakeHead[0].x += 0
    snakeHead[0].y += 0
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

    let foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    background.appendChild(foodElement)
}

