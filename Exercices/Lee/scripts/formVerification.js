const   loginForm  = document.getElementById('loginForm'),
        nomInp     = document.getElementById("nomInp"),
        pwdInp     = document.getElementById("pwdInp"),
        submitBtn  = document.getElementById("submitBtn"),
        errMessage = document.getElementById("errMessage");

loginForm.addEventListener("submit", function(form) {
    form.preventDefault();
});

submitBtn.classList.add("disabled");

nomInp.addEventListener("input", validateInput);
pwdInp.addEventListener("input", validateInput);



