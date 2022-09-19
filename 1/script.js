let isHex = true;
let isSimple = false;
let buttonColor = "#FFFFFF";
let color = "#000000";

function changeColor() {
    /** get random color from colors map */
    color = colors[Object.keys(colors)[Math.floor(Math.random() * Object.keys(colors).length)]];

    buttonColor = getColorBrightness(color);

    // select indicator, button, colorHex text
    let colorIndicator = document.getElementsByClassName("colorIndicator");
    let button = document.getElementsByClassName("clickButton");
    let title = document.getElementsByClassName("appBar__title");
    let appBar = document.getElementsByClassName("appBar");

    // change background color
    document.body.style.backgroundColor = color;

    // change color of color indicator
    colorIndicator[0].style.backgroundColor = buttonColor;
    colorIndicator[0].style.color = color;

    // change color of button
    button[0].style.backgroundColor = buttonColor;
    button[0].style.color = color;

    title[0].style.color = color;
    appBar[0].style.backgroundColor = buttonColor;

    changeColorText(color);
}

function changeColorText(color) {
    if (isHex) {
        document.getElementsByClassName("colorHex")[0].innerHTML = color
    } else {
        /** show color keyword */
        document.getElementsByClassName("colorHex")[0].innerHTML = Object.keys(colors)[Object.values(colors).indexOf(color)];
    }
}

function getColorBrightness(color) {
    /** if bright, return black. if not, return white */
    let r = parseInt(color.substring(1, 3), 16);
    let g = parseInt(color.substring(3, 5), 16);
    let b = parseInt(color.substring(5, 7), 16);
    let brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 125 ? "#000000" : "#ffffff";
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
    changeButtonColor(document.getElementsByClassName("hexButton"), document.getElementsByClassName("simpleButton"));
    document.getElementsByClassName("colorHex")[0].innerHTML = rgbToHex(document.body.style.backgroundColor);
}

function viewSimple() {
    isHex = false;
    isSimple = true;
    changeButtonColor(document.getElementsByClassName("simpleButton"), document.getElementsByClassName("hexButton"));
    colorHex = rgbToHex(document.body.style.backgroundColor);
    document.getElementsByClassName("colorHex")[0].innerHTML = Object.keys(colors).find(key => colors[key] === colorHex);
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

// changecolor on click
document.getElementsByClassName("clickButton")[0].addEventListener("click", changeColor);

document.getElementsByClassName("hexButton")[0].addEventListener("click", viewHex);

document.getElementsByClassName("simpleButton")[0].addEventListener("click", viewSimple);




var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var stars = [], // Array that contains the stars
    FPS = 60, // Frames per second
    x = 100, // Number of stars
    mouse = {
      x: 0,
      y: 0
    };  // mouse location

// Push stars to array

for (var i = 0; i < x; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1 + 1,
    vx: Math.floor(Math.random() * 50) - 25,
    vy: Math.floor(Math.random() * 50) - 25
  });
}

// Draw the scene

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  
  ctx.globalCompositeOperation = "lighter";
  
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];
  
    ctx.fillStyle = buttonColor;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = buttonColor;
    ctx.stroke();
  }
  
  ctx.beginPath();
  for (var i = 0, x = stars.length; i < x; i++) {
    var starI = stars[i];
    ctx.moveTo(starI.x,starI.y); 
    if(distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
    for (var j = 0, x = stars.length; j < x; j++) {
      var starII = stars[j];
      if(distance(starI, starII) < 150) {
        //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
        ctx.lineTo(starII.x,starII.y); 
      }
    }
  }
  ctx.lineWidth = 0.05;
  ctx.strokeStyle = buttonColor;
  ctx.stroke();
}

function distance( point1, point2 ){
  var xs = 0;
  var ys = 0;
 
  xs = point2.x - point1.x;
  xs = xs * xs;
 
  ys = point2.y - point1.y;
  ys = ys * ys;
 
  return Math.sqrt( xs + ys );
}

// Update star locations

function update() {
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];
  
    s.x += s.vx / FPS;
    s.y += s.vy / FPS;
    
    if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
    if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
  }
}

canvas.addEventListener('mousemove', function(e){
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Update and draw

function tick() {
  draw();
  update();
  requestAnimationFrame(tick);
}

tick();