let img; // Declare variable 'img'.
let hum;
let video;
let playing = false;

function preload() {
  img = loadImage('sunset.jpg'); // Load image
  hum = loadSound('sound of nature.mp4');
  video = createVideo('sound of nature.mp4');
  img2 = loadImage('view of the hill.jpg');
  video.hide(); // Required to hide HTML  vid
  video.play();
}

function setup() {
  createCanvas(650,650);
  background(200, 255, 400);
  hum.amp(1);
  //video.amp(0.1);
}

function draw() {
  image(img, 2, 300,400,400);
  image(video, 2.25, 0, 650, 300);
  image(img2,400,300,350,400)
}

function mousePressed() {
    if (playing) {
      video.pause();
      hum.pause();
    } else {
      video.loop();
      hum.loop(); 
    }
    playing = !playing;
   
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}