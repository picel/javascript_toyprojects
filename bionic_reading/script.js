function capitalize() {
    var text = document.getElementById("input").value;
    var words = text.split(" ");
    var result = "";
    
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.length < 2) {
            result += word + " ";
            continue;
        } else if (word.length == 2) {
            var firstLetter = word.charAt(0);
            firstLetter = "<span class='accent'>" + firstLetter + "</span>";
            result += firstLetter + word.charAt(1) + " ";
        } else {
            var firstLetter = word.charAt(0);
            var secondLetter = word.charAt(1);
            var rest = word.slice(2);
            // make it red
            firstLetter = "<span class='accent'>" + firstLetter + "</span>";
            secondLetter = "<span class='accent'>" + secondLetter + "</span>";
            result += firstLetter + secondLetter + rest + " ";
        }
    }
    let target = document.getElementById("output");
    target.innerHTML = result;
    target.hidden = false;
}

document.getElementById("caplitalize").addEventListener("click", capitalize);