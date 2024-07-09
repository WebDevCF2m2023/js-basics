

const canvas = document.getElementById("snake"),
      context = canvas.getContext('2d');
const canvasWidth = canvas.width,
      canvasHeight = canvas.height,
      snakeSegment = 25,
      snakeBaseLength = 10;


let snakeX = canvasWidth/ 2,
    snakeY = canvasHeight / 2;
let snakeDirection = "LEFT";
let snakeBodyArray = [];

for (let i = 0; i < snakeBaseLength; i++) {
    snakeBodyArray.push({ x: snakeX + i * snakeSegment, y: snakeY, direction: snakeDirection });
}
let gameOn = false;
let foodX, foodY;

let gameInterval= setInterval(() => {
    if(gameOn === true){
        updateSnake();
    }
}, 100);

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
    let img = new Image();
    img.src = "images/snake/apple.png";
    context.drawImage(img, foodX, foodY, snakeSegment, snakeSegment);
}


function createSnake() {
    let imgHead = new Image(),
        imgBodyH = new Image(),
        imgBodyV = new Image(),
        imgTail = new Image(),
        imgBend = new Image();



    if (snakeDirection === 'LEFT') {
        imgHead.src = "images/snake/head_left.png";
        imgTail.src = "images/snake/tail_right.png";
    } else if (snakeDirection === 'RIGHT') {
        imgHead.src = "images/snake/head_right.png";
        imgTail.src = "images/snake/tail_left.png";
    } else if (snakeDirection === 'UP') {
        imgHead.src = "images/snake/head_up.png";
        imgTail.src = "images/snake/tail_down.png";
    } else if (snakeDirection === 'DOWN') {
        imgHead.src = "images/snake/head_down.png";
        imgTail.src = "images/snake/tail_up.png";
    } else {
        imgHead.src = "images/snake/head_left.png";
        imgTail.src = "images/snake/tail_right.png";
    }

    imgBodyH.src = "images/snake/body_horizontal.png";
    imgBodyV.src = "images/snake/body_vertical.png";

    context.clearRect(0, 0, canvasWidth, canvasHeight);

    snakeBodyArray.forEach((snakePart, index) => {
        if (index === 0) {
            context.drawImage(imgHead, snakePart.x, snakePart.y, snakeSegment, snakeSegment);
        } else if (index === snakeBodyArray.length - 1) {
            let tailDir = snakeBodyArray[snakeBodyArray.length - 2].direction;
            if (tailDir === 'LEFT') {
                imgTail.src = "images/snake/tail_right.png";
            } else if (tailDir === 'RIGHT') {
                imgTail.src = "images/snake/tail_left.png";
            } else if (tailDir === 'UP') {
                imgTail.src = "images/snake/tail_down.png";
            } else if (tailDir === 'DOWN') {
                imgTail.src = "images/snake/tail_up.png";
            }
            context.drawImage(imgTail, snakePart.x, snakePart.y, snakeSegment, snakeSegment);
        } else {
            let nextSegment = snakeBodyArray[index - 1];

            let isBent = false;
            let bendImage ="";
            if (snakePart.direction === "UP" && nextSegment.direction === 'LEFT') {
                bendImage = "images/snake/body_bottomleft.png";
                isBent = true;
            } else if (snakePart.direction === "DOWN" && nextSegment.direction === 'LEFT') {
                bendImage = "images/snake/body_topleft.png";
                isBent = true;
            } else if (snakePart.direction === "UP" && nextSegment.direction === 'RIGHT') {
                bendImage = "images/snake/body_bottomright.png";
                isBent = true;
            } else if (snakePart.direction === "DOWN" && nextSegment.direction === 'RIGHT') {
                bendImage = "images/snake/body_topright.png";
                isBent = true;
            } else if (snakePart.direction === "LEFT" && nextSegment.direction === 'UP') {
                bendImage = "images/snake/body_topright.png";
                isBent = true;
            } else if (snakePart.direction === "LEFT" && nextSegment.direction === 'DOWN') {
                bendImage = "images/snake/body_bottomright.png";
                isBent = true;
            } else if (snakePart.direction === "RIGHT" && nextSegment.direction === 'UP') {
                bendImage = "images/snake/body_topleft.png";
                isBent = true;
            } else if (snakePart.direction === "RIGHT" && nextSegment.direction === 'DOWN') {
                bendImage = "images/snake/body_bottomleft.png";
                isBent = true;
            }
            if (isBent) {
                imgBend.src = bendImage;
                context.drawImage(imgBend, snakePart.x, snakePart.y, snakeSegment, snakeSegment);
            } else {
                if (snakePart.direction === 'LEFT' || snakePart.direction === 'RIGHT') {
                    context.drawImage(imgBodyH, snakePart.x, snakePart.y, snakeSegment, snakeSegment);
                } else if (snakePart.direction === 'UP' || snakePart.direction === 'DOWN') {
                    context.drawImage(imgBodyV, snakePart.x, snakePart.y, snakeSegment, snakeSegment);
                }
            }
        }
    });


    placeFood();
}


