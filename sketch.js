var helicopterIMG, helicopterSprite;
var packageSprite,packageIMG, packageBody;
var ground, groundSprite;
var cwall1,cwall2,cwall3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 80, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-20, width,15);
	groundSprite.shapeColor=("blue");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 80 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	cwall1= new scontainer(290.3,625,20,100);
	cwall2= new scontainer(400,670,200,20);
	cwall3= new scontainer(500,625,20,100);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("lightblue");

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  cwall1.display();
  cwall2.display();
  cwall3.display();
  drawSprites();
 
}

function keyPressed() {

 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
	}
}