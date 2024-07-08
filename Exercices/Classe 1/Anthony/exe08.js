//1/ Ecrire les chiffres de 0 à 10 avec une fonction :

function afficherNombre(){
    for(let i=0; i<=10; i++){
        console.log(i);
    }
}
afficherNombre();


// Bonus 2 : Ecrire les chiffres de 10 à 0
function afficherNombreReverse(){
    for(let i=10; i>=0; i--){
        console.log(i);
    }
}
afficherNombreReverse();