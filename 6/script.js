function activate() {
    document.getElementById("modal").classList.remove("hidden");
    // blur effect on background
    document.getElementById("background").classList.add("blurOn");
    document.getElementById("background").classList.remove("blurOff");
}

function deactivate() {
    document.getElementById("modal").classList.add("hidden");
    // remove blur effect on background
    document.getElementById("background").classList.remove("blurOn");
    document.getElementById("background").classList.add("blurOff");
}

document.getElementsByClassName("btn-primary")[0].addEventListener("click", activate);
document.getElementsByClassName("btn-warning")[0].addEventListener("click", deactivate);