const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
pig1 = new Pig(810,350)
//PI = 180 degrees
 log1= new Log (810, 260, 300, PI/2)  
    ground = new Ground(600,590,1200,20)
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
pig2 = new Pig(810,220)
//PI = 180 degrees
 log2= new Log (810, 180, 300, PI/2)  
 box5 = new Box(810,160,70,70);
 log3= new Log (760, 120, 150, PI/7) 
 log4= new Log (870, 120, 150, -PI/7)
 bird = new Bird (100, 100)
}

function draw(){
    background(255);
    Engine.update(engine);
    pig1.display()
    log1.display()
    box1.display();
    box2.display();
    pig2.display()
    log2.display()
    box3.display();
    box4.display();
    box5.display()
    log3.display()
    log4.display()
    ground.display();
    bird.display();
}