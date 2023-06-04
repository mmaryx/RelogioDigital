const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time() {
    let dateToday = new Date();

    let h = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (h < 10) 
        h = '0' + h;

    if (min < 10) 
        min = '0' + min;
    
    if (s < 10)
        s = '0' + s;

    hours.textContent = h;
    minutes.textContent = min;
    seconds.textContent = s;
})