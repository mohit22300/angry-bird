const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var ground;
var log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(920,300,70,70);
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig(810,340);
    log1 = new Log(800,250,300,PI/2);
    box3 = new Box(700,200,70,70);
    box4 = new Box(920,200,70,70);
    pig2 = new Pig(810,220);
    log2 = new Log(800,180,300,PI/2);
    box5 = new Box(810,150,70,70);
    log3 = new Log(750,120,150,PI/4);
    log4 = new Log(920,120,150,-PI/4);



}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}