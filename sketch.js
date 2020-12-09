
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Chain = Matter.Constraint;
const Body = Matter.Body;

var tree,treeImg;
var stone;
var player,playerImg;
var Mango1,Mango2,Mango3,Mango4,Mango5;

function preload()
{
	treeImg = loadImage("sprites/tree.png");
	playerImg = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree = createSprite(600,350,30,200);
	tree.scale = 0.5
	tree.addImage(treeImg)

	player = createSprite(150,630,20,20);
	player.scale = 0.05;
	player.addImage(playerImg);

	//Create the Bodies Here.
	stone = new Stone(120,600,40,40);
	chain1 = new chain(stone.body,{x:120,y:600})

	floor = new Ground(400,680,800,20);

	Mango1 = new mango(600,350,50,50);
	Mango2 = new mango(710,360,50,50);
	Mango3 = new mango(500,370,50,50);
	Mango4 = new mango(400,360,50,50);
	Mango5 = new mango(380,340,50,50);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background(255);

  floor.display();

  stone.display();

  Mango1.display();
  Mango2.display();
  Mango3.display();
  Mango4.display();
  Mango5.display();
  
  drawSprites();
 
}

function mouseDragged()
{
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  chain1.fly();
  console.log("hello");
}


