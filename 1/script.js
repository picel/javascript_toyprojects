function changeColor() {
    // create random color
    var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // change background color
    document.body.style.backgroundColor = color;

    var colorIndicator = document.getElementsByClassName("colorIndicator");
    var colorHex = document.getElementsByClassName("colorHex");
    var button = document.getElementsByClassName("clickButton");

    var reversedColor = getReversedColor(color);

    // change color of color indicator
    colorIndicator[0].style.backgroundColor = reversedColor;
    colorIndicator[0].style.color = color;

    // change color of button
    button[0].style.backgroundColor = reversedColor;
    button[0].style.color = color;

    colorHex[0].innerHTML = color;
}

function getReversedColor(color) {
    // remove # from color
    var color = color.substring(1);
    // convert to decimal
    var color = parseInt(color, 16);
    // invert color
    var color = 0xFFFFFF ^ color;
    // convert to hex
    var color = color.toString(16);
    // add # to color
    var color = '#' + color;
    return color;
}

// changecolor on click
document.getElementsByClassName("clickButton")[0].addEventListener("click", changeColor);