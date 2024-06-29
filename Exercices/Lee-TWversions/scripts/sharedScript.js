// injéction de CSS et Text genérale
const   mainHeading = document.getElementById("mainHeading"),
        subHeading  = document.getElementById('subHeading'),
        nextPage    = document.getElementById('nextPage'),
        globalDiv   = document.getElementById("globalDiv");

globalDiv.className     = "container-fluid flex-col text-center justify-center pt-16 mx-auto bg-gradient-to-t from-green-400 to-sky-600 h-screen";
mainHeading.className   = "block font-sans text-5xl font-semibold leading-tight tracking-normal text-gray-700 underline italic antialiased";
subHeading.className    = "block font-sans text-3xl font-semibold leading-tight tracking-normal text-gray-700";

let theUrl  = window.location.href,
    getLast = theUrl.split('/').pop();
let ourPage = getLast.replace('.html', '');

let nextLink = document.createElement('a');
    nextLink.textContent = "Au Suivant";
nextPage.appendChild(nextLink);

console.log('this ; ' + ourPage); // première con.log - je n'ai plus besoin de verifier chaque étape mais ceci est nouveau pour moi, alors je .log :D
// maintenant, je sais sur quel page est affiché. La reste est facile

switch (ourPage) {
    case 'index':
        mainHeading.textContent = "Bienvenue";
        subHeading.textContent  = "Pas grand chose à voir ici, cliquez ci-dessous pour continuer"
        nextLink.setAttribute("href", "exe-0-jokes.html");

        break;
    case "exe-0-jokes" :
        mainHeading.textContent = "Les Blagues";
        subHeading.textContent  = "Cliquez sur le bouton pour avoir une blague";
        nextLink.setAttribute("href", "exe-1-heure.html");
        break;
    case "exe-1-heure" :
        mainHeading.textContent = "Horloge";
        subHeading.textContent  = "Une horloge (indiquant également les secondes, pour que vous puissiez voir qu'elle fonctionne sans attendre)";
        // nextLink.setAttribute("href", "exe-2-consoles.html");
        nextLink.setAttribute("href", "exe-4-carousel.html");
        break;
    case "exe-2-consoles" :
        mainHeading.textContent = "Consoles";
        subHeading.textContent = "Manipulation d'un tableau";
        nextLink.setAttribute("href", "exe-3-targets.html");
        break;
    case "exe-3-targets" :
        mainHeading.textContent = "Targets";
        mainHeading.textContent = "Manipulation du DOM";
        nextLink.setAttribute("href", "exe-4-carousel.html");
        break;
    case "exe-4-carousel" :
        mainHeading.textContent = "Carousel"
        subHeading.textContent  = "Carrousel d’images fait à la main";
        // nextLink.setAttribute("href", "exe-5-colours.html");
        nextLink.setAttribute("href", "exe-7-pass.html");
        break;
    case "exe-5-colours" :
        mainHeading.textContent = "Couleurs";
        subHeading.textContent  = "Changeur de Couleur Aléatoire";
        nextLink.setAttribute("href", "exe-6-title.html");
        break;
    case "exe-6-title" :
        mainHeading.textContent = "Titres";
        subHeading.textContent  = "Encore de Changements Aléatoire";
        nextLink.setAttribute("href", "exe-7-pass.html");
        break;
    case "exe-7-pass" :
        mainHeading.textContent = "Mot De Passe";
        subHeading.textContent  = "Vérifier la Sécurité d'un Mot de Passe";
        nextLink.setAttribute("href", "exe-12-calculator.html");
        break;
    case "exe-12-calculator" :
        mainHeading.textContent = "Calculatrice";
        subHeading.textContent  = "Fait avec le minimum code possible";
        nextLink.setAttribute("href", "index.html");
        break;
// put more cases here

}
