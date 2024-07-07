const   toDoMessage = document.getElementById("toDoMessage"),
        newToDoItem = document.getElementById("newToDoItem"),
        newToDoForm = document.getElementById("newToDoForm"),
        toDoItemUL = document.getElementById("toDoItemUL");


newToDoItem.value = ""; // vider le contenu d'input après soft refresh
newToDoItem.focus(); // pour avoir le cursor déjà dans l'input


// empeche l'envoi du Form et appel fonction pour ajouter item
newToDoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addNewToDoItem();
})
// création d'un tableaux vide pour stocké les ToDoItems
let toDoItemList = [];
// récuperation des Items
let toDoItems = localStorage.getItem("toDoItems");

if (!toDoItems) {
    // si pas ToDoItem stocké
    toDoMessage.textContent = "Bravo, vous n'avez rien à faire!";
}else {
    toDoItemList = JSON.parse(toDoItems);
    let chose;
    // passer au singulier ou au pluriel selon le nombre ToDoItems
    toDoItemList.length === 1 ? chose = "chose" : chose = "choses"
    toDoMessage.textContent = "Vous avez "+toDoItemList.length+" "+chose+" à faire!";
    // appel de fonction pour afficher les ToDoItems
    createToDoList(toDoItemList);
}

function createToDoList(itemArray) {
    const deleteImage = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orangered" class="w-5 h-5"><path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd"></path></svg>`
    // pour chaque ToDoItem :
    for (let item of itemArray) {
        // création d'un <li> et ajoute texte
       let addLI = document.createElement("li");
       addLI.textContent = item;
       // création d'un bouton pour chaque <li>
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("removeButton");

        // écouter pour suppression d'un ToDoItem
        deleteButton.addEventListener("click", removeListItem);
        deleteButton.innerHTML = deleteImage;
        // ajoute des <button> aux <li> et les <li> au <ul>
        addLI.appendChild(deleteButton);
       toDoItemUL.appendChild(addLI);
    }
}

function addNewToDoItem() {
    if(newToDoItem.value.trim().length > 0){
    // ajoute nouveau ToDoItem au tableaux
    toDoItemList.push(newToDoItem.value);
    // utilisation de JSON pour preparer la liste (car localStorage ne peut contenir que les chaines de caractères)
    let addItem = JSON.stringify(toDoItemList);
    localStorage.setItem("toDoItems", addItem);
    window.location.reload();
    }else {
        alert("Stop trying to add empty strings, Kevin :-p");
    }
}

function removeListItem() {
    // pour supprimer l'element, retrouve position dans tableaux avec comparison du text dans parent element
    let itemToRemove = this.parentElement.textContent; // this = bouton cliqué et parent, alors est le <li>
    toDoItemList.splice(toDoItemList.indexOf(itemToRemove), 1);

    if (toDoItemList.length === 0) {
        // si plus ToDoItems déstruction de toDoItems afin de permettre l'affichage du bon message
        // sans ceci, il aura toujours des [] vides dans toDoItems
        localStorage.removeItem("toDoItems");
    }else {
        // préparation des toDoItems pour injéction dans localStorage
    let deletedItemArray = JSON.stringify(toDoItemList);
        // remplacer toDoItems existant avec les nouveaux infos
    localStorage.setItem("toDoItems", deletedItemArray);
        // et supprime <li> du DOM
    this.parentElement.remove();
    }
    window.location.reload();

}