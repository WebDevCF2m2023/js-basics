function printAlphabet() {
    let alphabet = "";
    for (let i = 65; i <= 90; i++) { 
        alphabet += String.fromCharCode(i);
    }
    return alphabet;
}

console.log(printAlphabet());