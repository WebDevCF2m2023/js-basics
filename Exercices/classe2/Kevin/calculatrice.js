const readline = require('readline');
const regex = /^[0-9\s+\-*/()]*$/;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Bienvenue dans la calculatrice.");
function askQuestion(){
    rl.question('Veuillez entrer votre calcule et appuyez sur enter pour avoir le résultat : \n', (answer) => {
        if(!regex.test(answer)){
            console.log("Veuillez indiquer uniquement des nombres et les symboles autorisé : ");
            console.log('+ - / * ( )');
        }else{
            try{
                const result = eval(answer);
                if(result == "Infinity") console.log("Une erreur s'est produite");
                else console.log('Le résultat est : ' + eval(answer));
            }catch(e){
                console.log("Une erreur s'est produite");
            }
        }
        askQuestion();
    });
}
askQuestion();
console.log('Exemple : 1 + 5 * 3 - 42 / 5');