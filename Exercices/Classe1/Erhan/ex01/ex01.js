function getDate(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    const time = hour + ":" + minute + ":" + seconds;
    document.getElementById("hours").innerHTML = time;   
 }