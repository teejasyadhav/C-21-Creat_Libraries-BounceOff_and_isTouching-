var box1, box2;
function setup() {
  createCanvas(1600,800);
  Fixed = createSprite(600,400, 50, 80);
  Fixed.shapeColor = "green";
  
  Moving = createSprite(400,700, 80, 30);
  Moving.shapeColor = "green";

  ob1 = createSprite(900,30, 80, 30);
  ob1.shapeColor = "gold";

  ob2 = createSprite(450,620, 80, 30);
  ob2.shapeColor = "red";

  ob3 = createSprite(600,230, 80, 30);
  ob3.shapeColor = "lightblue";

  ob4 = createSprite(400,300, 80, 30);
  ob4.shapeColor = "orange";

}

function draw() {
  background(0,0,0);
  Moving.x = World.mouseX;
  Moving.y = World.mouseY;
  //console.log(box1.x -box2.x);
  
 // isTouching(ob1,ob2);

  if(isTouching(Moving,ob3))
  {
    ob3.shapeColor = "blue";
    Moving.shapeColor = "blue";
  }
  else
  {
    ob3.shapeColor = "lightblue";
    Moving.shapeColor = "green";
  }

  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
    object2.x - object1.x < object2.width/2 + object1.width/2 &&
    object1.y - object2.y < object2.height/2 + object1.height/2 &&
    object2.y - object1.y < object2.height/2 + object1.height/2)
  {
    return true;
  }
  else
  {
   return false;
  }
}
