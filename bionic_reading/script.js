function capitalize() {
    let text = document.getElementById("input").value;
    let result = "";
    // split the text into paragraphs
    let paragraph = text.split("\n");
    console.log(paragraph);
    for (let i = 0; i < paragraph.length; i++) {
        let words = paragraph[i].split(" ");
        for (let j = 0; j < words.length; j++) {
            let word = words[j];
            if (word.length < 2) {
                result += word + " ";
                continue;
            } else if (word.length == 2) {
                let firstLetter = word.charAt(0);
                firstLetter = "<span class='accent'>" + firstLetter + "</span>";
                result += firstLetter + word.charAt(1) + " ";
            } else {
                let firstLetter = word.charAt(0);
                let secondLetter = word.charAt(1);
                let rest = word.slice(2);
                // make it red
                firstLetter = "<span class='accent'>" + firstLetter + "</span>";
                secondLetter = "<span class='accent'>" + secondLetter + "</span>";
                result += firstLetter + secondLetter + rest + " ";
            }
        }
        result += "<br>";
    }
    console.log(result);
    let target = document.getElementById("output");
    target.innerHTML = result;
    target.hidden = false;
}

document.getElementById("caplitalize").addEventListener("click", capitalize);