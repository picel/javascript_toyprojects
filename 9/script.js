var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let btn = document.getElementById('toggleBtn');

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '1080',
        width: '1920',
        videoId: '5-sfG8BV8wU',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}

btn.addEventListener("click", function() {
    if (player.getPlayerState() == 1) {
        player.pauseVideo();
        btn.innerHTML = "Play";
        btn.classList.remove("btn-secondary");
        btn.classList.add("btn-success");
    } else {
        player.playVideo();
        btn.innerHTML = "Pause";
        btn.classList.remove("btn-success");
        btn.classList.add("btn-secondary");
    }
});