  /*

Terry Shvartsman
11/24/2020
Professor Zitolo
Computational Physics

Game Project


Note: Lines 54 and 59 were taken from The Coding Train's "Loading and Playing" Music YouTube Video

*/




//Controlled Circle
let x1 = 500;
let y1 = 500;
let d1 = 50;
let deltaX1 = 0;
let deltaY1 = 0;

//Objective Circle
let x2 = 300;
let y2 = 300;
let d2 = 50;

let score = 0;

let state = 0;

let font1;
let font2;

let GJ; // Good-Job Winning Picture

let song1; //Music

function preload() {
  song1 = loadSound("Undertale.mp3");
}


function setup() {
  createCanvas(1000, 1000);
  GJ = loadImage("GJ.jpeg");

  font1 = loadFont("sans.ttf");
  font2 = loadFont("Arial.ttf");

  song1.loop();

  slider = createSlider(0, 1, 0.5, 0.01);
}


function draw() {
  song1.setVolume(slider.value());

  strokeWeight(5);
  background(220);

  //Default State
  if (state == 0) {

    //Black Ellipse 
    x1 = deltaX1 + x1;
    y1 = deltaY1 + y1;
    fill(2, 0, 0);
    ellipse(x1, y1, d1, d1);

    //Red Ellipse
    fill(180, 50, 50);
    ellipse(x2, y2, d2, d2);






    //Interception Function
    if (x1 > x2 - 40 && y1 > y2 - 40 && y1 < y2 + 40 && x1 < x2 + 40) {
      x2 = random(25, 975);
      y2 = random(25, 975);
      score = score + 1;
    }
  }



  //Reset Function (and State function)
  if (x1 < 0 || x1 > 1000) {
    x1 = 500;
    deltaX1 = 0;
    state = 1;
  }

  if (y1 < 0 || y1 > 1000) {
    y1 = 500;
    deltaY1 = 0;
    state = 1;
  }


  //State = 1 function - Lost State
  if (state == 1) {
    background(241, 179, 81);
    fill(255);
    textSize(100);
    textFont(font1);
    textAlign(CENTER);
    text("Game Over!", 500, 425);
    textSize(30);
    text("Press Enter to Play Again.", 500, 575);
    deltaX1 = 0;
    deltaY1 = 0;

    //I added this deltaX1 and deltaY1 because occasionally, the circle would begin moving upon clicking (before officially starting the round)

    score = 0;

    x2 = random(25, 975);
    y2 = random(25, 975);

    song1.stop();
  }

  if (score == 50) {
    state = 2;
  }
  // Defining State = 2 - Won State
  if (state == 2) {
    background(255, 255);

    strokeWeight(10)
    fill(0, 255, 0);
    rect(375, 925, 100, 50);
    rect(500, 925, 100, 50);
    fill(0);
    text("yes.", 425, 956);
    text("yes!", 550, 956);

    image(GJ, 200, 100, 600, 450);
    fill(0)
    text("You've Reached the Maximum Score!", 500, 800);
    text("Play Again?", 500, 900);
    strokeWeight(5);

    song1.stop();
  }

  //Defining the Color of the Background and Text for Every "Level"

  if (score < 10) {
    background(0, 255, 0, 20);
    text("Level 1", 500, 75);
    fill(0);

    //Instructions
    textSize(20);
    fill(0);
    textFont(font1);
    textAlign(CENTER);
    text("Click W for Up", 73, 35);
    text("Click A for Left", 73, 55);
    text("Click S for Down", 73, 75);
    text("Click D for Right", 73, 95);

    //score
    text("Reach 50 Points to Win", 855, 35);
    textSize(32);
    textFont(font2);
    text("Score:" + " " + score + " " + "points", 500, 30);
  }

  if (score < 20 && score >= 10) {
    background(255, 255, 0, 70);
    text("Level 2", 500, 75);
    fill(0);

    //Instructions
    textSize(20);
    fill(0);
    textFont(font1);
    textAlign(CENTER);
    text("Click W for Up", 73, 35);
    text("Click A for Left", 73, 55);
    text("Click S for Down", 73, 75);
    text("Click D for Right", 73, 95);

    //score
    text("Reach 50 Points to Win", 855, 35);
    textSize(32);
    textFont(font2);
    text("Score:" + " " + score + " " + "points", 500, 30);
  }



  if (score < 30 && score >= 20) {
    background(255, 170, 10, 140);
    text("Level 3", 500, 75);
    fill(0);

    //Instructions
    textSize(20);
    fill(0);
    textFont(font1);
    textAlign(CENTER);
    text("Click W for Up", 73, 35);
    text("Click A for Left", 73, 55);
    text("Click S for Down", 73, 75);
    text("Click D for Right", 73, 95);

    //score
    text("Reach 50 Points to Win", 855, 35);
    textSize(32);
    textFont(font2);
    text("Score:" + " " + score + " " + "points", 500, 30);
  }



  if (score < 40 && score >= 30) {
    background(237, 0, 80, 110);
    text("Level 4", 500, 75);
    fill(0);

    //Instructions
    textSize(20);
    fill(0);
    textFont(font1);
    textAlign(CENTER);
    text("Click W for Up", 73, 35);
    text("Click A for Left", 73, 55);
    text("Click S for Down", 73, 75);
    text("Click D for Right", 73, 95);

    //score
    text("Reach 50 Points to Win", 855, 35);
    textSize(32);
    textFont(font2);
    text("Score:" + " " + score + " " + "points", 500, 30);
  }

  if (score < 50 && score >= 40) {
    background(255, 99, 71, 190);
    text("Level 5; Final Level!", 500, 75);
    fill(0);

    //Instructions
    textSize(20);
    fill(0);
    textFont(font1);
    textAlign(CENTER);
    text("Click W for Up", 73, 35);
    text("Click A for Left", 73, 55);
    text("Click S for Down", 73, 75);
    text("Click D for Right", 73, 95);

    //score
    text("Reach 50 Points to Win", 855, 35);
    textSize(32);
    textFont(font2);
    text("Score:" + " " + score + " " + "points", 500, 30);
  }

  //Text Above Music Volume Slider
  textSize(20);
  textFont(font2);
  text("Music Volume", 63, 995);
  textSize(32);



}


