const hrs = document.getElementById('horas');
const min = document.getElementById('minutos');
const sec = document.getElementById('segundos');


const TimeClock = setInterval(function Relogio(){
    let timeClock = new Date()
    let hours = timeClock.getHours()
    let minutes = timeClock.getMinutes()
    let seconds = timeClock.getSeconds()

    hrs.textContent = hours;
    min.textContent = minutes;
    sec.textContent = seconds;

    if (minutes < 10){
        min.innerHTML = '0' + minutes
    }
    if (seconds < 10){
        sec.innerHTML = '0' + seconds
    }
    if (hours < 10){
        hrs.innerHTML = '0' + hours
    }
    
});