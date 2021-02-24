class Paper{
  constructor (x,y){
     var options = {
      'isStatic' : false,
      'resistution' : 0.3,
      'friction' : 0.5,
      'density' : 0.3
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    this.image = loadImage("paper.png");
    World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, this.radius);
      pop();
    
    }
};