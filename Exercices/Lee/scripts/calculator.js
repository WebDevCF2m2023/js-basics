const calcWindow = document.getElementById("calcWindow");
const button = document.querySelectorAll('button');
const classForButton = `bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded`

for (let i = 0;i < button.length; i++) {
    button[i].className = classForButton;
}
// one function to clear them all
function clearResult() {
    calcWindow.value = "";
}
// one function to bind them
function appendCharacter(btnPressed) {
    calcWindow.value += btnPressed;
}
// one function to bring them all, and in the darkness, eval() them
function calculateResult() {
    let result =
        calcWindow.value;
    try {
        result = eval(result);
        calcWindow.value = result;
    } catch (error) {
        calcWindow.value = "Something went wrong";
    }
}
// afin de reduire le code au plus petit possible, j'ai utiliser le fonction eval()
// if faut jamais utiliser ce fonction car il est très ouvert aux attaques
// quand j'ai le temps, je ferai un calc sans utilisant eval()