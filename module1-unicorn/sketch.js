function setup() {
  createCanvas(500, 500);

  background(250, 218, 231, 255);

  // ears
  fill(254, 255, 250, 255);
  noStroke();
  ellipse(250, 270, 300, 280);
  ellipse(130, 170, 70, 90);
  ellipse(360, 170, 70, 90);

  // ear holes
  fill(244, 148, 194, 255);
  ellipse(130, 170, 30, 50);
  ellipse(360, 170, 30, 50);

  // horn
  fill(253, 242, 112, 255);
  triangle(215, 138, 250, 20, 285, 138);

  // bangs

  // bang1
  fill(255, 145, 200, 255);
  arc(230, 180, 120, 120, PI, TWO_PI);

  // bang 2
  fill(214, 120, 229, 255);
  arc(260, 180, 120, 120, PI, TWO_PI);

  // bang 3
  fill(255, 184, 153, 255);
  arc(270, 180, 90, 120, PI, TWO_PI);

  // bang 4
  fill(179, 254, 151, 255);
  arc(283, 180, 70, 115, PI, TWO_PI);

  // bang 5
  fill(133, 229, 234);
  arc(300, 180, 40, 100, PI, TWO_PI);

  // eyes
  stroke(0);
  fill(0);
  ellipse(180, 250, 60, 65);
  ellipse(320, 250, 60, 65);

  // eye light
  fill(255);
  noStroke();
  ellipse(170, 240, 25, 25);
  ellipse(310, 240, 25, 25);
  ellipse(185, 265, 13, 13);
  ellipse(325, 265, 13, 13);

  // blush
  noStroke();
  fill(254, 98, 173, 255);
  ellipse(150, 310, 40, 30);
  ellipse(350, 310, 40, 30);

  // smile and nose
  stroke(0);
  noFill();
  strokeWeight(6);
  arc(250, 320, 70, 50, PI, 0);
  arc(240, 340, 30, 30, 0, PI);

  // nostrils
  strokeWeight(9);
  point(238, 315);
  point(262, 315);
}
