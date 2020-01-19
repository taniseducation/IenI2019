var choco = 0;
var toren = 0;

function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function preload() {
choco = loadImage("images/choco.jpg");
toren = loadImage("images/toren.jpg");
}

function draw() {
    background(choco);
    torenX += random(-5,5);
    torenY += random(-5,5);
    image(toren,torenX,torenY);
}