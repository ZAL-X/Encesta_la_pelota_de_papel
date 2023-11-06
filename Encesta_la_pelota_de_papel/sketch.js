const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide, wall;
var world;
var radius = 70;

function preload(){

	dustbinImg = loadImage("dustbin.png");
	paperImg = loadImage("paper.png");
}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		density:0.4
	}

	ball = Bodies.circle(260,100,radius/2.6,ball_options);
	World.add(world,ball);

	ground=new Ground(width/2,670,width,20);
	leftSide = new Ground(1102,540,10,180);
	rightSide = new Ground(1268,540,10,180);
	bottomSide = new Ground(1185,630,130,40);
	wall = new Ground(1590,350,10,700);
	

	Engine.run(engine);
  
}


function draw() {
	background(200);
	rectMode(CENTER);


	ground.display();
	leftSide.display();  
	rightSide.display();
	bottomSide.display();
	wall.display();
	
	imageMode(CENTER);

	image(paperImg,ball.position.x,ball.position.y,radius/2,radius/2);
	image(dustbinImg, 1185, 550, 220,220);

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(ball,ball.position,{x:0,y:-45});
	}	
    if (keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:0,y:45});
	}
	if (keyCode === RIGHT_ARROW) {
        Matter.Body.applyForce(ball,ball.position,{x:45,y:0});
	}	
    if (keyCode === LEFT_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:-45,y:0});
	}
}
