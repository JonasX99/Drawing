
let linebool = true;
let myboolean = false;
let timesbuttonpressed = 0;
let linex1 = 0;
let liney1 = 0;
let linex2 = 0;
let liney2 = 0;

function setup() {
  createCanvas(800, 800);
  background(200);
  noLoop();
}

function draw() {
  if(linebool == true){  
    if(timesbuttonpressed >= 2){
      line(linex1,liney1,linex2,liney2);
      timesbuttonpressed = 0;
    }
  }
  
}

function mousePressed() {
  
  if(linebool == true){
    
      timesbuttonpressed++;
  
  if(timesbuttonpressed == 1){
    linex1 = mouseX;
    liney1 = mouseY;
  }
  
    if(timesbuttonpressed == 2){
    linex2 = mouseX;
    liney2 = mouseY;
  }
  redraw();
  }
  
}