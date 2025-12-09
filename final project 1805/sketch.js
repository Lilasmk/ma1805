let brush;
let video;
let textAlpha = 0;
let message = "Our hands, like the branched limbs of ancient trees, stretch toward the light, drawing nourishment from the earth as nature itself fuels the silent, persistent ascent of the human spirit.";
let fontSize = 100;
// Animations
let handFrames = [];
let treeFrames = [];
let handIndex = 0;
let treeIndex = 0;
let aniDelay = 300;
let nextHandSwitch = 0;
let nextTreeSwitch = 0;

// Painting
let paintImages = [];
let paintPositions = [];

function preload() {

  // Hand flipbook (these ARE .jpg)
  handFrames[0] = loadImage("images/hand5.jpg");
  handFrames[1] = loadImage("images/hand6.jpg");
  handFrames[2] = loadImage("images/hand7.jpg");
  handFrames[3] = loadImage("images/hand8.jpg");

  // Tree flipbook (correct extensions!)
  treeFrames[0] = loadImage("images/tree1.jpg");
  treeFrames[1] = loadImage("images/tree2.jpeg");
  treeFrames[2] = loadImage("images/tree3.png");
  treeFrames[3] = loadImage("images/tree4.png");

  // Painting hands
  paintImages[0] = loadImage("images/hand1.jpg");
  paintImages[1] = loadImage("images/hand2.jpg");
  paintImages[2] = loadImage("images/hand3.jpg");
  paintImages[3] = loadImage("images/hand4.jpg");

  // Brush
  brush = loadImage("images/brush.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Background video
  video = createVideo("images/video22.mp4");
  video.elt.muted = true;
  video.elt.playsInline = true;
  video.hide();
  video.loop();
  video.play();

  imageMode(CENTER);

  // Resize images
  for (let img of handFrames) img.resize(150, 150);
  for (let img of treeFrames) img.resize(700, 700);
  for (let img of paintImages) img.resize(200, 200);

  brush.resize(60, 60);

  // Paint positions
  paintPositions = [
    { x: 150, y: 150 },
    { x: 350, y: 150 },
    { x: 150, y: 350 },
    { x: 350, y: 350 }
  ];

  nextHandSwitch = millis() + aniDelay;
  nextTreeSwitch = millis() + aniDelay;
}

function draw() {
  // Background video
  imageMode(CORNER);
  image(video, 0, 0, width, height);
  imageMode(CENTER);

  // Painting when clicking
  if (mouseIsPressed) {
    for (let i = 0; i < paintImages.length; i++) {
      image(paintImages[i], paintPositions[i].x, paintPositions[i].y);
    }
  }

  animateFlipbooks();

  // Brush cursor
  image(brush, mouseX, mouseY);
}

function animateFlipbooks() {

  // Hand animation
  image(handFrames[handIndex], width - 300, height - 300, 350, 350);

  if (millis() > nextHandSwitch) {
    handIndex = (handIndex + 1) % handFrames.length;
    nextHandSwitch = millis() + aniDelay;
  }

  // Tree animation
  image(treeFrames[treeIndex], width/2, height/2, 600, 600);

  if (millis() > nextTreeSwitch) {
    treeIndex = (treeIndex + 1) % treeFrames.length;
    nextTreeSwitch = millis()+ aniDelay;}

    // Fade-in text in top-left corner
if (textAlpha < 255) {
  textAlpha += 0.5;   // fade-in speed
}

fill(255, textAlpha);
textSize(24);
textAlign(LEFT, TOP);
text(message, 20, 20, 400, 600);  // wrap text box

}
