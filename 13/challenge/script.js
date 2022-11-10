let error = false;
let stopWords;

function randomChar() {
    const dummyTextChar = "abcdefghijklmnopqrstuvwxyz";
    let char = dummyTextChar.charAt(Math.floor(Math.random() * dummyTextChar.length));
    let startTime = new Date().getTime();
    while (stopWords.includes(char)) {
        char = dummyTextChar.charAt(Math.floor(Math.random() * dummyTextChar.length));
        if (new Date().getTime() - startTime > 1000) {
            error = true;
            break;
        }   
    }
    if (error) {
        return;
    } else {
        return char;
    }
}

function randomWord() {
    let word = "";
    let length = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < length; i++) {
        let char = randomChar();
        if (error) {
            return;
        } else {
            word += char;
        }
    }
    return word;
}

function randomSentence() {
    let sentence = "";
    for (let i = 0; i < 10; i++) {
        let word = randomWord();
        if (error) {
            return;
        } else {
            sentence += word + " ";
        }
    }
    return sentence.slice(0, -1);
}

function randomParagraph() {
    let paragraph = "";
    for (let i = 0; i < 5; i++) {
        let sentence = randomSentence();
        if (error) {
            return;
        } else {
            paragraph += sentence + ". ";
        }
    }
    return paragraph;
}

function lorem() {
    stopWords = document.getElementById("stop").value.split("");
    let target = document.getElementById("output");
    let lorem = "";
    let cnt = document.getElementById("cnt").value;
    cnt = parseInt(cnt);
    for (let i = 0; i < cnt; i++) {
        let paragraph = randomParagraph();
        if (error) {
            target.innerHTML = "Error: Too many stop words";
            target.hidden = false;
            return;
        } else {
            lorem += paragraph + "<br><br>";
        }
    }
    lorem = lorem.slice(0, -8);
    target.innerHTML = lorem;
    target.hidden = false;
}

document.getElementById("generate").addEventListener("click", lorem);