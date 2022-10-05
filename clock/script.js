function init() {
    let date = new Date();
    document.getElementById('hr').innerHTML = formatTime(date.getHours());
    document.getElementById('min').innerHTML = formatTime(date.getMinutes());
    document.getElementById('sec').innerHTML = formatTime(date.getSeconds());
    
    setInterval(timeCheck, 1000);
}

function timeCheck() {
    data = new Date();
    document.getElementById('hr').innerHTML = formatTime(data.getHours());
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

init();