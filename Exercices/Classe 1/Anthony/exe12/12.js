
let currentDisplay = "0";
let resultDisplay=false;

function appendToDisplay(value) {
  if (currentDisplay === "0" || resultDisplay) {
    currentDisplay = value;
  } else {
    currentDisplay += value;
  }
  resultDisplay=false;
  updateDisplay();
}

function updateDisplay() {
    let affichage = document.getElementById("affichage");
  affichage.textContent = currentDisplay;
  
}

function updateCalcDisplay() {

    let resultat = document.getElementById("result");
  resultat.textContent = currentDisplay;
  
}

function calculateResult() {
  try {
    const result = eval(currentDisplay);
    currentDisplay += "\n"+ result.toString();
    updateCalcDisplay();
  } catch (error) {
    currentDisplay += "\nError";
    updateCalcDisplay();
  }
  resultDisplay=true;
}

function clearLastElement() {
  currentDisplay = currentDisplay.slice(0, -1);
  if (currentDisplay === "") {
    currentDisplay = "0";
  }
  updateDisplay();
}

function clearDisplay() {
  currentDisplay = "0";
  updateDisplay();
}
