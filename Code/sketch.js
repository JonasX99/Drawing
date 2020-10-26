let linebool = false;
let circlebool = false;
let myboolean = false;
let timesbuttonpressed = 0;
let timebuttonpressedcircle = 0;
let linex1 = 0;
let liney1 = 0;
let linex2 = 0;
let liney2 = 0;
let arraylines = [];
let linex1skip = [];
let liney1skip = [];
let linex2skip = [];
let liney2skip = [];
let circlex1 = 0;
let circley1 = 0;
let circley2 = 0;
let circlex2 = 0;
let arraycircles = [];
let circlex1skip = [];
let circley1skip = [];
let circlex2skip = [];
let circley2skip = [];
let arrayfollow = 0;
let arrayfollowcircle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  buttonline();
  buttoncircle();
  linedraw();
  circledraw();
}

function mousePressed() {
  if(linebool){
    linepresscount();
  }
  if(circlebool){
    circlepresscount();
  }
}

function keyTyped() {
  if (key === "a") {
    linebool = !linebool;
    circlebool = false;
  }
  if(key == "s"){
    circlebool = !circlebool;
    linebool = false;
  }
}

function buttonline() {
  if (linebool == true) {
    fill(255, 204, 0);
    square(30, 20, 70);
    fill(0, 0, 0);
    text('Draw line', 40, 50);
    text('Press A', 42, 65);
  }
  if (linebool == false) {
    fill(255, 255, 255);
    square(30, 20, 70);
    fill(0, 0, 0);
    text('Draw line', 40, 50);
    text('Press A', 42, 65);
  }
}
function buttoncircle() {
  if (circlebool == true) {
    fill(255, 204, 0);
    square(120, 20, 70);
    fill(0, 0, 0);
    text('Draw circle', 125, 50);
    text('Press S', 132, 65);
  }
  if (circlebool == false) {
    fill(255, 255, 255);
    square(120, 20, 70);
    fill(0, 0, 0);
    text('Draw circle', 125, 50);
    text('Press S', 132, 65);
  }
}

function linepresscount() {
  if (linebool == true) {

    timesbuttonpressed++;

    if (timesbuttonpressed == 1) {
      linex1 = mouseX;
      liney1 = mouseY;
    }

    if (timesbuttonpressed == 2) {
      linex2 = mouseX;
      liney2 = mouseY;
    }
  }

  if (linebool == true) {
    if (timesbuttonpressed >= 2) {
      arrayfollow++;
      line(linex1, liney1, linex2, liney2);
      linex1skip.push(linex1);
      liney1skip.push(liney1);
      linex2skip.push(linex2);
      liney2skip.push(liney2);
      timesbuttonpressed = 0;
    }
  }
}
function circlepresscount() {
  if (circlebool == true) {

    timebuttonpressedcircle++;

    if (timebuttonpressedcircle == 1) {
      circlex1 = mouseX;
      circley1 = mouseY;
    }

    if (timebuttonpressedcircle == 2) {
      circlex2 = mouseX;
      circley2 = mouseY;
    }
  }

  if (circlebool == true) {
    if (timebuttonpressedcircle >= 2) {
      arrayfollowcircle++;
      circle(circlex1, circley1, dist(circlex1,circley1,circlex2, circley2)*2);
      circlex1skip.push(circlex1);
      circley1skip.push(circley1);
      circlex2skip.push(circlex2);
      circley2skip.push(circley2);
      timebuttonpressedcircle = 0;
    }
  }
}

function linedraw() {
  if (timesbuttonpressed == 1) {
    background(255);
    buttonline();
    buttoncircle();
    line(linex1, liney1, mouseX, mouseY);
  }
  for (let i = 0; i < arrayfollow; i++) {
    line(linex1skip[i], liney1skip[i], linex2skip[i], liney2skip[i]);
  }
}
function circledraw() {
  if (timebuttonpressedcircle == 1) {
    background(255);
    buttonline();
    buttoncircle();
    fill(255,255,255);
    circle(circlex1, circley1, dist(circlex1,circley1, mouseX, mouseY)*2);
  }
  for (let i = 0; i < arrayfollowcircle; i++) {
    fill(255,255,255);
    circle(circlex1skip[i], circley1skip[i], dist(circlex1skip[i], circley1skip[i],circlex2skip[i], circley2skip[i]) * 2);
  }
}