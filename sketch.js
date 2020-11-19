
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var box1,box2,box3;
var ground;
var paper;

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Dustbin(1100,600,20,200);
	box2 = new Dustbin(1200,650,200,20);
	box3 = new Dustbin(1300,600,20,200);
	box2.image = loadImage("dustbin.png");

	ground = new Ground(700,680,1400,60);

	paper = new Paper(100,600,70);

	// var render = Render.create({
	// 	element: document.body,
	// 	engine: engine,
	// 	options: {
	// 	  width: 1400,
	// 	  height: 700,
	// 	  wireframes: false
	// 	}
	//   });

	//   Render.run(render);

	
  
}


function draw() {
  background(255);

  textSize(22);
	fill("black")
	stroke("lavender");
	strokeWeight(4)
	text("USE LEFT ARROW TO MOVE THE PAPER LEFT SIDE AND RIGHT ARROW FOR RIGHT SIDE", 250, 100);
	text("YOUR GOAL IS TO CLEAR THE ENVIRONMENT BY THROWING PAPER IN DUSTBIN",300,150);
  Engine.update(engine);
 
  box1.display();
//   box2.display();
  box3.display();
  ground.display();
  paper.display();
  imageMode(CENTER);
  image(box2.image,box2.body.position.x,box2.body.position.y-(box1.height/2),box2.width,box1.height);
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-65})
	}
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:-85,y:-65})
	}
}