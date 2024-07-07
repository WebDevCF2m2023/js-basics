// pour ceci, je mis le commentaire dès que j'ai completer un étape. J'ai déjà fait un Snake donc ce n'est pas facile à révister ce logique
// par contre, mon niveau de JS a evolué depuis Snake V1. Alors, comments, comments, comments

const canvas = document.getElementById("snake"),
      context = canvas.getContext('2d');
const canvasWidth = canvas.width,    // afin de le rendre plus facile de positioner le Snake
      canvasHeight = canvas.height,
      snakeSegment = 20,       // et de lui donner une taille
      snakeBaseLength = 5;  // et un longeur


// très facile de trouver le centre avec canvas...je me rappel de les difficultés pour faire le même avec snake_v1
let snakeX = canvasWidth/ 2,
    snakeY = canvasHeight / 2;
let snakeDirection = "LEFT";
let snakeBodyArray = []; // un tableaux pour contenir le Snake
// et un boucle pour le definir
for (let i = 0; i < snakeBaseLength; i++) {
    // essai de faire avec un objet - avant, j'ai calculer à chaque moment...ceci est plus éfficace (j'espère)
    snakeBodyArray.push({ x: snakeX + i * snakeSegment, y: snakeY });
}
let foodX, foodY;

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
    context.fillStyle = "red";
    context.fillRect(foodX, foodY, snakeSegment, snakeSegment);
}


// et un fonction pour lui placer sur le canvas
function createSnake() {
    context.clearRect(0, 0, canvasWidth, canvasHeight); // Bonne pratique, vide toujours le Canvas avant commencer

let headPos = true; // pour couleurer la tête du Snake
    snakeBodyArray.forEach(snakePart => {
        headPos ? context.fillStyle = "rgb(0 0 200)" : context.fillStyle = "rgb(0 200 0)" // tête = bleue, corp = vert
        context.fillRect(snakePart.x, snakePart.y, snakeSegment, snakeSegment); // possibilité de faire un changement de snake quand il mange?
        headPos = false;
    });
    placeFood();
}
// appel de fonction pour créér le Snake
createSnake();
// et aussi pour son diner
prepareFood();
placeFood();



// première fois que je l'essai mais pourquoi pas écouter le DOM entière
document.addEventListener('keydown', function(btnPressed) {
    // tableaux pour les touches clavier
    // avec AZERTY "KeyW" == "Z"
let leftButtons = ["ArrowLeft", "Numpad4","KeyA"],
    rightButtons = ["ArrowRight", "Numpad6", "KeyD"],
    upButtons = ["ArrowUp", "Numpad8", "KeyW"],
    downButtons = ["ArrowDown", "Numpad2", "KeyS"];
    // Si Up/Down, ne bouge pas l'écran
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

    // Copie position de la tête
    let head = { ...snakeBodyArray[0] };
    // change direction
    if (snakeDirection === 'UP') {
        head.y -= snakeSegment;
    } else if (snakeDirection === 'DOWN') {
        head.y += snakeSegment;
    } else if (snakeDirection === 'LEFT') {
        head.x -= snakeSegment;
    } else if (snakeDirection === 'RIGHT') {
        head.x += snakeSegment;
    }

    // verifier si tête touche les bordures du canvas
    if (head.x < 0 || head.x >= canvasWidth || head.y < 0 || head.y >= canvasHeight) {
        alert("Game Over! T'as touché le mur. Ton score est :" +snakeBodyArray.length);
        window.location.reload();
    }
    // et aussi pour auto-collision
    for (let i = 1; i < snakeBodyArray.length; i++) {
        if (head.x === snakeBodyArray[i].x && head.y === snakeBodyArray[i].y) {
            alert("Game Over! Tu t'as bouffé toi-même. Ton score est :" +snakeBodyArray.length);
            window.location.reload();
        }
    }
    // et finalement pour le Food
    if (head.x === foodX && head.y === foodY) {
        // augment la taille du Snake
        snakeBodyArray.push({ x: snakeX * snakeSegment, y: snakeY });
        console.log(snakeBodyArray.length+" after");
        // et placer un nouveau Food
        prepareFood();
    }

    // Je me rappel de la galère j'ai eu pour faire ceci la première fois mais je ne connaissais pas pop/unshift etc à ce moment
    snakeBodyArray.unshift(head);
    snakeBodyArray.pop();

    createSnake();
}


// MaJ du Snake 10/s
setInterval(() => {
updateSnake(snakeDirection);
}, 100);



/*
TO DO :

Add highscore
Add button selection (separate js file) and tie it in here
*/