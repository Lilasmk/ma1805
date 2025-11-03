let i = 0;

// Text obtained from  UK Government website 
const housingText = "َكْرهُ أن أُحِبَّ مِثْلَ النّاس أَكْرهُ أن أَكْتُبَ مِثْلَ النّاس أوَدُّ لَو كانَ فَمِي كَنِيسة وأَحْرُفِي أَجْراس Ne hâte pas cet acte tendre,Douceur d’être et de n’être pas Car j’ai vécu de vous attendre Et mon coeur n’était que vos pas.there was a single twenty-ounce bottle of Mountain Dew,which you paid for with your last damn dime because you once overheard me say that I liked it"
const textArray = housingText.split(" "); // Convert the text into an an array (list) of words. 
let colors=[lightblue]

function setup(){
	createCanvas(700, 700); 
  frameRate(15); // speed of the sketch 
}

function draw(){
  let x = random(700);
  let y = random(900);
  if (i < textArray.length) { // is i less-than the number of words in the text
    fill(300,100,100);
    stroke(100);
    console.log(i);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(textArray[i], x, y); 
    i++;
  }else{
    i=0; // reset the counter
    background(600,200,150); // clear the background 
  }

}