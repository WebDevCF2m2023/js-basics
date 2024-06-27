function showFizzBuzz(){
    for(let i = 0; i <= 100; ++i){
        const isModulo3 = i % 3 == 0;
        const isModulo5 = i % 5 == 0;
        if(isModulo3 && isModulo5) console.log('FizzBuzz');
        else if(isModulo3) console.log('Fizz');
        else if(isModulo5) console.log('Buzz');
        else console.log(i);
    }
}
showFizzBuzz();