
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var base,tree;
var junu,stone,chain;
var mango1,mango2,mango3;
var mango4,mango5,mango6;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	base = new Ground(600,480,1200,20);
	junu = new Boy(200,390,120,150);
	stone = new Stone(10,10);
	stone.scale = 0.05
	tree = new Tree(1030,250,350,440);
	mango1 = new Mango(1030,150,50,50);
	mango2 = new Mango(950,150,50,50);
	mango3 = new Mango(1090,170,50,50);
	mango4 = new Mango(940,250,50,50);
	mango5 = new Mango(1100,100,30,30);
	mango6 = new Mango(1120,230,40,40);
	chain = new slingshot(junu.body,{x:200,y:120});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  
  drawSprites();
  base.display();
  junu.display();
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  chain.display();
  detectCollision(mango1,stone);
  detectCollision(mango2,stone);
  detectCollision(mango3,stone);
  detectCollision(mango4,stone);
  detectCollision(mango5,stone);
  detectCollision(mango6,stone);
}
function detectCollision(stone,mango){
mangoBodyPosition = mango.body.position
stoneBodyPosition = stone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<= stone.r+ mango.r)
{
Matter.body.setStatic(mango.body,false)
}
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	}
	function mouseReleased(){
	chain.fly(); 
	}


