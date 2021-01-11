//Used in StartingScreen.js
var SS
//Used in StartingScreen and Contestant
var contestant
var Count
var AllC
var gameState = 0;
var B1, B2, B3, B4
var B1I, B2I, B3I, B4I
var Bikes;
var viewI;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  B1I = loadImage('images/Bike1.png')
  B2I = loadImage('images/Bike2.png')
  B3I = loadImage('images/Bike.png')
  B4I = loadImage('images/Bike4.png')
  viewI = loadImage('images/First person view')
}

function setup() {
	createCanvas(displayWidth - 20, displayHeight-30);


	engine = Engine.create();
	world = engine.world;
    SS = new StartingScreen();
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  //background(0);

  if(World.frameCount % 60 === 0){
    textSize(15)
    for(var i = 5; i<0; i--){
      text(i,displayWidth/2, displayHeight/2)
    }
  }
  //Calling the function 'Display' and displaying the things that needs to be seen by the player
  SS.display()
  drawSprites();
 
}



