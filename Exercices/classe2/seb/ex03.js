/*Ecrire l'alphabet de A à Z avec une fonction :*/

function afficherAlphabet() {
    for (let i = 65; i <= 90; i++) {
        console.log(String.fromCharCode(i));
    }
}
afficherAlphabet();

/*----------------------------------------------------*/

const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
console.log(alphabet);


