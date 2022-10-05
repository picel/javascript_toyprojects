let isHex = true;
let isSimple = false;
let color1 = "#000000";
let color2 = "#000000";

function changeColor() {
    /** get random color from colors map */
    color1 = colors[Object.keys(colors)[Math.floor(Math.random() * Object.keys(colors).length)]];
    color2 = colors[Object.keys(colors)[Math.floor(Math.random() * Object.keys(colors).length)]];
    while (color1 == color2) {
        color2 = colors[Object.keys(colors)[Math.floor(Math.random() * Object.keys(colors).length)]];
    }
    
    let bg1 = document.getElementById("bg1");
    let bg2 = document.getElementById("bg2");

    bg1.style.backgroundColor = color1;
    bg2.style.backgroundColor = color2;

    if (isHex) {
        document.getElementsByClassName("colorHex")[0].innerHTML = color1;
        document.getElementsByClassName("colorHex")[1].innerHTML = color2;
    } else {
        document.getElementsByClassName("colorHex")[0].innerHTML = Object.keys(colors).find(key => colors[key] === color1);
        document.getElementsByClassName("colorHex")[1].innerHTML = Object.keys(colors).find(key => colors[key] === color2);
    }
}

function changeButtonColor(target, nonTarget) {
  target[0].style.backgroundColor = "red";
  target[0].style.color = "white";
  nonTarget[0].style.backgroundColor = "white";
  nonTarget[0].style.color = "black";
}

function viewHex() {
    isHex = true;
    isSimple = false;
    let colorHex1 = document.getElementsByClassName("colorHex")[0];
    let colorHex2 = document.getElementsByClassName("colorHex")[1];
    changeButtonColor(document.getElementsByClassName("hexButton"), document.getElementsByClassName("simpleButton"));
    colorHex1.innerHTML = rgbToHex(document.getElementById("bg1").style.backgroundColor);
    colorHex2.innerHTML = rgbToHex(document.getElementById("bg2").style.backgroundColor);
}

function viewSimple() {
    isHex = false;
    isSimple = true;
    changeButtonColor(document.getElementsByClassName("simpleButton"), document.getElementsByClassName("hexButton"));
    let colorHex1 = document.getElementsByClassName("colorHex")[0];
    let colorHex2 = document.getElementsByClassName("colorHex")[1];
    colorHex1.innerHTML = Object.keys(colors).find(key => colors[key] === rgbToHex(document.getElementById("bg1").style.backgroundColor));
    colorHex2.innerHTML = Object.keys(colors).find(key => colors[key] === rgbToHex(document.getElementById("bg2").style.backgroundColor));
}

function rgbToHex(rgb) {
  if (rgb == "") return "#000000"; 
  rgb = rgb.substring(4, rgb.length - 1)
      .replace(/ /g, '')
      .split(',');
  let r = parseInt(rgb[0], 10).toString(16);
  let g = parseInt(rgb[1], 10).toString(16);
  let b = parseInt(rgb[2], 10).toString(16);
  if (r.length === 1)
      r = "0" + r;
  if (g.length === 1)
      g = "0" + g;
  if (b.length === 1)
      b = "0" + b;
  return "#" + r + g + b;
}

document.getElementsByClassName("clickButton")[0].addEventListener("click", changeColor);

document.getElementsByClassName("hexButton")[0].addEventListener("click", viewHex);

document.getElementsByClassName("simpleButton")[0].addEventListener("click", viewSimple);