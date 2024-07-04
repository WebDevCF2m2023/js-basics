// ma petite collection de consts
const   loginForm  = document.getElementById('loginForm'),
        pwdInp     = document.getElementById("pwdInp"),
        submitBtn  = document.getElementById("submitBtn"),
        inpLen     = document.getElementById("inpLen"),
        inpMaj     = document.getElementById("inpMaj"),
        inpNum     = document.getElementById("inpNum"),
        inpSym     = document.getElementById("inpSym"),
        message    = document.querySelector(".h3");

        // prevenir l'envoi du formulaire
loginForm.addEventListener("submit", function(form) {
    form.preventDefault();
});

submitBtn.classList.add("disabled"); // désactivé le bouton
submitBtn.addEventListener("click", sendForm) // pour quand on peux eventuellement cliquer

pwdInp.addEventListener("input", validateInput); // avec chaque changement, fait le validation

function validateInput() {
    // récuperer le NOUVELLE valeur avec tout input
    let pwd = pwdInp.value;
    // les testes 
    pwd.length > 10 ? toggleColours("len", "text-success")
                    : toggleColours("len", "text-danger");

    /[A-Z]/.test(pwd) ? toggleColours("cap", "text-success")
                      : toggleColours("cap", "text-danger");

    /[0-9]/.test(pwd) ? toggleColours("num", "text-success")
                      : toggleColours("num", "text-danger"); 
                
    /[!@#$%^"/=:?<>&,;*()_+]/.test(pwd) 
                      ? toggleColours("sym", "text-success")
                      : toggleColours("sym", "text-danger");                      
}

function toggleColours(factor, colour) {
    message.textContent = '';
    // preparation du défaut class
    let baseClass = "list-group-item bg-transparent",
        elem = "";

    // trouver quelle element à changer
    switch (factor) {
        case "len" :
            elem = inpLen;
        break;
        case "cap" :
            elem = inpMaj;
        break;
        case "num" :
            elem = inpNum;
        break;
        case "sym" :
            elem = inpSym;
        break;
    }
    
    elem.classList.contains(colour)
        ? undefined  // si couleur est déjà présent, pas de changement nécessaire                              
        : elem.className = baseClass + " " + colour; // sinon ajoute nouvelle couleur

    let pwd = pwdInp.value;
    // dernier vérification pour débloquer le bouton 
    if (pwd.length > 10 && 
        /[A-Z]/.test(pwd) && 
        /[0-9]/.test(pwd) && 
        /[!@#$%^"/=:?<>&,;*()_+]/.test(pwd)) 
        {
            submitBtn.classList.remove("disabled");
        }else {
            submitBtn.classList.add("disabled");
        }
}

function sendForm() {
    // Message du succès!
    message.textContent = 'Félicitations, vous avez correctement rempli le formulaire!';
}


function fizzBuzz () {
    for (let i = 1; i <= 100; i++) {
        i % 15 === 0 ? console.log("FizzBuzz") : i % 5 === 0 ? console.log("Buzz") : i % 3 === 0 ? console.log('Fizz') : undefined
    }
}
