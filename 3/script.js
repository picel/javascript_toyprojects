let index = 0;

function getData(idx) {
    let data = reviews[idx];

    document.getElementById("profile").src = data.img;
    document.getElementById("name").innerHTML = data.name;
    document.getElementById("job").innerHTML = data.job;
    document.getElementById("review").innerHTML = data.text;
}

function next() {
    index++;
    if (index > reviews.length - 1) {
        index = 0;
    }
    getData(index);
    console.log(index);
}

function prev() {
    index--;
    if (index < 0) {
        index = reviews.length - 1;
    }
    getData(index);
    console.log(index);
}

function random() {
    getData(Math.floor(Math.random() * reviews.length));
}

document.getElementById("nextBtn").addEventListener("click", next);
document.getElementById("prevBtn").addEventListener("click", prev);
document.getElementById("randomBtn").addEventListener("click", random);


getData(index);