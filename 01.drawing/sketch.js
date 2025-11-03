let moving_size=50;
let static_size=20;


function setup() {
  createCanvas(400, 400);
  background(240);
  noLoop();}

function draw() {
  strokeWeight(2);
  stroke(66,150,199)
  fill(235,199,237);
  //eyes
  triangle(120,100,100,140,140,140);
  triangle(220,100,200,140,240,140);
  //mouth
  rect(147,234,60,4)
}
  
