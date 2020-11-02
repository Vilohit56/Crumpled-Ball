
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(600,570,1200,20);
	
	trash1 = new Trash(1100,520,20,80);
	trash2 = new Trash(900,520,20,80); 
	trash3 = new Trash(1000,550,178,20);

	ball1 = new Ball(200,200,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ground1.display();
	trash1.display();
	trash2.display();
	trash3.display();
	ball1.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:250,y:450});

	}
}



