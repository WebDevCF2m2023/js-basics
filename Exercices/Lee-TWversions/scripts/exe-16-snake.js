// pour ceci, je mis le commentaire dès que j'ai completer un étape. J'ai déjà fait un Snake donc ce n'est pas facile à révister ce logique
// par contre, mon niveau de JS a evolué depuis Snake V1. Alors, comments, comments, comments

const canvas = document.getElementById("snake"),
      context = canvas.getContext('2d');
const canvasWidth = canvas.width,    // afin de le rendre plus facile de positioner le Snake
      canvasHeight = canvas.height,
      snakeSegment = 25,       // et de lui donner une taille
      snakeBaseLength = 10;  // et un longeur
// List of image sources
const imageSources = [
    'images/snake/head_left.png',
    'images/snake/head_right.png',
    'images/snake/head_down.png',
    'images/snake/head_up.png',
    'images/snake/tail_left.png',
    'images/snake/tail_right.png',
    'images/snake/tail_down.png',
    'images/snake/tail_up.png',
    'images/snake/body_horizontal.png',
    'images/snake/body_vertical.png',
    'images/snake/body_bottomleft.png',
    'images/snake/body_bottomright.png',
    'images/snake/body_topleft.png',
    'images/snake/body_topright.png'
];

// Prepare des images d'avance pour n'avoir plus des petits trous
const images = [];
function preloadImages(sources, callback) {
    let loadedImagesCount = 0;
    for (let i = 0; i < sources.length; i++) {
        images[i] = new Image();
        images[i].src = sources[i];

        images[i].onload = () => {
            loadedImagesCount++;
            if (loadedImagesCount === sources.length) {
                callback();
            }
        };
        images[i].onerror = () => {
            console.error(`Failed to load image: ${sources[i]}`);
        };
    }
}
preloadImages(imageSources, () => {
    console.log('All images preloaded');
});



// très facile de trouver le centre avec canvas...je me rappel de les difficultés pour faire le même avec snake_v1
let snakeX = canvasWidth/ 2,
    snakeY = canvasHeight / 2;
let snakeDirection = "LEFT";
let snakeBodyArray = []; // un tableaux pour contenir le Snake
// et un boucle pour le definir

for (let i = 0; i < snakeBaseLength; i++) {
    snakeBodyArray.push({ x: snakeX + i * snakeSegment, y: snakeY, direction: snakeDirection });
}
let gameOn = false;
let foodX, foodY;

let gameInterval= setInterval(() => {
    if(gameOn === true){
// MaJ du Snake 10/s
        updateSnake();
    }
}, 100);

function prepareFood() {
    // pour permettre facile changement de taille du canvas, mieux des variables que des montant fixe
    const maxWidth = Math.floor(canvasWidth / snakeSegment);
    const maxHeight = Math.floor(canvasHeight / snakeSegment);

    // sélection d'un position pour Food
    foodX = Math.floor(Math.random() * maxWidth) * snakeSegment;
    foodY = Math.floor(Math.random() * maxHeight) * snakeSegment;

    // De fois, Food est placé sur le Snake - ceci est pour le prevenir
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


// et un fonction pour lui placer sur le canvas
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

    // toujours nettoyage avant dessiner
    context.clearRect(0, 0, canvasWidth, canvasHeight);

    snakeBodyArray.forEach((snakePart, index) => {
        if (index === 0) { // index 0 = tête
            context.drawImage(imgHead, snakePart.x, snakePart.y, snakeSegment, snakeSegment);
        } else if (index === snakeBodyArray.length - 1) { // et array.length -1 = queue
            // detérmine direction pour queue selon direction du voisin
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
        } else { // si pas tête ni queue, verifier si c'est courbé
            let nextSegment = snakeBodyArray[index - 1];

            let isBent = false;
            let bendImage ="";
            // passer par toutes possibilités du courbe
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
            // et appliquer l'image nécessaire
            if (isBent) {
                imgBend.src = bendImage;
                context.drawImage(imgBend, snakePart.x, snakePart.y, snakeSegment, snakeSegment);
            } else {
                // detérmine si morceaux non-courbé sont horizontal ou vertical
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

// appel de fonction pour créér le Snake

createSnake();
updateSnake();
// et aussi pour son diner
prepareFood();




document.addEventListener('keydown', function(btnPressed) {
    gameOn = true;
    // tableaux pour les touches clavier
    // avec AZERTY "KeyW" == "Z"
    if (btnPressed.code === "ArrowUp" || btnPressed.code === "ArrowDown") {
        btnPressed.preventDefault();
    }
    if (btnPressed.repeat) return;
let leftButtons = ["ArrowLeft", "Numpad4","KeyA"],
    rightButtons = ["ArrowRight", "Numpad6", "KeyD"],
    upButtons = ["ArrowUp", "Numpad8", "KeyW"],
    downButtons = ["ArrowDown", "Numpad2", "KeyS"];
    // Si Up/Down, ne bouge pas l'écran
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
    // inclure le direction dans de la tête
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


    // verifier si tête touche les bordures du canvas
    if (newHead.x < 0 || newHead.x >= canvasWidth || newHead.y < 0 || newHead.y >= canvasHeight) {
        alert("Game Over! T'as touché le mur. Ton score est :" +snakeBodyArray.length);
        clearInterval(gameInterval);
        window.location.reload();
    }
    // et aussi pour auto-collision
    for (let i = 1; i < snakeBodyArray.length; i++) {
        if (newHead.x === snakeBodyArray[i].x && newHead.y === snakeBodyArray[i].y) {
            alert("Game Over! Tu t'as bouffé toi-même. Ton score est :" +snakeBodyArray.length);
            clearInterval(gameInterval);
            window.location.reload();
        }
    }
    // et finalement pour le Food
    if (newHead.x === foodX && newHead.y === foodY) {
        // augment la taille du Snake
        snakeBodyArray.push({ x: snakeX * snakeSegment, y: snakeY });

        // et placer un nouveau Food
        prepareFood();
    }

    // Je me rappel de la galère j'ai eu pour faire ceci la première fois mais je ne connaissais pas pop/unshift etc à ce moment
    snakeBodyArray.unshift(newHead);
    snakeBodyArray.pop();

    createSnake(snakeDirection);
}


/*
TO DO :

Add highscore
Add button selection (separate js file) and tie it in here
*/