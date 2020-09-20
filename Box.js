/*
Rectangles class is that craetes rectangles (for the ground)
*/

class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          friction:0.1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;

      this.color1 = random(100,255)
      this.color2 = random(100,255)
      this.color3 = random(100,255);

      //Add to world
      World.add(world, this.body);
    }

  
  score(){
    if(this.Visiblity <= 0){
      //console.log("yes");
      return 1;
    }
    else{
      //console.log("no");
      return 0;
    }
  }  

  display(){
    if(this.body.speed < 3){
      // var r = random(0,255);
      // var g = random(0,255);
      // var b = random(0,255);
      fill(rgb(this.color1,this.color2,this.color3));
      rectMode(CENTER);
      //create rectanales using parameters giving in sketch.js
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
      //  World.remove(world, this.body);

       pop();
     }
  }
}