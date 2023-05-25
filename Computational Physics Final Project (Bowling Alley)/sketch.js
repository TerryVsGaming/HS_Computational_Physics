//Top ball Velocity
let vx = 0;

//Middle ball velocity
let vx2 = 0;

//Bottom ball velocity
let vx3 = 0;


//Top ball position
let x1 = 100
let y1 = 150

//Middle ball position
let x2 = 100
let y2 = 600

//Top ball position
let x3 = 100
let y3 = 1050

//pins x value
let x4 = 1100
let x5 = 1125
let x6 = 1150

let x7 = 1050


//bowling alley width (for when altered)
let w = 825
let w2 = 175

//bowling ball and holes widths and lengths
let d1 = 80;
let d2 = 15;

let d3 = 40;
let d4 = 8;



let movement;


//masses
let m1 = 10;
let m2 = 5;
let m3 = 2;

let dt = 0.2 //s



let ax1;
let ax2
let ax3;

let Fnetx;
let Fapp;
let Ffrict;


let button1;
let button2;
let button3;

let button4

let canvasWidth = 1300;


let state = 3


let slider1;
let slider2;

let Pause;
let Play;
let Reset;

let showVectors = true;



let Header
let paragraph1
let paragraph2
let paragraph3

function setup() {









  Pause = loadImage("Pause.jpg")
  Play = loadImage("Play.jpg")
  Reset = loadImage("Reset.png")



  //Canvas
  slider1 = createSlider(1225, 1625, 1225, 100)

  //Fapp
  slider2 = createSlider(11, 26, 11, 1)

  button1 = createButton("Sand (Super Friction)")
  button2 = createButton("Concrete (Control)")
  button3 = createButton("Frictionless")
  button4 = createButton("Display Vector Arrows")

  header = createElement('h1', "Bownling Simulation")
  paragraph1 = createElement('p', "Hello! Thank you for trying out my simulation.")
  paragraph2 = createElement('p', "In this simulation, you will be able to 'throw' a bowling ball on the right at the pins on the left. The ball will go through the pins, rather than colliding, as I am trying to demonstrate friction and applied force, rather than momentum. Underneath the canvas, you will be able to change the length of the bowling alley and the amount of applied force you wish to use. Additionally, you will be able to change the material of the alley. Note that the material will affect the friction force placed onto the ball. The default sand alley will have 10N of friction, the concrete alley will have 5N of friction, and the frictionless alley will have 0N of friction. You can pause, play, and reset the simulation by clicking the 3 buttons on the top left of the screen. The current acceleration and velocity are shown on top of each alley. Anyway, have fun and enjoy!")
  paragraph3 = createElement('p', "PLEASE NOTE! Only one ball may be in motion at one time. Getting another ball to move will cause the original ball to stop. ")

  createCanvas(1225, 1300)
}

