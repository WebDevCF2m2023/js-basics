const consoleHolder = document.getElementById("consoleHolder"),
      consoleButton = document.getElementById("consoleButton"),
      showConsoles  = document.getElementById("showConsoles");

      let i = 0;

let consoles = [
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

consoleHolder.textContent = consoles;
let count = 0;

consoleButton.addEventListener("click", consoleChange);


function consoleChange () {
    console.log(count);
    switch (count) {
        case 0 :
        alert(consoles[7]);
        break;
        case 1 :
        let snip = consoles.pop();
            snip = consoles.shift();
            consoleHolder.textContent = consoles;
        break;
        case 2 :

            listThemAll();
        break
        case 3 :
            consoles = [
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
            consoleHolder.textContent = consoles;
            showConsoles.textContent = "";
            i = 0;
            alert('Button Reset');
            break;
    }
    count > 2 ? count = 0 : count++;
}


function listThemAll() {
    // console.log(consoles.length);
        setTimeout(() => {
            showConsoles.textContent = consoles[i];
            i++;
            if(i < consoles.length) {
                listThemAll();
            }
        }, 500);
     
    }

