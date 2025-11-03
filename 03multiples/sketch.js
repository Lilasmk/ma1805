 
let row = 20; //numvber of shapes in a row  
let col = 20; //number of shapes in a col   
let pad = 5;  //padding between shapes     
let sWidth, sHeight;  
let rgba = [100, 47, 500, 30]; 
let select= 0;
let size= 50; 

function setup() {
    createCanvas(1000,500);
    sWidth = (width/col)-(pad*(pad/col));
    sHeight = (height/row)-(pad*(pad/row));
    rectMode(20,60);
    noStroke(1);}

function draw(){
  background(1000); 
  //loop through Y values
for(let i=0; i<row; i++){
  //loop through X values
    for(let ii=0; ii<col; ii++){
      let x = pad+(ii*sWidth)+(pad*ii)+(sWidth/2);
      let y = pad+(i*sHeight)+(pad*i)+(sHeight/2);
      fill(rgba); 
      rect(x, y, sWidth, sHeight); } }
      //layer shapes
    circle(300,200,500)   
    triangle(50,70,100,600,300,50)
    rect(700,60,800,50,10,200)}
