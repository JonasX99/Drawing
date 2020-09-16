let linebool = false;
let myboolean = false;
let timesbuttonpressed = 0;
let linex1 = 0;
let liney1 = 0;
let linex2 = 0;
let liney2 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
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
  linedraw();
}

function keyTyped(){
  if(key === "a"){
   linebool = true;
   }
}

function linedraw(){
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
