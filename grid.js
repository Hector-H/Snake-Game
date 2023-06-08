
const gridSize = 20

// creates a random spot for food to appear
export function randomGridPosition() {
      let x = Math.floor(Math.random() * gridSize) + 1;
      let y = Math.floor(Math.random() * gridSize) + 1;
      return { x, y };
    }

export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > gridSize ||
        position.y < 1 || position.y > gridSize
    )
}