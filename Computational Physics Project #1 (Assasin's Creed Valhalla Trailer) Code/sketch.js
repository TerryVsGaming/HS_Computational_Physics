/*
Terry Shvartsman
Last Edited: 10/11/2020
Title: Assassin's Creed Trailer
Description: As the title suggests, this is a "trailer" or infographic of the upcoming Assissin's Creed: Assassin's Creed Valhalla. I divided the canvas into 3 sectons, each depicting a different aspect of the new game.
*/









let font1;
let font2;
let font3;
let Cover;
let games;
let Weapons;
let November;
let ACV;

let header;
let paragraph1;
let paragraph2;
let paragraph3;


function setup() {
  
  header = createElement('h1',"Assasin's Creed Valhalla")
  paragraph1 = createElement('p',"The newest, and arguably best, Assassin's Creed game. With a range of new, never seen before weapons, new vehicles, and new choices to be made, fans are waiting in anticipation for November 20th. ")
  
  
  
  
  
  createCanvas(900, 1200);
  background(220);
  
 
  
  
  paragraph2 = createElement('p', "Created by Terry Shvartsman - 1/11/21")
  paragraph3 = createElement('p', "Bard Highschool Early College Manhattan")
  
  
  font1 = loadFont("Bold.ttf")
  font2 = loadFont("Script.ttf")
  font3 = loadFont("Arial.ttf")
  
  ACV = loadImage("ACV.jpg") //mc running, might not use
  Cover = loadImage("Cover.jpg")//Top Right Image - Cover Image
  November = loadImage("November.jpg")
  Weapons = loadImage("Weapons.jpg")
  games = loadImage("games.jpg")
 
}

function draw() {
  background(220);
  
  strokeWeight(9)
  fill (255,153,51);
  rect(0,0,900,700); //large outline box
  
  strokeWeight(5);
  fill(255,153,111);
  rect(0,700,450,500);//left small outline box
  
  fill (255,191,110);
  rect (450, 700,450,500); //right small outline box
  
  //Top Left Image
  image(Cover,448,5.2,448,691) 
  fill(255)
  textSize(15)
  textFont(font3)
  text("Assassin's Creed Wikipidea - en.wikipedia.org", 450, 690)

  //Title
  textFont(font2)
  fill(15,82,186)
  textSize(55)
  text("Assasin's",77.5,62.5)
  
  fill(73,185,96)
  text("Creed", 240,67.5)
  
  fill(160,0,0)
  text("Valhalla",133,115)
  
  //Ellipse Around Title
  fill(0,225,225,40)
  ellipse(220,67.5,400,116)
  
  //Picture Under Title
  fill(0)
  textSize(40)
  textFont(font1)
  text("The 11th Official Game",35,179)
  text("of the Series!",110,235)
  image(games,4,250,444,445.5)
  
    //Two Quad's Covering Picture under Title
  fill(30,225,225,70)
  strokeWeight(0)
  quad(25,132,10,187,440,187,425,132)
  quad(10,185,25,245,425,245,440,185)
  
  //Credits to Top Left Image
  fill(0)
  textFont(font3)
  textSize(15)
  text("games 1-10 - www.reddit.com",5,693)  
  
  //Bottom Left Image
  image(Weapons,20,710,407,250)
  textFont(font1)
  textSize(30)
  fill(0)
  
  //Text Under Bottom Left Image
  text("Now Including:",133.5,1125)
  fill(115,57,172)
  textStyle(NORMAL)
  text("Flails, War Hammers, and",57,1160) 
  text("Dual Wielding For the First Time!",20,1190)
  
  //Credits for Bottom Left Image
  fill(0)
  textSize(15)
  textFont(font3)
  text("www.reddit.com",23,724)
  
    //Arrows and Titles of Things in Bottom Left Image
  strokeWeight(1)
  line(132,1126,315,1128)
  
  triangle(95,970,80,980,110,980)
  triangle(180,965,170,980,200,975)
  triangle(355,970,340,980,370,980)
  
  strokeWeight(4)
  line(95,980,95,1000)
  line(181,968,190,1000)
  line(355,980,355,1000)
  
  textSize(15)
  textFont(font1)
  text("Dual Wielding",55,1020)
  text("Flail", 178,1020)
  text("Warhammer",315,1020)
  
  //Bottom Right image, Text, and Shapes
  image(November,453,750,444,447)
  textFont(font2)
  textSize(40)
  text("Releasing 11/20!",580,740)
  fill(0,0)
  
  //Shapes On Calendar Image
  ellipse(612.5,946,58,58)
  fill(225,0,0)
  line(593,968,628,925)
  line(592,922,633,967)
  
}