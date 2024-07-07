// nos consts
const consoleHolder = document.getElementById("consoleHolder"),
      consoleButton = document.getElementById("consoleButton"),
      showConsoles  = document.getElementById("showConsoles");
        
let count = 0, // utiliser pour compter combien fois le bouton est cliqué
    i     = 0; // plus d'info en bas

      // le tableaux pour les consoles
let consoles = [
    "PlayStation",
    "Xbox",
    "Nintendo Switch",
    "Sega Genesis",
    "Atari 2600",
    "Super Nintendo",
    "Game Boy",
    "PlayStation 5",
    "Xbox Series X",
    "Nintendo 64",
    "Sega Dreamcast",
    "PlayStation 2"
];
// affiche le quand même
consoleHolder.textContent = consoles;

// ecoute pour le click
consoleButton.addEventListener("click", consoleChange);


function consoleChange () {
    // console.log(count);  // je suis super fan de console.log (je les utilise par tout mais je les efface quand plus necéssaire - un jour je te ferai un code sans les éffacer ;P)

    // pouvais utiliser un if/else mais j'aime les switch (et les ternaires )
    switch (count) {
        case 0 :
        alert(consoles[7]);
        break;
        case 1 :
            // un peu paresseux mais on n'as pas besoin de les garder
            consoles.pop();
            consoles.shift();
            consoleHolder.textContent = consoles; // montrer que les choses étaient bien enlever du tableaux
        break;
        case 2 :
                // appel d'un fonction pour tout afficher
            listThemAll();
        break
        case 3 :
                // remettre tableaux en état original
            consoles = [
                "PlayStation",
                "Xbox",
                "Nintendo Switch",
                "Sega Genesis",
                "Atari 2600",
                "Super Nintendo",
                "Game Boy",
                "PlayStation 5",
                "Xbox Series X",
                "Nintendo 64",
                "Sega Dreamcast",
                "PlayStation 2"
            ];
            consoleHolder.textContent = consoles; // aussi pour l'affichage
            showConsoles.textContent = "";        // vider contenu de 'showConsoles' - plus besoin pour le moment
            i = 0;                                // reset le compteur pour listThemAll
            alert('Button Reset');                  
            break;
    }
    count > 2 ? count = 0 : count++;              // ternaire pour réinitialeser le compteur du bouton 
}


function listThemAll() {
        setTimeout(() => { // timeOut pour que l'affichage déroule
            showConsoles.textContent = consoles[i]; // afficage du mot selon position dans tableaux
            i++; 
            // rappel de fonction quand le tableaux n'est pas vide (info supplémentaire : première fois que j'ai re-crée un for() sans utilisé un for(). J'aime expérimenter dans mon code
            if(i < consoles.length) {
                listThemAll();
            }
        }, 500); // et le duration du timeOut
     
    }

