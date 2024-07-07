const windowHolder  = document.querySelector(".windowHolder"),
      portalWindow  = document.querySelector('.portalWindow'),
      countdown= document.getElementById('countdown'),
      carouselControl= document.getElementById("carouselControl"),
      carouselAdvance= document.getElementById("carouselAdvance"),
      imageArray = ['url("images/MoustacheGlasses.svg"',
                            'url("images/PurpleDevil.svg"',
                            'url("images/StarsEyes.svg"',
                            'url("images/GlassesSmirk.svg"',
                            'url("images/MoneySmile.svg"',
                            'url("images/TongueSmile.svg"',
                            'url("images/WinkSmile.svg"',
                            'url("images/TongueSquint.svg"' ];
let count = 0,
    carStop = true,
    spinInterval,
    countdownTimer;
    windowHolder.addEventListener("click", makeItSpin);
portalWindow.style.backgroundImage = imageArray[0];
carouselControl.addEventListener("click", stopStartCarousel)
carouselAdvance.addEventListener("click", advanceCarousel);

function makeItSpin() {
    let i = 2;
    countdown.textContent = "3";

    countdownTimer =setInterval( () => {
        if (i > 0){
            countdown.textContent = i.toString();
            i--;
        }else {
            countdown.textContent = "";
            clearInterval(countdownTimer);
        }
    },1000);


    spinInterval= setInterval(() => {

    count++;
    carouselAdvance.disabled = true;
    windowHolder.classList.toggle("spinIt");
    setTimeout(function () {
        portalWindow.style.backgroundImage = imageArray[count % imageArray.length]
        carouselAdvance.disabled = false;
    }, 680);
    }, 3000);
}

function stopStartCarousel () {
    console.log(carStop);
    if (carStop) {
        clearInterval(spinInterval);
        clearInterval(countdownTimer);
        carStop = false;
        carouselControl.textContent = 'Activer';
    } else {
        makeItSpin();
        carStop = true;
        carouselControl.textContent = 'Désactiver';
    }

}

function advanceCarousel() {
    countdown.textContent = "";
    carStop = true;
    stopStartCarousel();
    count++;
    windowHolder.classList.toggle("spinIt");
    setTimeout(function () {
        portalWindow.style.backgroundImage = imageArray[count % imageArray.length]
    }, 680);

}

makeItSpin();