function draw() {




  //Friciton depending on meterial
  if (state == 3) {
    Ffrict = 10
  } else if (state == 4) {
    Ffrict = 5
  } else {
    Ffrict = 0
  }

  //Slider for alley length
  canvasWidth = slider1.value()
  if (slider1.value() == 1225) {
    resizeCanvas(1225, 1300)
    w = 825
    w2 = 175
    x4 = 1100
    x5 = 1125
    x6 = 1150
    x7 = 1050
  }

  if (slider1.value() == 1325) {
    resizeCanvas(1325, 1300)
    w = 925
    w2 = 275
    x4 = 1200
    x5 = 1225
    x6 = 1250
    x7 = 1150
  }


  if (slider1.value() == 1425) {
    resizeCanvas(1425, 1300)
    w = 1025
    w2 = 375
    x4 = 1300
    x5 = 1325
    x6 = 1350
    x7 = 1250
  }

  if (slider1.value() == 1525) {
    resizeCanvas(1525, 1300)
    w = 1125
    w2 = 475
    x4 = 1400
    x5 = 1425
    x6 = 1450
    x7 = 1350
  }

  if (slider1.value() == 1625) {
    resizeCanvas(1625, 1300)
    w = 1225
    w2 = 575
    x4 = 1500
    x5 = 1525
    x6 = 1550
    x7 = 1450
  }



  //slider for Fapp
  Fapp = slider2.value()

  if (movement == 1) {
    Fnetx = Fapp - Ffrict
    ax1 = Fnetx / m1

    x1 = x1 + vx * dt + 0.5 * ax1 * dt * dt
    vx = vx + ax1 * dt
  }

  if (movement == 2) {
    Fnetx = Fapp - Ffrict
    ax2 = Fnetx / m2

    x2 = x2 + vx2 * dt + 0.5 * ax2 * dt * dt
    vx2 = vx2 + ax2 * dt
  }

  if (movement == 3) {
    Fnetx = Fapp - Ffrict
    ax3 = Fnetx / m3

    x3 = x3 + vx3 * dt + 0.5 * ax3 * dt * dt
    vx3 = vx3 + ax3 * dt
  }





  background(220);

  bowlingAlley()
  bowlingPins()
  bowlingBalls()

  rect(5, 185, 50, 30)
  rect(5, 635, 50, 30)
  rect(5, 1085, 50, 30)

  fill(0)
  text("Click", 16, 205)
  text("Click", 16, 655)
  text("Click", 16, 1105)

  strokeWeight(1)



  button1.mousePressed(sandAlley)
  button2.mousePressed(concreteAlley)
  button3.mousePressed(frictionlessAlley)
  button4.mousePressed(vectorToggle)

  textSize(20)
  text("10Kg", 10, 155)
  text("Ball", 14, 175)

  text("5Kg", 12, 605)
  text("Ball", 14, 625)

  text("2Kg", 12, 1055)
  text("Ball", 14, 1075)

  textSize(15)
  text("acceleration =" + " " + ax1 + " " + "m/s^2", 250, 20)
  text("acceleration =" + " " + ax2 + " " + "m/s^2", 250, 470)
  text("acceleration =" + " " + ax3 + " " + "m/s^2", 250, 920)
  text("velocity =" + " " + vx + " " + "m/s", 500, 20)
  text("velocity =" + " " + vx2 + " " + "m/s", 500, 470)
  text("velocity =" + " " + vx3 + " " + "m/s", 500, 920)

  text("Alley Length", 15, 1295)
  text("Applied Force", 130, 1295)

  pause()
  play()
  reset()



  if (showVectors) {
    textSize(15)
    //Fgrav
    rect(x1, y1 + 105, 10, 30)
    triangle(x1 - 15, y1 + 135, x1 + 25, y1 + 135, x1 + 5, y1 + 155)
    text("Fgrav : -100N", x1 + 15, y1 + 125)


    rect(x2, y2 + 100, 10, 30)
    triangle(x2 - 15, y2 + 130, x2 + 25, y2 + 130, x2 + 5, y2 + 150)
    text("Fgrav : -50N", x2 + 15, y2 + 120)


    rect(x3 - 5, y3 + 95, 10, 30)
    triangle(x3 - 20, y3 + 125, x3 + 20, y3 + 125, x3, y3 + 145)
    text("Fgrav : -20N", x3 + 15, y3 + 115)


    //Fnormal
    rect(x1, y1 - 30, 10, 30)
    triangle(x1 - 15, y1 - 30, x1 + 25, y1 - 30, x1 + 5, y1 - 55)
    text("Fnormal : 100N", x1 + 15, y1 - 5)


    rect(x2, y2 - 25, 10, 30)
    triangle(x2 - 15, y2 - 20, x2 + 25, y2 - 20, x2 + 5, y2 - 45)
    text("Fnormal : 50N", x2 + 15, y2 + 5)


    rect(x3 - 5, y3 - 20, 10, 30)
    triangle(x3 - 20, y3 - 20, x3 + 20, y3 - 20, x3, y3 - 50)
    text("Fnormal : 20N", x3 + 15, y3 + 5)




    //top ball Fapp
    if (x1 < 225) {
      rect(x1 + 55, y1 + 40, 30, 10)
      triangle(x1 + 85, y1 + 25, x1 + 85, y1 + 70, x1 + 105, y1 + 47)
      text("Fapp : " + Fapp + "N", x1 + 115, y1 + 47)
    }

    //top ball Ffrict
    else if (x1 > 225) {
      rect(x1 - 80, y1 + 40, 30, 10)
      triangle(x1 - 80, y1 + 25, x1 - 80, y1 + 70, x1 - 100, y1 + 47)
      text("Ffrict : " + -Ffrict + "N", x1 - 180, y1 + 52)
    }

    //middle ball Fapp
    if (x2 < 225) {
      rect(x2 + 55, y2 + 40, 30, 10)
      triangle(x2 + 85, y2 + 25, x2 + 85, y2 + 70, x2 + 105, y2 + 47)
      text("Fapp : " + Fapp + "N", x2 + 115, y2 + 52)
    }

    //middle ball Ffrict
    else if (x2 > 225) {
      rect(x2 - 80, y2 + 40, 30, 10)
      triangle(x2 - 80, y2 + 25, x2 - 80, y2 + 70, x2 - 100, y2 + 47)
      text("Ffrict : " + -Ffrict + "N", x2 - 180, y2 + 52)
    }

    //bottom ball Fapp
    if (x3 < 225) {
      rect(x3 + 40, y3 + 40, 30, 10)
      triangle(x3 + 70, y3 + 25, x3 + 70, y3 + 70, x3 + 90, y3 + 47)
      text("Fapp : " + Fapp + "N", x3 + 115, y3 + 47)
    }

    //bottom ball Ffrict
    else if (x3 > 225) {
      rect(x3 - 80, y3 + 40, 30, 10)
      triangle(x3 - 80, y3 + 25, x3 - 80, y3 + 70, x3 - 100, y3 + 47)
      text("Ffrict : " + -Ffrict + "N", x3 - 180, y3 + 52)
    }

  }


}


