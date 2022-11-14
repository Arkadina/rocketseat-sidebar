const dayP = document.querySelector(".day p");
const hoursP = document.querySelector(".hours p");
const minutesP = document.querySelector(".minutes p");
const secondsP = document.querySelector(".seconds p");

var day = 0;
var hours = 23;
var minutes = 44;
var seconds = 1;
var countInterval = null;

function countdown() {
    countInterval = setInterval(setTime, 1000);
}

function setP() {
    dayP.innerText = day;
    hoursP.innerText = hours;
    minutesP.innerText = minutes;
    secondsP.innerText = seconds;
}

function setTime() {
    seconds--;
    if (seconds <= 0) {
        if (day == 0 && seconds == 0 && minutes == 0 && hours == 0) {
            clearInterval(countInterval);
        } else {
            seconds = 60;
            if (minutes > 0) {
                minutes--;
            }
        }
    }

    if (minutes <= 0) {
        if (hours > 0) {
            minutes = 60;
            hours--;
        }
    }

    if (hours <= 0) {
        if (day > 0) {
            hours = 24;
            day--;
        }
    }
    setP();
    console.log(day, hours, minutes, seconds);
}

setP();
countdown();
