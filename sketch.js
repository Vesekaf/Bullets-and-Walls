var bullet, wall, thickness;
var speed, weight;
var bulletDamadge, thicc, damadge;



function setup() {
  createCanvas(1600,400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);
  bullet = createSprite(100, 200, 40, 25);
  wall = createSprite(1200, 200, thickness+25, height/2);
  bullet.velocityX = speed;
  bulletDamadge = (0.5*weight*speed*speed);
  thicc = (thickness* thickness*thickness);
  damadge = (bulletDamadge/thicc);
}

function draw() {
  background(0, 0, 0);  
  wall.shapeColor = (80, 80, 80);
  fill(255, 255, 255)
  text("Weight:  " + weight, 400, 50);
  text("Speed:   " + speed, 600, 50);
  text("Thickeness:   " + thickness, 800, 50);
  if (collide(wall, bullet)){

    
      bullet.velocityX = 0;
      text("Damadge to Wall:   " + damadge, 100, 50);
      
      if(damadge < 10){

        wall.shapeColor = "green";
        text

      }
      if(damadge > 10){
        wall.shapeColor = "red";
      }
  }


  drawSprites();

  
}

function collide(object1, object2){


  if(object1.x - object2.x < object1.width/2 + object2.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2){

      return  true;

    
    
      
    
}
else{ 
  return  false;
}
}