function reset() {
  image(Reset, 140, 10, 80, 60)
}

function pause() {
  image(Pause, 5, 10, 60, 60)
}

function play() {
  image(Play, 70, 10, 60, 60)
}






function sandAlley() {
  state = 3
}

function concreteAlley() {
  state = 4
}

function frictionlessAlley() {
  state = 5
}



function bowlingAlley() {

  strokeWeight(0)

  rect(0, 400, w + 400, 50)
  rect(0, 850, w + 400, 50)

  fill(255, 0, 0)
  rect(0, 75, 225, 325)

  fill(0, 255, 0)
  rect(0, 450, 225, 400)

  fill(0, 0, 255, 180)
  rect(0, 900, 225, 380)

  //Very Frictioned Surface (Sand) 
  if (state == 3) {
    fill(233, 196, 140)
    rect(225, 0, w, 400)

    fill(233, 196, 140)
    rect(225, 450, w, 400)

    fill(233, 196, 140)
    rect(225, 900, w, 400)


    fill(0)

  }



  //Semi-Frictionless Surface / Control Friction (Concrete)
  if (state == 4) {
    fill(185, 180, 171)
    rect(225, 0, w, 400)
    rect(225, 450, w, 400)
    rect(225, 900, w, 400)

  }



  //Frictionless Surfrace (Ice)
  if (state == 5) {
    fill(255)
    rect(225, 0, w, 400)
    rect(225, 450, w, 400)
    rect(225, 900, w, 400)
  }

  fill(0)
  textSize(13)
}






function bowlingPins() {
  strokeWeight(0)

  //Top Pins Square
  fill(195, 117, 84, 130)
  rect(x7, 0, w2, 400)
  rect(x7, 0, w2, 400)
  rect(x7, 0, w2, 400)

  //Middle Pins Square
  rect(x7, 450, w2, 400)
  rect(x7, 450, w2, 400)
  rect(x7, 450, w2, 400)

  //Bottom Pins Square
  rect(x7, 900, w2, 400)
  rect(x7, 900, w2, 400)
  rect(x7, 900, w2, 400)

  fill(255)


  //Top Pins

  //collumn 1
  circle(x4, 176, 20)
  arc(x4, 233, 20, 100, PI, TWO_PI)

  //collumn 2 top
  circle(x5, 133, 20)
  arc(x5, 190, 20, 100, PI, TWO_PI)

  //collumn 2 bottom
  circle(x5, 215, 20)
  arc(x5, 272, 20, 100, PI, TWO_PI)


  //collumn 3 middle
  circle(x6, 176, 20)
  arc(x6, 233, 20, 100, PI, TWO_PI)

  //collumn 3 top
  circle(x6, 98, 20)
  arc(x6, 155, 20, 100, PI, TWO_PI)

  //collumn 3 bottom
  circle(x6, 254, 20)
  arc(x6, 311, 20, 100, PI, TWO_PI)


  //Middle Pins

  //collumn 1
  circle(x4, 626, 20)
  arc(x4, 683, 20, 100, PI, TWO_PI)

  //collumn 2 top
  circle(x5, 583, 20)
  arc(x5, 640, 20, 100, PI, TWO_PI)

  //collumn 2 bottom
  circle(x5, 665, 20)
  arc(x5, 722, 20, 100, PI, TWO_PI)


  //collumn 3 middle
  circle(x6, 626, 20)
  arc(x6, 683, 20, 100, PI, TWO_PI)

  //collumn 3 top
  circle(x6, 548, 20)
  arc(x6, 605, 20, 100, PI, TWO_PI)

  //collumn 3 bottom
  circle(x6, 704, 20)
  arc(x6, 761, 20, 100, PI, TWO_PI)


  //Bottom Pins

  //collumn 1
  circle(x4, 1076, 20)
  arc(x4, 1133, 20, 100, PI, TWO_PI)

  //collumn 2 top
  circle(x5, 1033, 20)
  arc(x5, 1090, 20, 100, PI, TWO_PI)

  //collumn 2 bottom
  circle(x5, 1115, 20)
  arc(x5, 1172, 20, 100, PI, TWO_PI)


  //collumn 3 middle
  circle(x6, 1076, 20)
  arc(x6, 1133, 20, 100, PI, TWO_PI)

  //collumn 3 top
  circle(x6, 998, 20)
  arc(x6, 1055, 20, 100, PI, TWO_PI)

  //collumn 3 bottom
  circle(x6, 1154, 20)
  arc(x6, 1211, 20, 100, PI, TWO_PI)



}