//Button Click To Restart Game Once Won
function mousePressed() {
  if (state == 2 && mouseX > 375 && mouseX < 475 && mouseY > 925 && mouseY < 975) {
    state = 0;
    score = 0;
    deltaX1 = 0;
    deltaY1 = 0;
    song1.loop();
  }

  if (state == 2 && mouseX > 500 && mouseX < 600 && mouseY > 925 && mouseY < 975) {
    state = 0;
    score = 0;
    deltaX1 = 0;
    deltaY1 = 0;
    song1.loop();
  }


}

//Restarts Game Once Lost

function keyPressed() {
  if (state == 1 && keyCode === ENTER) {
    state = 0;
    song1.loop();
  }


  //Key Movemenet Function (Increasing Speed Every 10 Points)



  if (score < 10) {

    if (key == 'd') {
      deltaX1 = 4;
      deltaY1 = 0;
    }
    if (key == 'a') {
      deltaX1 = -4;
      deltaY1 = 0;
    }
    if (key == 'w') {
      deltaY1 = -4;
      deltaX1 = 0;
    }
    if (key == 's') {
      deltaY1 = 4;
      deltaX1 = 0;
    }
  }

  if (score >= 10 && score < 20) {

    if (key == 'd') {
      deltaX1 = 6;
      deltaY1 = 0;
    }
    if (key == 'a') {
      deltaX1 = -6;
      deltaY1 = 0;
    }
    if (key == 'w') {
      deltaY1 = -6;
      deltaX1 = 0;
    }
    if (key == 's') {
      deltaY1 = 6;
      deltaX1 = 0;
    }

  }

  if (score >= 20 && score < 30) {

    if (key == 'd') {
      deltaX1 = 8;
      deltaY1 = 0;
    }
    if (key == 'a') {
      deltaX1 = -8;
      deltaY1 = 0;
    }
    if (key == 'w') {
      deltaY1 = -8;
      deltaX1 = 0;
    }
    if (key == 's') {
      deltaY1 = 8;
      deltaX1 = 0;
    }

  }

  if (score >= 30 && score < 40) {

    if (key == 'd') {
      deltaX1 = 10;
      deltaY1 = 0;
    }
    if (key == 'a') {
      deltaX1 = -10;
      deltaY1 = 0;
    }
    if (key == 'w') {
      deltaY1 = -10;
      deltaX1 = 0;
    }
    if (key == 's') {
      deltaY1 = 10;
      deltaX1 = 0;
    }

  }

  if (score >= 40 && score < 50) {

    if (key == 'd') {
      deltaX1 = 12;
      deltaY1 = 0;
    }
    if (key == 'a') {
      deltaX1 = -12;
      deltaY1 = 0;
    }
    if (key == 'w') {
      deltaY1 = -12;
      deltaX1 = 0;
    }
    if (key == 's') {
      deltaY1 = 12;
      deltaX1 = 0;
    }

  }
}