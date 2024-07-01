// mes consts
const classButton = document.getElementById("classButton"),
      classTarget = document.querySelectorAll(".target");

let theTarget       = null; 

classButton.addEventListener("click", getTextAndTarget);

function getTextAndTarget() {
    classButton.disabled = true;
for (let i = 0; i < classTarget.length; i++) {
    targetText = classTarget[i].textContent;
    makeChanges(targetText, classTarget[i]);
}
    classButton.disabled = false;
}

function makeChanges(text, target) {
    let textArray = text.split(""),      
    theText = ["O", "w", "n", "e", "d"];  

    let popIntervalId = setInterval(() => {
        if(textArray.length) {             
            textArray.pop();               
            target.textContent = textArray.join(""); 
        }else {
            clearInterval(popIntervalId);       
            let pushIntervalId = setInterval(() => {    
                if(theText.length) {
                    textSnip = theText.shift();         
                    target.textContent += textSnip;  
                } else {

                    clearInterval(pushIntervalId);  
                }       
            }, 150); 
        }

    }, 100); 
}
