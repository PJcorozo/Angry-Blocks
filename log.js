class Log {
    constructor(x, y, height, angle) {
      var options = {
          'restitution':0.01,
          'friction':1.4,
          'density':1.8
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      //applies the given angle to the log
      Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("yellow")
      strokeWeight(5)
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  