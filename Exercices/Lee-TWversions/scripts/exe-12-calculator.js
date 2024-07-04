const calcWindow = document.getElementById("calcWindow");
const button = document.querySelectorAll('button');
const classForButton = `bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded`;
const symButton = document.querySelectorAll('.symButton');
const symButtons = document.querySelectorAll('.symButtons');
const symArray = ["/", "*", "-", "+"];
for (let i = 0;i < button.length; i++) {
    button[i].className = classForButton;
}
for (let i = 0; i < symButtons.length; i++) {
    symButtons[i].disabled = true;
}
const classForLink = `bg-gradient-to-b w-max mx-auto my-12 text-blue-500 font-semibold from-slate-50 to-blue-100 px-10 py-3 rounded-2xl shadow-blue-600 shadow-xl border-b-4 hover border-b border-blue-200 hover:shadow-sm transition-all duration-500`;
nextPage.className = classForLink;

// one function to clear them all
function clearResult() {
    calcWindow.value = "";
}
// one function to bind them
function appendCharacter(btnPressed) {
    // petit ajoute pour empecher des erreurs
    if (symArray.includes(btnPressed)) {
        console.log(btnPressed);
        for (let i = 0; i < symButton.length; i++) {
            symButton[i].disabled = true;
        }
    }else {
        for (let i = 0; i < symButton.length; i++) {
            symButton[i].disabled = false;
        }
    }
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

