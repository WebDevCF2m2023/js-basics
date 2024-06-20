// J'ai trop vite lu les consignes pour celui-ci et j'ai vraiment cru tu voulais un horloge afficher comme un h1 (sans les seconds)

// Comme d'hab, déclarations des const
const containerClock = document.getElementById('containerClock');

function addClocktoElement(myClock) {
    // Afin de m'amuser, j'utilise JS pour placer mon h2
    let clock = document.createElement('h2');
    // et pour donner le css
    clock.style = `
        color: green;
        font-weight: bold;
    `;

    setInterval(updateTime, 1000); // en géneral, je préfère de mettre un clearInterval pour chaque setInterval mais car ici on parle d'un horloge, ça va :-)

    function updateTime() {
        let myTime = Date.now(); // récupere l'heure actuelle
        let offset = -(new Date().getTimezoneOffset()) * 60_000; // création du offset car nous somme pas dans le même timezone que UnixTimestamp 
        myTime += offset; // corréction de l'heure 

        // calculation de s,m,h en utilant modular (très similar que le calcul j'ai utiliser pour te dire que 20/5/89 est un samedi --- bref : j'adore le mathematiques)
        let seconds       = Math.floor(myTime/1000) % 60;
        let minutes       = Math.floor(myTime/1000 / 60) % 60;
        let hours         = Math.floor(myTime/1000 / 3600) % 24;

       // assurer que les chiffres sont bien afficher ("04" au lieu de "4", etc) 
        let secondsPadded = seconds.toString().padStart(2, '0');
        let minutesPadded = minutes.toString().padStart(2, '0');
        let hoursPadded   = hours.toString().padStart(2, '0');

        // aaffiche l'heure
        clock.textContent = `${hoursPadded}:${minutesPadded}:${secondsPadded}`;
    }
    // n'oublie pas de mettre l'horloge dans notre h2
    myClock.insertAdjacentElement('beforeend', clock);
}


// et finalement mettre tout dans le container
addClocktoElement(containerClock);
