// mes consts
const classButton = document.getElementById("classButton"),
      classTarget = document.querySelector(".target"),
      idButton    = document.getElementById("idButton"),
      idTarget    = document.getElementById("target");

let theTarget       = null, // besoin plus tard mais pas pour quel elément. 
    timeForInterval = 100; 
// mes écouters
idButton.addEventListener("click", changeText);
classButton.addEventListener("click", changeText);


function changeText() {

    let target = this; // selon le bouton cliqué (idButton ou classButton)

    // cependant le bouton cliqué, récuperation des valeurs pour utilisation en bas
if (target.id === "idButton"){
    targetText = idTarget.textContent
    theTarget  = idTarget;
    timeForInterval = 25;
}else {
    targetText = classTarget.textContent;
    theTarget  = classTarget;
}
 

let textArray = targetText.split(""),       // découpage de textContent en tableaux
    theText = ["O", "w", "n", "e", "d"];    // création de texte pour l'insértion
    idButton.disabled = true;               // désactivation des boutons afin de prévenir des erreurs en cas de surcliquage
    classButton.disabled = true;
    let popIntervalId = setInterval(() => { // nommé l'interval pour l'arreter quand on n'as plus besoin
        if(textArray.length) {              // shorthand pour if (textArray.length > 0) car tout valeur sauf 0 = true
            textArray.pop();                // enleve le dernier lettre...
            theTarget.textContent = textArray.join(""); // ...et affiche le nouveau texte après d'avoir récollé
        } else {
            clearInterval(popIntervalId);       // si textArray est vide, arret l'interval
            let pushIntervalId = setInterval(() => {    // repete dans l'autre direction
                if(theText.length) {
                    textSnip = theText.shift();         // en commencant par l'autre côté
                    theTarget.textContent += textSnip;  // et utilise += (= va remplacer le text chaque fois chaque fois (+= est equivalent à theTarget.textContent = theTarget.textContent + textSnip))
                } else {
                    idButton.disabled = false;  // réactivation des boutons
                    classButton.disabled = false;
                    clearInterval(pushIntervalId);  // termination d'interval
                }       
            }, 150); // durée d'intérval pour pushInterval
        }
    }, timeForInterval); // durée d'intérval pour popInterval (adjuste selon longeur du string original)
    timeForInterval = 100; // réinitialiser au cas ou le version rapide est utiliser en première

}
