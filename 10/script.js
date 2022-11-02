// get current scroll position
let scrollPosition = window.pageYOffset;
let appBar = document.getElementById('appBar');
let aPOS = document.querySelector("#a").offsetTop;
let bPOS = document.querySelector("#b").offsetTop;
let cPOS = document.querySelector("#c").offsetTop;
let dPOS = document.querySelector("#d").offsetTop;

let buttons = document.querySelectorAll('.appBar__nav');

buttons.forEach(function(button) {
});

window.onscroll = function() {
    // get current scroll position
    scrollPosition = window.pageYOffset;
    if (scrollPosition > 0) {
        appBar.classList.remove('hidden');
    } else {
        appBar.classList.add('hidden');
    }
}