/*Reprendre le code de l'exercice précédent, ajouter un titre et faire en sorte que le titre change lors du clic sur le bouton ( attention, la couleur ne doit plus changer )*/
function chgColor(currentDiv)
{
    document.getElementById(currentDiv).style.color='red';
    document.getElementById(currentDiv).innerText ="nouveau titre*";
   
}