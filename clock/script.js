let wallpaperSelected = false;
let clockSelected = false;
let is12Hour = false;

function init() {
    let date = new Date();
    document.getElementById('hr').innerHTML = formatTime(date.getHours());
    document.getElementById('min').innerHTML = formatTime(date.getMinutes());
    document.getElementById('sec').innerHTML = formatTime(date.getSeconds());
    
    setInterval(timeCheck, 1000);
}

function timeCheck() {
    data = new Date();
    if (is12Hour) {
        document.getElementById('hr').innerHTML = formatTime(data.getHours() % 12);
    } else {
        document.getElementById('hr').innerHTML = formatTime(data.getHours());
    }
    document.getElementById('min').innerHTML = formatTime(data.getMinutes());
    document.getElementById('sec').innerHTML = formatTime(data.getSeconds());
}

function formatTime(time) {
    if (time < 10) {
        return '0' + time;
    } else {
        return time;
    }
}

function wallpaperPicker() {
    if (!(!document.getElementsByClassName('colorPickerBTN')[0].hasAttribute('hidden') && clockSelected)) {
        document.getElementsByClassName('colorPickerBTN')[0].toggleAttribute('hidden');
    }
    wallpaperSelected = true;
    clockSelected = false;
    document.getElementById('nameOfButton').innerHTML = 'Wallpaper';
}

function clockPicker() {
    if (!(!document.getElementsByClassName('colorPickerBTN')[0].hasAttribute('hidden') && wallpaperSelected)) {
        document.getElementsByClassName('colorPickerBTN')[0].toggleAttribute('hidden');
    }
    clockSelected = true;
    wallpaperSelected = false;
    document.getElementById('nameOfButton').innerHTML = 'Clock';
}

function redBTN() {
    if (wallpaperSelected) {
        document.body.style.background = 'red';
    } else if (clockSelected) {
        document.getElementsByClassName('clock')[0].style.color = 'red';
    }
}

function greenBTN() {
    if (wallpaperSelected) {
        document.body.style.background = 'green';
    } else if (clockSelected) {
        document.getElementsByClassName('clock')[0].style.color = 'green';
    }
}

function blueBTN() {
    if (wallpaperSelected) {
        document.body.style.background = 'blue';
    } else if (clockSelected) {
        document.getElementsByClassName('clock')[0].style.color = 'blue';
    }
}

function twelveHour() {
    is12Hour = true;
    document.getElementById('hr').innerHTML = formatTime(data.getHours() % 12);
    document.getElementById("ampm").innerHTML = data.getHours() >= 12 ? "PM" : "AM";
    document.getElementById("12").classList.remove("btn-secondary");
    document.getElementById("12").classList.add("btn-primary");
    document.getElementById("24").classList.remove("btn-primary");
    document.getElementById("24").classList.add("btn-secondary");
}

function twentyFourHour() {
    is12Hour = false;
    document.getElementById('hr').innerHTML = formatTime(data.getHours());
    document.getElementById("ampm").innerHTML = "";
    document.getElementById("12").classList.remove("btn-primary");
    document.getElementById("12").classList.add("btn-secondary");
    document.getElementById("24").classList.remove("btn-secondary");
    document.getElementById("24").classList.add("btn-primary");
}

init();

document.getElementById("12").addEventListener("click", twelveHour);
document.getElementById("24").addEventListener("click", twentyFourHour);
document.getElementById('wallpaperBTN').addEventListener('click', wallpaperPicker);
document.getElementById('clockBTN').addEventListener('click', clockPicker);
document.getElementById('redBTN').addEventListener('click', redBTN);
document.getElementById('blueBTN').addEventListener('click', blueBTN);
document.getElementById('greenBTN').addEventListener('click', greenBTN);