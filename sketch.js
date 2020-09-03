//draw line
let buttonline;
let linebool = false;
let myboolean = false;
let timesbuttonpressed = 0;
let linex1 = 0;
let liney1 = 0;
let linex2 = 0;
let liney2 = 0;
//draw circle
let buttoncircle;

function setup() {
  createCanvas(800, 800);
  background(200);
  noLoop();
  //drawline
  buttonline = createButton('draw line');
  buttonline.position(19, 19);
  buttonline.mouseReleased(fbuttonline);
  
  //drawcircle
  buttoncircle = createButton('draw circle');
  buttoncircle.position(100,19);
  buttoncircle.mouseReleased(fbuttoncircle);
}

function fbuttonline(){
  linebool = true;
}

function fbuttoncircle(){
  linebool = false;
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