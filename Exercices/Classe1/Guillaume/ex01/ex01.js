function changeText(){
    const h1 = document.getElementById('text');
    const time = new Date();
    document.getElementById('date-time').innerHTML = time;
    if (time.getHours() < 12) {
        h1.innerHTML = "Good Morning";
    }else if (time.getHours() < 18){
        h1.innerHTML ="Good Afternoon";
    }else{
        h1.innerHTML = "Good Evening";
    }
}


function formatDate(time) {
    const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    const dayName = days[Date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${dayName} ${day} ${month} ${year} ${hours} ${minutes}`;
}

 function updateDateTime() {
    const now = new Date();
    document.getElementById('text').textContent = getGreeting();
    document.getElementById('date-time').textContent = formatDate(now);
 }

setInterval(updateDateTime, 1000);
updateDateTime();