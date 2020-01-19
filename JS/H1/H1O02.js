function setup() {
  canvas = createCanvas(450,450);
  background('darkred');
  canvas.parent('processing');
  noLoop();
}

function draw() {
// roze driehoek
  noStroke();
  fill('pink');
  triangle(0,225,450,450,450,0);
// paarse driehoek
  noStroke();
  fill('purple');
  triangle(0,0,0,450,450,225);
// vertex
  strokeWeight(5);
  stroke('pink');
  fill('darkred');
  beginShape();
  vertex(225,115);
  vertex(300,225);
  vertex(225,335);
  vertex(0,225);
  endShape(CLOSE);
}