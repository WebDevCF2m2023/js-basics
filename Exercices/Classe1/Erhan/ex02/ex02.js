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

function liste(){
    let elem = consoles[7];
    document.getElementById("items").innerHTML = elem; 
}

function remove(){
    let removeElem = consoles.splice(1, 10);
    document.getElementById("remove").innerHTML = removeElem; 
}


