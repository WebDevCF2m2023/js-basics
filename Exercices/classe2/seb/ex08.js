/* Créer un formulaire pour choisir un nom d'utilisateur et un mot de passe, avant d'envoyer le formulaire vous devez vérifiez que le mot de passe choisi fait plus de 10 caractères ( grace à JS ) :*/


document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    document.getElementById('errorMessages').textContent = '';

    const password = document.getElementById('password').value;


    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    function verifierMotDePasse(motDePasse) {
        if (motDePasse.length > 10) {
            console.log("Le mot de passe est valide.");
        } else {
            console.log("Le mot de passe doit contenir au moins 10 caractères.");
        }
    }
    
    verifierMotDePasse("motDePasse123"); 

    if (!hasUpperCase || !hasNumber || !hasSymbol) {
        document.getElementById('errorMessages').textContent = 'Le mot de passe doit contenir au moins un chiffre, un symbole et une majuscule.';
        return;
    }

    alert('Formulaire soumis avec succès !');
});
