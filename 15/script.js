let images = document.querySelectorAll("img");

function next() {
    images.forEach((image, idx) => {
        let curPos = image.style.transform;
        curPos = curPos.replace("translateX(", "");
        curPos = curPos.replace("px)", "");
        curPos = parseInt(curPos);
        if (idx == 0) {
            image.style.transform = "translateX(" + (curPos + 2000) + "px)";
        } else {
            image.style.transform = "translateX(" + (curPos - 1000) + "px)";
        }
    });
}

function prev() {
    images.forEach((image, idx) => {
        let curPos = image.style.transform;
        curPos = curPos.replace("translateX(", "");
        curPos = curPos.replace("px)", "");
        curPos = parseInt(curPos);
        image.style.transform = "translateX(" + (curPos + 1000) + "px)";
    });
}

document.getElementById("next").onclick = next;
document.getElementById("prev").onclick = prev;