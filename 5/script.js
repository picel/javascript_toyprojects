function start() {
    // check hamburger id has slideOut class
    if (document.getElementById("hamburger").classList.contains("slideOut") || document.getElementById("hamburger").classList.contains("slideIn")) {
        document.getElementById("hamburger").classList.toggle("slideIn");
        document.getElementById("hamburger").classList.toggle("slideOut");
    } else {
        document.getElementById("hamburger").classList.add("slideIn");
    }
}

document.getElementById('appBar__menu').addEventListener('click', start);
document.getElementById('closeButton').addEventListener('click', start);