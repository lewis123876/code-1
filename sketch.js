let x = 200;
let y = 200;
let xSpeed = 4;
let ySpeed = 3;
let ballColor;
let r = 25;

function setup() {
  createCanvas(500, 500);
  colorMode(HSL);
  changeColor();
}

function draw() {
  background(0, 0, 30);
  drawBall();
  moveBall();
  checkBounce();
}

// functions

function drawBall() {
  noStroke();

  // outline
  fill(hue(ballColor), saturation(ballColor), lightness(ballColor), 0.4);
  ellipse(x, y, r * 2.8, r * 2.8);

  // ball
  fill(ballColor);
  ellipse(x, y, r * 2, r * 2);

  // Highlight
  fill(0, 0, 100, 0.8);
  ellipse(x - 8, y - 8, 15, 15);
}

function moveBall() {
  x += xSpeed;
  y += ySpeed;
}

function changeSpeed() {
  // keep direction, random new speed
  xSpeed = xSpeed < 0 ? -random(2, 15) : random(2, 15);
  ySpeed = ySpeed < 0 ? -random(2, 15) : random(2, 15);
}

 // changing thw color of the ball
function changeColor() {
  ballColor = color(random(360), 100, 84);
}

function checkBounce() {
  // right wall
  if (x + r > width) {
    x = width - r;
    xSpeed *= -1;
    changeColor();
    changeSpeed();
  }
  // left wall
  if (x - r < 0) {
    x = r;
    xSpeed *= -1;
    changeColor();
    changeSpeed();
  }
  // bottom wall
  if (y + r > height) {
    y = height - r;
    ySpeed *= -1;
    changeColor();
    changeSpeed();
  }
  // top wall
  if (y - r < 0) {
    y = r;
    ySpeed *= -1;
    changeColor();
    changeSpeed();
  }
}
