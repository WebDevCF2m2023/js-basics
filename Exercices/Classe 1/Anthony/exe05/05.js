
let bouton1 = document.getElementById("btn1");
let bouton2 = document.getElementById("btn2");


function changerCouleur() {
    let divColor = document.getElementById("changeDiv");
    divColor.style.color = "purple";
  }
  bouton1.addEventListener("click",changerCouleur);




  function randomColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    let divRandom = document.getElementById("blocRandom");
    divRandom.style.backgroundColor = "#" + randomColor;
  }

  bouton2.addEventListener("click",randomColor);