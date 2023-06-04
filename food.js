let food = generateFood()


export function update() {
    
  }


export function draw(background) {
    let foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    background.appendChild(foodElement)
}

function generateFood() {
    const gridSize = 20;
    let x = Math.floor(Math.random() * gridSize);
    let y = Math.floor(Math.random() * gridSize);
    return { x, y };
  }