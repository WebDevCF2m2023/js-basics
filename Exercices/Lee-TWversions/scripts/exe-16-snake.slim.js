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
    snakeBodyArray.push({ x: snakeX + i * snakeSegment, y: snakeY });
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
    if (btnPressed.code === 'ArrowUp' || btnPressed.code === 'ArrowDown' || btnPressed.code === 'Numpad8' || btnPressed.code === 'Numpad2' || btnPressed.code === "KeyW" || btnPressed === 'KeyS') { 
        btnPressed.preventDefault();
    }
    if (btnPressed.code === 'ArrowLeft' || btnPressed.code === 'Numpad4' || btnPressed.code === 'KeyA') {
        snakeDirection = "LEFT";
        } else if (btnPressed.code === 'ArrowRight' || btnPressed.code === 'Numpad6' || btnPressed.code === 'KeyD') {
        snakeDirection = "RIGHT";
        } else if (btnPressed.code === 'ArrowUp' || btnPressed.code === 'Numpad8' || btnPressed.code === 'KeyW') {
        snakeDirection = "UP";
        } else if (btnPressed.code === 'ArrowDown' || btnPressed.code === 'Numpad2' || btnPressed.code === 'KeyS') {
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
        alert("Game Over! T'as touché le mur");
        window.location.reload();
    }
    for (let i = 1; i < snakeBodyArray.length; i++) {
        if (head.x === snakeBodyArray[i].x && head.y === snakeBodyArray[i].y) {
            alert("Game Over! Tu t'as bouffé toi-même");
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
