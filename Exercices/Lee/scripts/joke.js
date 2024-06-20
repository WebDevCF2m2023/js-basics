let jokes = [
            "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ? Parce que sinon ils tombent encore dans le bateau.",
            "Que dit une imprimante dans l'eau ? 'J'ai papier !'",
            "Pourquoi les poissons n'aiment-ils pas l'ordinateur ? À cause d'Internet.",
            "Quel est le comble pour un électricien ? De ne pas être au courant.",
            "Pourquoi les oiseaux ne jouent-ils jamais aux cartes ? Parce qu'ils ont peur du chat."
];
const getJoke = document.getElementById("getJoke"),
      jokeContainer = document.getElementById("jokeContainer");

getJoke.addEventListener("click", getRandomJoke);

function getRandomJoke () {
    let jokeNum = Math.floor(Math.random() * 5);
    alert("Une Blague : " + jokes[jokeNum]);

}