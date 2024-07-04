document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Vérifiez que le mot de passe fait plus de 10 caractères
    if (password.length <= 10) {
        errorMessage.textContent = 'Le mot de passe doit contenir plus de 10 caractères.';
        return;
    }

    // Vérifiez la présence de chiffres
    const hasNumber = /\d/;
    if (!hasNumber.test(password)) {
        errorMessage.textContent = 'Le mot de passe doit contenir au moins un chiffre.';
        return;
    }

    // Vérifiez la présence de caractères spéciaux
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    if (!hasSpecialChar.test(password)) {
        errorMessage.textContent = 'Le mot de passe doit contenir au moins un caractère spécial.';
        return;
    }

    // Vérifiez la présence de majuscules
    const hasUpperCase = /[A-Z]/;
    if (!hasUpperCase.test(password)) {
        errorMessage.textContent = 'Le mot de passe doit contenir au moins une lettre majuscule.';
        return;
    }

    // Si toutes les conditions sont remplies, envoyez le formulaire
    errorMessage.textContent = '';
    alert('Formulaire soumis avec succès!');
});
