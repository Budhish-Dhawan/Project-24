
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var box1Sprite, box1Body, box2Sprite, box2Body, box3Sprite, box3Body;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	paper1 = new Paper(50, height-55, 40);

	box1Sprite = createSprite(width/2, height-50, 200, 20);
	box1Sprite.shapeColor = ("red");

	box2Sprite = createSprite(300, height-90, 20, 100);
	box2Sprite.shapeColor = ("red");

	box3Sprite = createSprite(500, height-90, 20, 100);
	box3Sprite.shapeColor = ("red");

	box1Body = Bodies.rectangle(width/2, height-50, 200, 20, {isStatic:true});
	World.add(world, box1Body);

	box2Body = Bodies.rectangle(300, height-90, 20, 100);
	World.add(world, box2Body);

	box3Body = Bodies.rectangle(500, height-90, 20, 100);
	World.add(world, box3Body);

	ground = Bodies.rectangle(width/2, 650, width, 10, {isStatic:true});
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper1.body, paper1.body.position,{x:30,y:-6});
  }
   
  paper1.display();

  drawSprites();
  //display();
 
}



