const passForm = document.getElementById("passForm"),
      passInput  =  document.getElementById("passInput"),
      passButton = document.getElementById("passButton"),
      inpLen     = document.getElementById("inpLen"),
      inpMaj     = document.getElementById("inpMaj"),
      inpNum     = document.getElementById("inpNum"),
      inpSym     = document.getElementById("inpSym"),
      buttonClass = "w-full py-2 px-4 rounded-md text-sm font-medium text-white bg-gray-600 hover:bg-red-600",
      message    = document.getElementById('message');
let elem;
passForm.addEventListener("submit", function (form) {
   form.preventDefault();
});
passInput.addEventListener("input", validateInput);
passButton.addEventListener("click", sendForm);
passButton.disabled = true;

function validateInput() {
    let pwd = passInput.value;

    pwd.length >= 10 ? toggleColours("len", "text-green-400")
        : toggleColours("len", "text-red-500");

    /[A-Z]/.test(pwd) ? toggleColours("cap", "text-green-400")
        : toggleColours("cap", "text-red-500");

    /[0-9]/.test(pwd) ? toggleColours("num", "text-green-400")
        : toggleColours("num", "text-red-500");

    /[!@#$%^"/=:?<>&,;*()_+]/.test(pwd)
        ? toggleColours("sym", "text-green-400")
        : toggleColours("sym", "text-red-500");
}

function toggleColours(factor, colour) {
    message.textContent = '';

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
        ? undefined
        : elem.className = colour;

    let pwd = passInput.value;
    // dernier vérification pour débloquer le bouton
    if (pwd.length >= 10 &&
        /[A-Z]/.test(pwd) &&
        /[0-9]/.test(pwd) &&
        /[!@#$%^"/=:?<>&,;*()_+]/.test(pwd))
    {
        passButton.disabled = false;
        passButton.className = "w-full py-2 px-4 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-500"
    }else {
        passButton.disabled = true;
        passButton.className = buttonClass;
    }
}

function sendForm() {
    // Message du succès!
    message.textContent = 'Félicitations, votre mot de passe est assez fort!';
}



