let linebool = false;
let myboolean = false;
let timesbuttonpressed = 0;
let linex1 = 0;
let liney1 = 0;
let linex2 = 0;
let liney2 = 0;
let arraylines = [];
let linex1skip = [];
let liney1skip = [];
let linex2skip = [];
let liney2skip = [];
let arrayfollow = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  button();
  if (timesbuttonpressed == 1) {
    background(255);
    button();
    line(linex1, liney1, mouseX, mouseY);
  }
  for (let i = 0; i < arrayfollow; i++) {
    print(i);
    line(linex1skip[i], liney1skip[i], linex2skip[i], liney2skip[i]);
  }
}

function mousePressed() {
  linedraw();
}

function keyTyped() {
  if (key === "a") {
    linebool = !linebool;
  }
}

function button() {
  if (linebool == true) {
    fill(255, 204, 0);
    square(30, 20, 55);
    fill(0, 0, 0);
    text('Draw line', 32, 50);
    text('Press A', 35, 65);
  }
  if (linebool == false) {
    fill(255, 255, 255);
    square(30, 20, 55);
    fill(0, 0, 0);
    text('Draw line', 32, 50);
    text('Press A', 35, 65);
  }
}

function linedraw() {
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
    if (timesbuttonpressed == 1) {
      line(linex1, liney1, mouseX, mouseY);
      //background(255);
    }
  }
}