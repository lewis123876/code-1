let x = 200;
let y = 200;
let xSpeed = 4;
let ySpeed = 3;
let ballColor;

function setup() {
  createCanvas(500, 500);
  colorMode(HSL);
  ballColor = color(random(360), 100, 84);
}

function draw() {
  background(0, 0, 30);
  fill(ballColor);
  noStroke();
  ellipse(x, y, 50, 50);

  // Move the ball
  x += xSpeed;
  y += ySpeed;

  // Right wall
  if (x + 25 > width) {
    x = width - 25;
    xSpeed *= -1;

    // Change color and speed
    ballColor = color(random(360), 100, 84);
    xSpeed = xSpeed < 0 ? -random(2, 15) : random(2, 15);
    ySpeed = ySpeed < 0 ? -random(2, 15) : random(2, 15);
  }

  // Left wall
  if (x - 25 < 0) {
    x = 25;
    xSpeed *= -1;

    ballColor = color(random(360), 100, 84);
    xSpeed = xSpeed < 0 ? -random(2, 15) : random(2, 15);
    ySpeed = ySpeed < 0 ? -random(2, 15) : random(2, 15);
  }

  // Bottom wall
  if (y + 25 > height) {
    y = height - 25;
    ySpeed *= -1;

    ballColor = color(random(360), 100, 84);
    xSpeed = xSpeed < 0 ? -random(2, 15) : random(2, 15);
    ySpeed = ySpeed < 0 ? -random(2, 15) : random(2, 15);
  }

  // Top wall
  if (y - 25 < 0) {
    y = 25;
    ySpeed *= -1;

    ballColor = color(random(360), 100, 84);
    xSpeed = xSpeed < 0 ? -random(2, 15) : random(2, 15);
    ySpeed = ySpeed < 0 ? -random(2, 15) : random(2, 15);
  }
}