function bowlingBalls() {

  //Top Ball
  fill(0)
  circle(x1 + 5, y1 + 50, d1 * 1.15)
  fill(255)
  circle(x1 - 10, y1 + 40, d2 * 1.2)
  circle(x1 + 20, y1 + 40, d2 * 1.2)
  circle(x1 + 5, y1 + 65, d2 * 1.2)



  //Middle Ball
  fill(0)
  circle(x2 + 5, y2 + 50, d1)
  fill(255)
  circle(x2 - 10, y2 + 40, d2)
  circle(x2 + 20, y2 + 40, d2)
  circle(x2 + 5, y2 + 65, d2)


  //Bottom Ball
  fill(0)
  circle(x3, y3 + 50, d1 * 0.85)
  fill(255)
  circle(x3 - 12.5, y3 + 40, d2 * 0.85)
  circle(x3 + 12.5, y3 + 40, d2 * 0.85)
  circle(x3, y3 + 65, d2 * 0.85)


  if (x1 > 1400) {
    vx = 0
  }

  if (x2 > 1400) {
    vx2 = 0
  }

  if (x3 > 1400) {
    vx3 = 0
  }

}








function mousePressed() {

  //Reset
  if (mouseX > 140 && mouseX < 220 && mouseY > 10 && mouseY < 70) {
    w = 825
    w2 = 175
    x4 = 110
    x5 = 1125
    x6 = 1150
    x7 = 1050

    state = 3

    vx = 0
    vx2 = 0
    vx3 = 0

    ax1 = 0
    ax2 = 0
    ax3 = 0

    Fapp = 0
    Ffrict = 0

    x1 = 100
    y1 = 150


    x2 = 100
    y2 = 600


    x3 = 100
    y3 = 1050

    dt = 0
  } else {
    dt = 0.2
  }





  //Top Ball
  if (state == 3 && mouseX > 5 && mouseX < 65 && mouseY > 185 && mouseY < 215) {

    movement = 1
  } else if (state == 4 && mouseX > 5 && mouseX < 65 && mouseY > 185 && mouseY < 215) {

    movement = 1
  } else if (state == 5 && mouseX > 5 && mouseX < 65 && mouseY > 185 && mouseY < 215) {

    movement = 1
  }

  //Middle ball
  else if (state == 3 && mouseX > 5 && mouseX < 65 && mouseY > 635 && mouseY < 665) {

    movement = 2
  } else if (state == 4 && mouseX > 5 && mouseX < 65 && mouseY > 635 && mouseY < 665) {

    movement = 2
  } else if (state == 5 && mouseX > 5 && mouseX < 65 && mouseY > 635 && mouseY < 665) {

    movement = 2
  }

  // Bottom Ball
  else if (state == 3 && mouseX > 5 && mouseX < 65 && mouseY > 1085 && mouseY < 1115) {

    movement = 3
  } else if (state == 4 && mouseX > 5 && mouseX < 65 && mouseY > 1085 && mouseY < 1115) {

    movement = 3
  } else if (state == 5 && mouseX > 5 && mouseX < 65 && mouseY > 1085 && mouseY < 1115) {

    movement = 3
  }


  //Pause and Play button

  if (mouseX > 5 && mouseX < 65 && mouseY > 10 && mouseY < 70) {
    dt = 0
  }

  if (mouseX > 70 && mouseX < 130 && mouseY > 10 && mouseY < 70) {

    dt = 0.2
  }


}


function vectorToggle() {
  showVectors = !showVectors
}