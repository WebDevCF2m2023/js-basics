function addClocktoElement(myClock) {
    let clock = document.createElement('h1');
    updateTime();
    clock.style = `
        color: red;
        font-weight: bold;
    `;

    setInterval(updateTime, 1000);

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

    myClock.insertAdjacentElement('afterbegin', clock);
}
const containerClock = document.getElementById('containerClock');


addClocktoElement(containerClock);
