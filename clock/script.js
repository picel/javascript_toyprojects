let hour = 0;
let minute = 0;
let second = 0;

function init() {
    let date = new Date();
    document.getElementById('hr').innerHTML = formatTime(date.getHours());
    document.getElementById('min').innerHTML = formatTime(date.getMinutes());
    document.getElementById('sec').innerHTML = formatTime(date.getSeconds());
    
    setInterval(timeCheck, 1000);
}

function timeCheck() {
    data = new Date();
    if (data.getSeconds() != second) {
        second = data.getSeconds();
        document.getElementById('sec').innerHTML = formatTime(second);
    }
    if (data.getMinutes() != minute) {
        minute = data.getMinutes();
        document.getElementById('min').innerHTML = formatTime(minute);
    }
    if (data.getHours() != hour) {
        hour = data.getHours();
        document.getElementById('hr').innerHTML = formatTime(hour);
    }
}

function formatTime(time) {
    if (time < 10) {
        return '0' + time;
    } else {
        return time;
    }
}

init();