// get current scroll position
let scrollPosition = window.pageYOffset;
let appBar = document.getElementById('appBar');
let aPOS = document.querySelector("#a").offsetTop;
let bPOS = document.querySelector("#b").offsetTop;
let cPOS = document.querySelector("#c").offsetTop;
let dPOS = document.querySelector("#player").offsetTop;
let goTop = document.getElementById('go-top');

let sections = document.querySelectorAll('.section');
let video = document.getElementById('player');

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let width = document.getElementsByClassName('section')[3].offsetWidth;
let height = document.getElementsByClassName('section')[3].offsetHeight;

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: height,
        width: width,
        videoId: '5-sfG8BV8wU',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}

function stopVideo() {
    player.stopVideo();
}

let observer = new IntersectionObserver((e)=>{
    if (e[0].isIntersecting) {
        sections[1].classList.add('rainbow');
    } else {
        sections[1].classList.remove('rainbow');
    }
});

let observer2 = new IntersectionObserver((e)=>{
    if (e[0].isIntersecting) {
        sections[2].classList.add('shake');
    } else {
        sections[2].classList.remove('shake');
    }
});

let observer3 = new IntersectionObserver((e)=>{
    if (e[0].isIntersecting) {
        player.playVideo();
    } else {
        player.pauseVideo();
    }
});


observer.observe(sections[1])
observer2.observe(sections[2])
observer3.observe(sections[3]);

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
        goTop.hidden = false;
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
        goTop.hidden = true;
    }
}

function toHome() {
    window.scrollTo({top: 0, behavior: "smooth"});
}

goTop.addEventListener("click", toHome);



