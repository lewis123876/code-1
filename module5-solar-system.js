let h, sun, planetA, planetB;

function setup() {
  createCanvas(500, 500);
  colorMode(HSL);
  angleMode(DEGREES);
  h = random(360);

  // create sun and planets
  sun = new Sun(40);
  planetA = new Planet(110, 24, 210, 1.5); 
  planetB = new Planet(170, 30, 40, 0.8);
}

function draw() {
  background(210, 60, 10);
  translate(width / 2, height / 2);

  // draw sun and planets
  sun.draw();
  planetA.update();
  planetA.draw();
  planetB.update();
  planetB.draw();
}

// sun class
class Sun {
  constructor(size) {
    this.size = size;
  }

  draw() {
    noStroke();
    
    // glowing halo
    for (let i = 4; i > 0; i--) {
      fill(50, 90, 60, 0.12);
      ellipse(0, 0, this.size * i, this.size * i);
    }
    
    // bright core
    fill(55, 95, 55);
    ellipse(0, 0, this.size * 0.8);
  }
}

//planet class
class Planet {
  constructor(orbitRadius, size, hueVal, speed) {
    this.orbitRadius = orbitRadius;
    this.size = size;
    this.hueVal = hueVal;
    this.speed = speed;
    this.angle = random(360);
  }

  //moves the planets
  update() {
    this.angle = (this.angle + this.speed) % 360;
  }

  draw() {
    // the planet’s orbit
    stroke(0, 0, 100, 0.2);
    noFill();
    ellipse(0, 0, this.orbitRadius * 2);

    // the planet
    push();
    rotate(this.angle);
    noStroke();
    fill(this.hueVal, 80, 55);
    ellipse(this.orbitRadius, 0, this.size);
    pop();
  }
}
