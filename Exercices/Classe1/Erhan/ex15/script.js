let items = [];

const itemsDiv = document.getElementById("items")
const input = document.getElementById("itemInput")
const storageKey = "items"

function renderItems() {
    itemsDiv.innerHTML = null; 

    //The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.   
    for (const [idx, item] of Object.entries(items)){
        const container = document.createElement("div")//We create new div container with DOM.
        container.style.marginBottom = "10px"

        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.marginRight = "15vw"
        text.textContent = item;

        const button = document.createElement("button")
        button.textContent = "Delete";
        button.style.border = "2px solid lightgrey";
        button.onclick = () => removeItem(idx) // ()=> call this function in another function. Otherwise it is gonna call the removeItem function automatically.

        container.appendChild(text)
        container.appendChild(button)
        itemsDiv.appendChild(container)
    }
}

function loadItems() {
    const oldItems = localStorage.getItem(storageKey)
    if(oldItems) items = JSON.parse(oldItems) // We are converting the oldItems to a JS object which is an array here
    renderItems()
}

function saveItems() {
    const stringItems = JSON.stringify(items); //We are converting the items to a string
    localStorage.setItem(storageKey, stringItems)// storageKey = items
}

function addItem() {
    const value = input.value;
    if(!value){
        alert("You cannot add an empty item")
        return
    }
    
    items.push(value)
    renderItems()
    alert("Added to your list")
    input.value = ""
    saveItems()
}

function removeItem(idx) {
    items.splice(idx, 1) // The splice() method adds and/or removes array elements.
    renderItems()
    saveItems()
}

document.addEventListener("DOMContentLoaded", loadItems)