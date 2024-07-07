
const containerClock = document.getElementById('containerClock');

function addClockToElement(myClock) {
    let clock = document.createElement('h2');
    clock.className = "bg-gradient-to-r from-red-600 via-green-800 to-indigo-600 inline-block text-transparent bg-clip-text text-5xl"

    setInterval(updateTime, 100);

    function updateTime() {
        let myTime = Date.now();
        let offset = -(new Date().getTimezoneOffset()) * 60_000;
        myTime += offset;


        let seconds       = Math.floor(myTime/1000) % 60;
        let minutes       = Math.floor(myTime/1000 / 60) % 60;
        let hours         = Math.floor(myTime/1000 / 3600) % 24;


        let secondsPadded = seconds.toString().padStart(2, '0');
        let minutesPadded = minutes.toString().padStart(2, '0');
        let hoursPadded   = hours.toString().padStart(2, '0');


        clock.textContent = `${hoursPadded}:${minutesPadded}:${secondsPadded}`;
    }

    myClock.insertAdjacentElement('beforeend', clock);
}



addClockToElement(containerClock);