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

let texte = document.querySelector("#texte");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

// bouton 1
btn1.addEventListener("click", change);
function change() {
    document.querySelector("#texte").textContent = consoles[7];
  }
 
// bouton 2
btn2.addEventListener("click", sliceArray);

function sliceArray(){
    let texteArray = document.querySelector("#texteArray");
 texteArray.textContent = consoles.slice(1,-1);
}

// bouton 3
btn3.addEventListener("click", showAll);
let i = 0;
function showAll(){
    setTimeout(() =>{
        document.getElementById("texteTime").textContent = consoles[i];
        i++;
        if(i<consoles.length){
            showAll();
        }
    },500)
}



