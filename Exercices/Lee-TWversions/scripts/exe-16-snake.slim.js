const canvas = document.getElementById("snake"),
      context = canvas.getContext('2d'),
      canvasWidth = canvas.width,   
      canvasHeight = canvas.height,
      snakeSegment = 20,      
      snakeBaseLength = 5; 

let snakeX = canvasWidth/ 2,
    snakeY = canvasHeight / 2,
    snakeDirection = "LEFT",
    snakeBodyArray = [],
    foodX, foodY;

for (let i = 0; i < snakeBaseLength; i++) {
    snakeBodyArray.push({ x: snakeX + i * snakeSegment, y: snakeY, direction: snakeDirection });
}
function prepareFood() {
    const maxWidth = Math.floor(canvasWidth / snakeSegment);
    const maxHeight = Math.floor(canvasHeight / snakeSegment);
    foodX = Math.floor(Math.random() * maxWidth) * snakeSegment;
    foodY = Math.floor(Math.random() * maxHeight) * snakeSegment;

    for (let i = 0; i < snakeBodyArray.length; i++) {
        if (foodX === snakeBodyArray[i].x && foodY === snakeBodyArray[i].y) {
            prepareFood();
            return;
        }
    }
}
function placeFood() {
    context.fillStyle = "red";
    context.fillRect(foodX, foodY, snakeSegment, snakeSegment);
}
function createSnake() {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
let headPos = true;
    snakeBodyArray.forEach(snakePart => {
        headPos ? context.fillStyle = "rgb(0 0 200)" : context.fillStyle = "rgb(0 200 0)"
        context.fillRect(snakePart.x, snakePart.y, snakeSegment, snakeSegment);
        headPos = false;
    });
    placeFood();
}
createSnake();
prepareFood();
placeFood();
document.addEventListener('keydown', function(btnPressed) {
    let leftButtons = ["ArrowLeft", "Numpad4","KeyA"],
        rightButtons = ["ArrowRight", "Numpad6", "KeyD"],
        upButtons = ["ArrowUp", "Numpad8", "KeyW"],
        downButtons = ["ArrowDown", "Numpad2", "KeyS"];
    if (upButtons.includes(btnPressed.code) || downButtons.includes(btnPressed.code)) {
        btnPressed.preventDefault();
    }
    if (leftButtons.includes(btnPressed.code)) {
        snakeDirection = "LEFT";
    } else if (rightButtons.includes(btnPressed.code)) {
        snakeDirection = "RIGHT";
    } else if (upButtons.includes(btnPressed.code)) {
        snakeDirection = "UP";
    } else if (downButtons.includes(btnPressed.code)) {
        snakeDirection = "DOWN";
    }
    updateSnake(snakeDirection);
});
function updateSnake() {
    let head = { ...snakeBodyArray[0] };
    if (snakeDirection === 'UP') {
        head.y -= snakeSegment;
    } else if (snakeDirection === 'DOWN') {
        head.y += snakeSegment;
    } else if (snakeDirection === 'LEFT') {
        head.x -= snakeSegment;
    } else if (snakeDirection === 'RIGHT') {
        head.x += snakeSegment;
    }
    if (head.x < 0 || head.x >= canvasWidth || head.y < 0 || head.y >= canvasHeight) {
        alert("Game Over! T'as touché le mur. Ton score est :" +snakeBodyArray.length);
        window.location.reload();
    }
    for (let i = 1; i < snakeBodyArray.length; i++) {
        if (head.x === snakeBodyArray[i].x && head.y === snakeBodyArray[i].y) {
            alert("Game Over! Tu t'as bouffé toi-même. Ton score est :" +snakeBodyArray.length);
            window.location.reload();
        }
    }
    if (head.x === foodX && head.y === foodY) {
        snakeBodyArray.push({ x: snakeX * snakeSegment, y: snakeY });    
        prepareFood();
    }
    snakeBodyArray.unshift(head);
    snakeBodyArray.pop();
    createSnake();
}
setInterval(() => {
updateSnake(snakeDirection);
}, 100);
