let challengePos = document.querySelector("#challenge").offsetTop;
let vanillaJSPos = document.querySelector("#vanillaJS").offsetTop;

function toHome() {
    window.scrollTo({top: 0, behavior: "smooth"});
}

function toChallenge() {
    window.scrollTo({top: challengePos, behavior: "smooth"});
}

function toVanillaJS() {
    window.scrollTo({top: vanillaJSPos, behavior: "smooth"});
}

document.getElementById("toHome").addEventListener("click", toHome);
document.getElementById("toChallenge").addEventListener("click", toChallenge);
document.getElementById("toVanillaJS").addEventListener("click", toVanillaJS);
document.getElementById("go-top").addEventListener("click", toHome);