const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
var engine, world;
var bg, bgImg
var snowImage
var snow1, snow2, snow3, snow4, snow5, snow6, snow7, snow8, snow9, snow10

function preload(){
  bgImg = loadImage("snow3.jpg")

}
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  snow1=new Snow(random(100,700), 0, 10, 10) 
  snow2=new Snow(random(100,700), 0, 10, 10) 
  snow3=new Snow(random(100,700), 0, 10, 10) 
  snow4=new Snow(random(100,700), 0, 10, 10) 
  snow5=new Snow(random(100,700), 0, 10, 10) 
  snow6=new Snow(random(100,700), 0, 10, 10) 
  snow7=new Snow(random(100,700), 0, 10, 10) 
  snow8=new Snow(random(100,700), 0, 10, 10) 
  snow9=new Snow(random(100,700), 0, 10, 10) 
  snow10=new Snow(random(100,700), 0, 10, 10) 
}

function draw() {
  background(bgImg)
  Engine.update(engine)
  snow1.display()
  snow2.display()
  snow3.display()
  snow4.display()
  snow5.display()
  snow6.display()
  snow7.display()
  snow8.display()
  snow9.display()
  snow10.display()


}  
  