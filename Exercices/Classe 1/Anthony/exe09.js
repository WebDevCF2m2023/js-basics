// 2/ Ecrire une fonction qui affiche les chiffres de 1 à 100, chaque multiple de 3 doit afficher Fizz, chaque multiple de 5 doit afficher Buzz, et les multiples communs de 3 & 5 doivent afficher FizzBuzz.

function fizzBuzz(){
    for(let i=1; i<=100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
        else if(i % 3 === 0){
            console.log("Fizz");
        }
        else if(i % 5 === 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
        
    }
}

fizzBuzz();