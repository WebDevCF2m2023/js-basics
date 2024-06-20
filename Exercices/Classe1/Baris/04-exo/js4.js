// Initialiser le compteur
let count = 0;
 
// Obtenir les éléments DOM
const EXERCISES = document.querySelector("#exercises");
const PREV = EXERCISES.querySelector("#prev");
const NEXT = EXERCISES.querySelector("#next");
const SLIDER = EXERCISES.querySelector(".slider");
const SLIDE = SLIDER.querySelectorAll(".slide");
const INFO = EXERCISES.querySelector("#info");
 
// Afficher la diapositive à l'index spécifié
function showSlider(index) {
    // Mettre à jour les informations
    setInfor();
    // Déplacer le conteneur de la diapositive
    SLIDER.style.transform = `translateX(${-index * 100}%)`;
    // Mettre à l'échelle la diapositive actuelle
    SLIDE[index].style.transform = `scale(1)`;
}
 
// Passer à la diapositive suivante
function nextSlider() {
    // Incrémenter le compteur
    count++;
    // Vérifier s'il dépasse l'index maximum, sinon revenir au début
    if (count >= SLIDE.length) {
        count = 0;
    }
    // Afficher la nouvelle diapositive
    showSlider(count);
}
 
// Revenir à la diapositive précédente
function prevSlider() {
    // Décrémenter le compteur
    count--;
    // Vérifier s'il est inférieur à zéro, sinon revenir à la dernière diapositive
    if (count < 0) {
        count = SLIDE.length - 1;
    }
    // Afficher la nouvelle diapositive
    showSlider(count);
}
 
// Définir le contenu de la zone d'informations
function setInfor() {
    INFO.innerHTML = `
    <span class="number">${count + 1} / ${SLIDE.length}</span>
    | 
    <span class="title">${SLIDE[count].getAttribute("alt")}</span>
`;
}
 
// Initialiser les informations
setInfor();
 
// Ajouter des écouteurs d'événements
NEXT.addEventListener("click", nextSlider);
PREV.addEventListener("click", prevSlider);