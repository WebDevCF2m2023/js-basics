/*MODAL*/
document.addEventListener('DOMContentLoaded', function () {
    let modal = document.getElementById("modal");
    let boutonPlay = document.getElementById("btnPlay");
    let titreSnake = document.getElementById("titreSnake");

    modal.style.display = "block";

    boutonPlay.onclick = function () {
        titreSnake.style.display = "block";
        board.style.display = "block";
        modal.style.display = "none";
    }

});
let blockSize = 25;
let totalRow = 17;
let totalCol = 17;
let board;
let context;

let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

let speedX = 0; // vitesse du serpent axe x
let speedY = 0; // vitesse du serpent axe y

let snakeBody = [];

let foodX;
let foodY;

let gameOver = false;

window.onload = function () {
    // Hauteur et largeur du tableau
    board = document.getElementById("board");
    board.height = totalRow * blockSize;
    board.width = totalCol * blockSize;
    context = board.getContext("2d");

    placeFood();
    document.addEventListener("keyup",changeDirection); // gere les mouvements
    setInterval(update, 1000/10); // vitesse du serpent

}

function update(){
    if(gameOver) {
        return;
    }


//Background du jeu
context.fillStyle = "#d1db5a";
context.fillRect(0,0,board.width,board.height);

context.fillStyle = "red";
context.fillRect(foodX,foodY,blockSize,blockSize);

if(snakeX === foodX && snakeY === foodY){
    snakeBody.push([foodX,foodY]);
    placeFood();
}

// serpent qui évolue
for (let i = snakeBody.length -1; i > 0; i--){
    snakeBody[i] = snakeBody[i - 1];
}
if (snakeBody.length){
    snakeBody[0] = [snakeX,snakeY];
}

context.fillStyle = "#81a20c";
snakeX += speedX * blockSize; // mets à jour position serpent sur l'axe X
snakeY += speedY * blockSize; // mets à jour sur l'axe Y
context.fillRect(snakeX,snakeY,blockSize,blockSize);
for (let i = 0; i < snakeBody.length; i++){
    context.fillRect(snakeBody[i][0],snakeBody[i][1],blockSize,blockSize);
}

if (snakeX < 0
|| snakeX > totalCol * blockSize
|| snakeY < 0
|| snakeY > totalRow * blockSize){

    gameOver = true;
    alert("Game Over");
}

for (let i = 0; i < snakeBody.length; i++){
    if (snakeX === snakeBody[i][0] && snakeY === snakeBody[i][1]){
        gameOver = false;
        alert("Game Over");
    }
}
}

function changeDirection(e){
    if (e.code === "ArrowUp" && speedY !== 1){

        speedX = 0;
        speedY = -1;
    }
    else if (e.code === "ArrowDown" && speedY !== -1){
        speedX = 0;
        speedY = 1;
    }
    else if (e.code === "ArrowLeft" && speedX !== 1){
        speedX = -1;
        speedY = 0;
    }
    else if (e.code === "ArrowRight" && speedX !== -1){
        speedX = 1;
        speedY = 0;
    }
}

//Place la nourriture aléatoirement
function placeFood(){
    foodX = Math.floor(Math.random() * totalCol) * blockSize;

    foodY = Math.floor(Math.random() * totalRow) * blockSize;
}