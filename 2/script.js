let currentNum

function getNumber() {
    currentNum = parseInt(document.getElementById("counter").innerHTML)
}

function increment() {
    currentNum++
    document.getElementById("counter").innerHTML = currentNum
    colorDecision()
}

function decrement() {
    currentNum--
    document.getElementById("counter").innerHTML = currentNum
    colorDecision()
}

function reset() {
    document.getElementById("counter").innerHTML = 0
    colorDecision()
}

function colorDecision() {
    getNumber()
    if (currentNum > 0) {
        document.getElementById("counter").style.color = "green"
    } else if (currentNum < 0) {
        document.getElementById("counter").style.color = "red"
    } else {
        document.getElementById("counter").style.color = "black"
    }
}

getNumber()

document.getElementById("increment").addEventListener("click", increment)
document.getElementById("decrement").addEventListener("click", decrement)
document.getElementById("reset").addEventListener("click", reset)