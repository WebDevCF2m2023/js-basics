const   listContainer = document.getElementById("listContainer"),
        noListMessage = document.getElementById("noListMessage");

let listCount = localStorage.getItem("listCount"),
    listArray = [];

for (let i = 0; i < listCount; i++) {
    listArray.push(localStorage.getItem("listItem"+(i+1)));
}
console.log(listArray);

listCount == 0 ? noListMessage.textContent = "La Liste Est Vide"
             : createList(listArray);

function createList(list){
    const UL = document.createElement("ul"); 
    list.forEach(function(item){
            let LI = document.createElement("li");
            LI.textContent = item;
            UL.appendChild(LI);       
        });
    listContainer.appendChild(UL);
}
