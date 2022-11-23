let images = document.querySelectorAll("img");
let index = 1;
let flag = 0;

function next() {
    images.forEach((image, idx) => {
        let curPos = image.style.transform;
        curPos = curPos.replace("translateX(", "");
        curPos = curPos.replace("px)", "");
        curPos = parseInt(curPos);
        if (idx == index) {
            flag = idx;
        }
        // animation transition
        let mvPerFrame;
        if (idx == index - 1 || (idx == images.length - 1 && index == 0)) {
            image.style.transform = "translateX(" + (curPos + 2000) + "px)";
        } else {
            mvPerFrame = -10;
            target = curPos - 1000;
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    image.style.transform = "translateX(" + (curPos + mvPerFrame) + "px)";
                    curPos += mvPerFrame;
                }, 10 * i);
            }
        }

    });
    index = flag + 1;
    if (index === images.length) {
        index = 0;
    }
}

function prev() {
    images.forEach((image, idx) => {
        let curPos = image.style.transform;
        curPos = curPos.replace("translateX(", "");
        curPos = curPos.replace("px)", "");
        curPos = parseInt(curPos);
        if (idx == index) {
            flag = idx;
        }
        if (idx == index + 1 || (idx == 0 && index == images.length - 1)) {
            image.style.transform = "translateX(" + (curPos - 2000) + "px)";
        } else {
            mvPerFrame = 10;
            target = curPos + 1000;
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    image.style.transform = "translateX(" + (curPos + mvPerFrame) + "px)";
                    curPos += mvPerFrame;
                }, 10 * i);
            }
        }
    });
    index = flag - 1;
    if (index === -1) {
        index = images.length - 1;
    }
}

document.getElementById("next").onclick = next;
document.getElementById("prev").onclick = prev;