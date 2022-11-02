// get current scroll position
let scrollPosition = window.pageYOffset;
let appBar = document.getElementById('appBar');
let aPOS = document.querySelector("#a").offsetTop;
let bPOS = document.querySelector("#b").offsetTop;
let cPOS = document.querySelector("#c").offsetTop;
let dPOS = document.querySelector("#d").offsetTop;

let buttons = document.querySelectorAll('.appBar__nav');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        if (button.innerHTML == "a") {
            window.scrollTo(0, aPOS);
        } else if (button.innerHTML == "b") {
            window.scrollTo(0, bPOS);
        } else if (button.innerHTML == "c") {
            window.scrollTo(0, cPOS);
        } else if (button.innerHTML == "d") {
            window.scrollTo(0, dPOS);
        }
    });
});

window.onscroll = function() {
    // get current scroll position
    scrollPosition = window.pageYOffset;
    if (scrollPosition > 0) {
        appBar.classList.remove('hidden');
        if (scrollPosition >= aPOS && scrollPosition < bPOS) {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('appBar__selected');
            }
            buttons[0].classList.add('appBar__selected');
        } else if (scrollPosition >= bPOS && scrollPosition < cPOS) {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('appBar__selected');
            }
            buttons[1].classList.add('appBar__selected');
        } else if (scrollPosition >= cPOS && scrollPosition < dPOS) {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('appBar__selected');
            }
            buttons[2].classList.add('appBar__selected');
        } else if (scrollPosition >= dPOS) {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('appBar__selected');
            }
            buttons[3].classList.add('appBar__selected');
        }
    } else {
        appBar.classList.add('hidden');
    }
}