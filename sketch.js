var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1500,400);
  
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50, 200, 10, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "white";
  
}

function draw() {
  background("pink");
  
  if (hasCollided(bullet,  wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * bulletWeight * bulletSpeed * bulletSpeed/(thickness * thickness * thickness);

    if(damage > 10) {
      wall.shapeColor = "red";
    }

   
    if(damage < 10) {
      wall.shapeColor = "green";
    }
 }
    
  hasCollided();
  drawSprites();
} 

function hasCollided(bullet, wall) {
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftedge = wall.x;
  if (bulletRightEdge > wallLeftEdge) {
    return true
  }
  if (bulletRightEdge = wallLeftEdge) {
    return true
  }
  return false;
}