createSnake();
updateSnake();
prepareFood();




document.addEventListener('keydown', function(btnPressed) {
    gameOn = true;
    if (btnPressed.code === "ArrowUp" || btnPressed.code === "ArrowDown") {
        btnPressed.preventDefault();
    }
    if (btnPressed.repeat) return;
let leftButtons = ["ArrowLeft", "Numpad4","KeyA"],
    rightButtons = ["ArrowRight", "Numpad6", "KeyD"],
    upButtons = ["ArrowUp", "Numpad8", "KeyW"],
    downButtons = ["ArrowDown", "Numpad2", "KeyS"];

    if (leftButtons.includes(btnPressed.code) && snakeDirection !== "RIGHT"){
        snakeDirection = "LEFT";
        } else if (rightButtons.includes(btnPressed.code) && snakeDirection !== "LEFT") {
        snakeDirection = "RIGHT";
     } else if (upButtons.includes(btnPressed.code) && snakeDirection !== "DOWN") {
        snakeDirection = "UP";
        } else if (downButtons.includes(btnPressed.code) && snakeDirection !== "UP") {
        snakeDirection = "DOWN";
    }
    
    updateSnake(snakeDirection);
});

function updateSnake() {
    let newHead = { 
        x: snakeBodyArray[0].x, 
        y: snakeBodyArray[0].y, 
        direction: snakeDirection 
    };
    
    if (snakeDirection === 'LEFT') {
        newHead.x -= snakeSegment;
    } else if (snakeDirection === 'RIGHT') {
        newHead.x += snakeSegment;
    } else if (snakeDirection === 'UP') {
        newHead.y -= snakeSegment;
    } else if (snakeDirection === 'DOWN') {
        newHead.y += snakeSegment;
    }


    if (newHead.x < 0 || newHead.x >= canvasWidth || newHead.y < 0 || newHead.y >= canvasHeight) {
        alert("Game Over! T'as touché le mur. Ton score est :" +snakeBodyArray.length);
        clearInterval(gameInterval);
        window.location.reload();
    }
    for (let i = 1; i < snakeBodyArray.length; i++) {
        if (newHead.x === snakeBodyArray[i].x && newHead.y === snakeBodyArray[i].y) {
            alert("Game Over! Tu t'as bouffé toi-même. Ton score est :" +snakeBodyArray.length);
            clearInterval(gameInterval);
            window.location.reload();
        }
    }
    if (newHead.x === foodX && newHead.y === foodY) {
        snakeBodyArray.push({ x: snakeX * snakeSegment, y: snakeY });

        prepareFood();
    }

    snakeBodyArray.unshift(newHead);
    snakeBodyArray.pop();

    createSnake(snakeDirection);
}


/*
TO DO :

Add highscore
Add button selection (separate js file) and tie it in here
*/