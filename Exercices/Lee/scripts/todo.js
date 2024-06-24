const   listContainer = document.getElementById("listContainer"),
        noListMessage = document.getElementById("noListMessage"),
        addNewButton  = document.getElementById("addNewButton");

        //récuperation de totale items sur la liste et crétion d'un array pour les stocké
let listCount = localStorage.getItem("listCount"),
    listArray = [];

    // Si items existe, ajoute dans array
for (let i = 0; i < listCount; i++) {
    listArray.push(localStorage.getItem("listItem"+(i+1)));
}

// Si liste est vide, affiche un message, sinon appel le fonction de création liste
listCount == 0 ? noListMessage.textContent = "La Liste Est Vide"
             : createList(listArray);


function createList(list){
    // création d'un UL pour stocké la liste
    const UL = document.createElement("ul");

    list.forEach(function(item){
        // pour chaque listItem, créé un LI
            let LI = document.createElement("li");
            // et le remplir
            LI.textContent = item;
            // et ajoute LI dans UL
            UL.appendChild(LI);       
        });
        //et finalement, ajoute UL dans le div préparé pour l'affichage
    listContainer.appendChild(UL);
}
