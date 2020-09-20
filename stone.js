class Hex {
    constructor(x, y, diameter) {
      var options = {  
        isStatic:false,
        restitution: 0.3,
        friction:0.5,
        density:1.2
      }
      this.body = Bodies.circle(x, y, diameter/2, options);
      this.diameter = diameter;
      this.image = loadImage("Hexagon.png");
      
      
      //Add to world
      World.add(engine.world, this.body);
    }
    
    display(){
        imageMode(CENTER);

        //Display stone as image with given values in sketch.js

        //circle(this.body.position.x, this.body.position.y, this.diameter)
        image(this.image, this.body.position.x, this.body.position.y, this.diameter);
    }
}
  