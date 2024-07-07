// déclaration des nécessaires const et let
const listContainer = document.getElementById("listContainer");

let listCount = localStorage.getItem("listCount"),
    listArray = [];
// console.log (listCount)
function listCreation(list) {
 
    let i = 0;
    while (listArray.length < listCount) {
        if (localStorage.getItem("listItem"+i) != null) {
            listArray.push(localStorage.getItem("listItem"+i));           
        }else {
            console.log("listItem"+i +" is empty");
        }
        i++
    }
    console.log("list length : " + listArray.length);

        console.log(listArray);
    for (i = 0; i < listArray.length; i++) {
        // Création du outerDiv
        const outerDiv = document.createElement('div');
        outerDiv.className = 'outerDiv flex flex-col bg-transparent w-auto';

        // Création du innerDiv
        const innerDiv = document.createElement('div');
        innerDiv.className = 'innerDiv flex items-center w-full py-1 pl-4 pr-1 justify-center';
        innerDiv.textContent = listArray[i]

        // Ajoute innerDiv à OuterDiv
        outerDiv.appendChild(innerDiv);

        // Ajoute le bouton
        const delBtn     = document.createElement("button");
        delBtn.className = "deleteButton relative h-10 w-10 ms-8";
        innerDiv.appendChild(delBtn);
        // Append the outerDiv to the listContainer
        listContainer.appendChild(outerDiv);
      
    }
    // et finalement, ajoute l'image sur les boutons
    const deleteButton = document.querySelectorAll(".deleteButton");
    console.log("delButtons : " +deleteButton.length);
    for (j = 0; j < deleteButton.length; j++) {
        const deleteImage = `<svg onclick="deleteThis('deleteBut${j}')" id="deleteBut${j}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd"></path></svg>`
        deleteButton[j].innerHTML = deleteImage;

    }

}
function deleteThis(elem) {
    console.log("delete : " +elem);
    let deleteSelect = document.getElementById(elem);
    console.log(deleteSelect.parentElement.parentElement);
}

listCreation (listArray); // lancement de la fonctionne pour démarré le création de la liste




