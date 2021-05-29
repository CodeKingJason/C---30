class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255
  }

  display(){
    console.log(this.body.speed);

  if (this.body.speed < 2.5){
   // super.display(); is for the inheritence of the properties in the Baseclass
   super.display();
  }  
  
  else{
  World.remove(world,this.body);
  // the tint effect makes the pigs trasperent
  // push and pop are for temporary effects
  push();
  this.visibility -= 10
  tint(255, this.visibility);
  image(this.image, this.body.position.x,this.body.position.y, 50, 50);
  pop();
  }
 
  }

};