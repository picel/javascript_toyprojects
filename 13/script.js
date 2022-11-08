function randomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function randomSentence() {
    let sentence = "";
    for (let i = 0; i < 10; i++) {
        sentence += randomWord() + " ";
    }
    return sentence.slice(0, -1);
}

function randomParagraph() {
    let paragraph = "";
    for (let i = 0; i < 5; i++) {
        paragraph += randomSentence() + ". ";
    }
    return paragraph;
}

function lorem() {
    let lorem = "";
    let cnt = document.getElementById("cnt").value;
    cnt = parseInt(cnt);
    for (let i = 0; i < cnt; i++) {
        lorem += randomParagraph() + "<br><br>";
    }
    lorem = lorem.slice(0, -8);
    let target = document.getElementById("output");
    target.innerHTML = lorem;
    target.hidden = false;
}

document.getElementById("generate").addEventListener("click", lorem);