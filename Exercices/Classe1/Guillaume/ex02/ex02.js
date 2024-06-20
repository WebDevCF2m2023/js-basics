const consoles = [
    "PlayStation",
    "Xbox",
    "Nintendo Switch",
    "Sega Genesis",
    "Atari 2600",
    "Super Nintendo",
    "Game Boy",
    "PlayStation 5",
    "Xbox Series X",
    "Nintendo 64",
    "Sega Dreamcast",
    "PlayStation 2"
];

function showEightElement(){
    document.querySelector("output").textContent = consoles[7];
}

function removeFirstAndLast(){
    const outputDiv = document.getElementById("output");
    const NewConsoles = consoles.slice(1, -1);
    outputDiv.textContent = NewConsoles.join(', ');
}

let i = 0;

function showAllElements() {
    setTimeout(() => {
     outputDiv.textContent = consoles[i];
     i++;
     if (i < consoles.length){
        showAllElements();
     }
    }, 500)
}