var x = 0;
var y = 0;
var d = 10;
var xRec = 0;
var yRec = 0;
var lRec = 0;
var hRec = 0;

function setup() 
{
  createCanvas(1500, 900);
  background("pink");
}

function draw() 
{
  x = random (0, width);
  y = random (0, height);
  d = random (5, 50);
  ellipse(x, y, d);
  strokeWeight(5);
  stroke("blue");
  fill("white");
  
  xRec = random (0, width);
  yRec = random (0, height);
  lRec = random (5, 50);
  hRec = random (5, 50);
  rect(xRec, yRec, lRec, hRec);
  stroke("black");
  fill("yellow");
  
  //rectMode(CENTER);
  //rect(x-axis via width of canvas, y-axis via height of      canvas, length, height)
  //ellipse(x-axis from 0 - 400, y-axis from 0 - 400, diameter);
}