let buttons = document.querySelectorAll('.btn');
let display = document.querySelector('#display');
let info = document.querySelector('#info');

buttons.forEach(function (button) {
    button.addEventListener('click', calculate);
});

function calculate(event) {
    let clickedId = event.target.id;
    let cpu = cpuSel();
    let result;

    if (clickedId == cpu) {
        result = "Draw";
        display.style.color = "black";
    } else if (clickedId == 0 && cpu == 1) {
        result = "You Win";
        display.style.color = "green";
    } else if (clickedId == 0 && cpu == 2) {
        result = "You Lose";
        display.style.color = "red";
    } else if (clickedId == 1 && cpu == 0) {
        result = "You Lose";
        display.style.color = "red";
    } else if (clickedId == 1 && cpu == 2) {
        result = "You Win";
        display.style.color = "green";
    } else if (clickedId == 2 && cpu == 0) {
        result = "You Win";
        display.style.color = "green";
    } else if (clickedId == 2 && cpu == 1) {
        result = "You Lose";
        display.style.color = "red";
    } else {
        result = "Something went wrong";
        display.style.color = "black";
    }

    display.innerHTML = result;
    info.innerHTML = "You chose " + buttons[clickedId].innerHTML + " and the computer chose " + buttons[cpu].innerHTML;
}

function cpuSel() {
    let cpu = Math.floor(Math.random() * 3);
    return cpu;
}