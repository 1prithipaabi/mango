
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5;
var world,boy;
var stone;
var slingshot;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,150,30);
	mango3=new mango(1100,200,30);
	mango4=new mango(900,200,30);
	mango5=new mango(1200,200,30);

	stone = new Stone(200,300,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  
  slingshot = new SlingShot(stone.body,{x:220, y:400});
	Engine.run(engine);
	//slingshot = new SlingShot(stone.body,{x:200, y:50});
}



function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  stone.display();
  groundObject.display();
}

function mouseDragged(){

        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
   
}


function mouseReleased(){
    slingshot.fly();
    //gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       //slingshot.attach(stone.body);
       Matter.Body.setPosition(stone.body, {x:235,y:420});
       launcherObject.attach(stone.body);
    }
}

function detectCollision(Lstone,mango){
mangoBodyPosition = mango.body.position;
stoneBodyPosition = Lstone.body.position;

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance<=mango.r +Lstone.r){
    Matter.Body.setStatic = (mango.body, false)
  }
}
