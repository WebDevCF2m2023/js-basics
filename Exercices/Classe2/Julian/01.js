function show0to10F(){
    for(let i = 0; i <= 10; ++i) console.log(i);
}
const show0to10FA = () => {
    for(let i = 0; i <= 10; ++i) console.log(i);
}

function show10to0F(){
    for(let i = 10; i >= 0; --i) console.log(i);
}
const show10to0FA = () => {
    for(let i = 10; i >= 0; --i) console.log(i);
}
console.log('0 To 10 For');
show0to10F();

console.log('0 To 10 For Arrow');
show0to10FA();

console.log('10 To 0 For');
show10to0F();

console.log('10 To 0 For Arrow');
show10to0FA();