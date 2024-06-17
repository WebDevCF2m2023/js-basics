const name = document.querySelector('input[name=name]');
const password = document.querySelector('input[name=password]');
const errorPassword = document.querySelector('#error-password');
function checkForm(){
    const valuePassword = password.value;
    const error = [];
    if(/ /.test(valuePassword)) error.push('Le mot de passe ne doit pas contenir d\espace.');
    if(!/[0-9]/.test(valuePassword)) error.push('Le mot doit contenir un chiffre.');
    if(!/[A-Z]/.test(valuePassword)) error.push('Le mot doit contenir une majuscule.');
    if(!/[^A-Za-z0-9]/.test(valuePassword)) error.push('Le mot doit contenir un caractère spéciale.');
    if(valuePassword.length <= 10) error.push('Le mot doit faire plus de 10 caracètres.');

    for (const child of Array.from(errorPassword.children)) 
        errorPassword.removeChild(child);
    
    for(let i = 0; i < error.length; ++i){
        const p = document.createElement('p');
        p.textContent = error[i];
        errorPassword.appendChild(p);
    }

    return error.length === 0;
}