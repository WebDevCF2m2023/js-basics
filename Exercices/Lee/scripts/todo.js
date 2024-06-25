const   listContainer = document.getElementById("listContainer"),
        noListMessage = document.getElementById("noListMessage"),
        addNewButton  = document.getElementById("addNewButton"),
        addNewText    = document.getElementById("addNewText");

    addNewButton.addEventListener("click", addListItem);
    //récuperation de totale items sur la liste et crétion d'un array pour les stocké
let listCount = localStorage.getItem("listCount"),
    listArray = [];

    // Si items existe, ajoute dans array
for (let i = 0; i < listCount; i++) {
    listArray.push(localStorage.getItem("listItem"+(i+1)));
}

// Si liste est vide, affiche un message, sinon appel le fonction de création liste
// listCount == 0 ? noListMessage.textContent = "La Liste Est Vide"
   //          : createList(listArray);
createList(listArray);

function createList(list){
    // création d'un UL pour stocké la liste
    const UL = document.createElement("ul");
let i = 0;
    list.forEach(function(item){
        i++; 
        if (item != null) {
        // pour chaque listItem, créé un LI
            let LI = document.createElement("li");
            // et le remplir
            LI.textContent = item;
            LI.setAttribute('id', "listItem"+i)
            // et ajoute LI dans UL
            UL.appendChild(LI);       
            let XX = document.createElement("button");
            XX.classList.add("removeButton");
            XX.textContent = "XX";
            XX.addEventListener("click", removeListItem);
            LI.appendChild(XX);

        }
        });
        UL.childElementCount == 0 
            ? noListMessage.textContent = "La Liste Est Vide"
                : listContainer.appendChild(UL);
        //

}

function addListItem() {
    let newList = addNewText.value;
    listCount++;
    localStorage.setItem("listCount", listCount);
    localStorage.setItem("listItem"+listCount, newList);
    window.location.reload();
    
}

function removeListItem() {

    let removeThis = this.parentElement.id;
    localStorage.removeItem(removeThis);

    window.location.reload();
}