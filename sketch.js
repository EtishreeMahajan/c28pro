const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var boy, boyImg;
function preload() {
  boyImg = loadImage("sprite/boy.png");
}

function setup() {
  createCanvas(1200, 600);

  engine = Engine.create();
  world = engine.world;

  boy = Bodies.circle(300, 545, 20, { isStatic: true });
  World.add(world, boy);

  mango1 = new Mango(820, 95, 2);
  mango2 = new Mango(995, 85, 2);
  mango3 = new Mango(910, 90, 2);
  mango4 = new Mango(700, 190, 2);
  mango5 = new Mango(670, 270, 2);
  mango6 = new Mango(760, 310, 2);
  mango7 = new Mango(855, 260, 2);
  mango8 = new Mango(950, 240, 2);
  mango9 = new Mango(1050, 240, 2);
  mango10 = new Mango(1130, 285, 2);
  mango11 = new Mango(1120, 205, 2);
  mango12 = new Mango(1050, 150,2);
  mango13 = new Mango(780, 170,2);
  mango14 = new Mango(770, 240,2);
  mango15 = new Mango(865, 180,2);
  mango16 = new Mango(955, 170,2);
  tree = new Tree(600, 10, 40, 20);
  ground = new Ground(600, 575, 1200, 50);
  stone = new Stone(38, 490, 20);
  elas = new Elastic(stone.body, { x: 240, y: 490 });
  Engine.run(engine);
}

function draw() {
  background("skyblue");

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  mango16.display();
 
  imageMode(CENTER);
  image(boyImg, boy.position.x, boy.position.y, 200, 200);
  stone.display();
  elas.display();
  detectollision(stone, mango1);
  detectollision(stone, mango2);
  detectollision(stone, mango3);
  detectollision(stone, mango4);
  detectollision(stone, mango5);
  detectollision(stone, mango6);
  detectollision(stone, mango7);
  detectollision(stone, mango8);
  detectollision(stone, mango9);
  detectollision(stone, mango10);
  detectollision(stone, mango11);
  detectollision(stone, mango12);
  detectollision(stone, mango13);
  detectollision(stone, mango14);
  detectollision(stone, mango15);
  detectollision(stone, mango16);
  drawSprites();
}

function detectollision(stone, mango) {
  mangoBodyPosition = mango.body.position;
  stoneBodyPosition = stone.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

  if (distance <= mango.radius + stone.radius) {
    Matter.Body.setStatic(mango.body, false);
  }
}

function mouseDragged() {
  Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  elas.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    elas.attach(stone.body);
  }
}