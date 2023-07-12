let stTime
let timerStart

function start() {
    if (!stTime) {
        stTime = new Date().getTime()
    }

    if (!timerStart) {
        timerStart = setInterval(timeCheck, 1)
    }
}

function stop() {
    clearInterval(timerStart)
    timerStart = null
}

function reset() {
    if (!timerStart) {
    stTime = null
        document.getElementById('millisec').innerHTML = '00'
        document.getElementById('sec').innerHTML = '00'
        document.getElementById('min').innerHTML = '000'
    }
}

function timeCheck() {
    let time = new Date().getTime() - stTime
    let ms = Math.floor(time % 1000)
    let s = Math.floor(time / 1000) % 60
    let m = Math.floor(time / 60000) % 60

    document.getElementById('millisec').innerHTML = formatTime(ms)
    document.getElementById('sec').innerHTML = formatTime(s)
    document.getElementById('min').innerHTML = formatTime(m)
}

function formatTime(time) {
    if (time < 10) {
        return '0' + time
    } else {
        return time
    }
}

function msFormat(time) {
    let res = time
    if (time < 100) {
        res = '0' + time
    }
    if (time < 10) {
        res = '0' + time
    }
    return res
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);