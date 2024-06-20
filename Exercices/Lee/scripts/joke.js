// J'aime toujours faire mes déclarations des const pour tout element HTML comme boutons, paragraphs, forms, etc au début (et je suis grand fan d'alignement des "=" pour lisibilité)
const getJoke       = document.getElementById("getJoke"),
      jokeContainer = document.getElementById("jokeContainer"),

// création d'un array pour contenir les blagues (possiblilité d'ajoute des blagues)
      jokes         = [
            "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ? Parce que sinon ils tombent encore dans le bateau.",
            "Que dit une imprimante dans l'eau ? 'J'ai papier !'",
            "Pourquoi les poissons n'aiment-ils pas l'ordinateur ? À cause d'Internet.",
            "Quel est le comble pour un électricien ? De ne pas être au courant.",
            "Pourquoi les oiseaux ne jouent-ils jamais aux cartes ? Parce qu'ils ont peur du chat."
];

// Ecoute pour un click...
getJoke.addEventListener("click", getRandomJoke);


// Pour lancer ce fonction
function getRandomJoke () {
    let jokeNum = Math.floor(Math.random() * jokes.length); // sélection du blague aléatiore (avantage de le tableaux est que ce fonction s'adapte au longeur de le tableaux)
   
    // alert("Une Blague : " + jokes[jokeNum]);  // J'ai changé l'alerte en text car je n'aime pas cliquer OK mille fois quand je teste le code
   
    // finalement, on affiche le blague selon sa position dans le tableaux
    jokeContainer.textContent = jokes[jokeNum];
}

