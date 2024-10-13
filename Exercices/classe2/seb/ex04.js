/*Ecrire une fonction qui prend un chiffre en paramètre et affiche s'il est positif ou négatif */

function check(nombre) {
    if (nombre > 0) {
        console.log("Le nombre est positif");
    } else if (nombre < 0) {
        console.log("Le nombre est négatif");
    } else {
        console.log("Le nombre est nul");
    }
}
check(5);
check(-3); 
check(0); 