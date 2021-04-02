const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1;
var polygon;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(400,300,250,10);
  //stand2 = new Stand(700,300,300,10);
 
  //level one
  block1 = new Block(300,270,30,40);
  block2 = new Block(330,270,30,40);
  block3 = new Block(360,270,30,40);
  block4 = new Block(390,270,30,40);
  block5 = new Block(420,270,30,40);
  block6 = new Block(450,270,30,40);
  block7 = new Block(480,270,30,40);
  block8 = new Block(330,230,30,40);
  block9 = new Block(360,230,30,40);
  block10 = new Block(390,230,30,40);
  block11 = new Block(420,230,30,40);
  block12 = new Block(450,230,30,40);
  block13 = new Block(360,190,30,40);
  block14 = new Block(390,190,30,40);
  block15 = new Block(420,190,30,40);
  block16 = new Block(390,150,30,40);

  /*block17 = new Block(600,275,30,40);
  block18 = new Block(630,275,30,40);
  block19 = new Block(660,275,30,40);
  block20 = new Block(690,275,30,40);
  block21 = new Block(720,275,30,40);
  block22 = new Block(750,275,30,40);
  block23 = new Block(780,275,30,40);
  block24 = new Block(630,235,30,40);
  block25 = new Block(660,235,30,40);
  block26 = new Block(690,235,30,40);
  block27 = new Block(720,235,30,40);
  block28 = new Block(750,235,30,40);
  block29 = new Block(660,195,30,40);
  block30 = new Block(690,195,30,40);
  block31 = new Block(720,195,30,40);
  block32 = new Block(690,155,30,40);*/

  //set 2 for second stand
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //top
  blocks9 = new Block(700,95,30,40);

  //polygon holder with slings
  var option={
    restitution:0.4,
    friction:0.8,
    density:0.8
  }
  polygon = Bodies.circle(50,200,20,option);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
 
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);
  ground.display();
  stand1.display();
  //stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  fill("turquoise");
  block6.display();
  block7.display();
  block8.display();
  fill("pink")
  block9.display();
  /*block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display(); 
  block30.display();
  block31.display();
  block32.display();*/

  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}