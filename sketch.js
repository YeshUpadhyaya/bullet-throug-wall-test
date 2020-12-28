var bullet,wall,thickness;
var speed,weight;



function setup() {  
  createCanvas(1600,400);
  bullet= createSprite(500,200,50,25);
  bullet.shapeColor=("white");
  thickness=random(22,83);
  wall= createSprite(1500,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
}

function draw() {
  background(0,0,0); 
bullet.velocityX=speed;
console.log(bullet.x);
damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
if ((wall.x-bullet.x)<(bullet.width+wall.width)/2){
  if(damage<10){
    bullet.shapeColor=color(0,255,0);
    bullet.x=wall.x-(wall.width/2)-(bullet.width/2);
  }
  if(damage>10){
    bullet.shapeColor=color(255,0,0);
    bullet.x=wall.x-(wall.width/2)-(bullet.width/2);
  }
}
console.log(damage);
  drawSprites();
}
