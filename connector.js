class Connector{
    constructor(body1,body2){
        var options={
            bodyA:body1,
            bodyB:body2,
        }
        this.body1 = body1;
        this.body2 = body2;

        this.ropeC = Constraint.create(options);

        //Add to world
        World.add(world, this.ropeC);
        }

    fly(){
        this.ropeC.bodyA = null;
    }

    attach(body1){
        this.ropeC.bodyA = body1;
    }

    display(){;
        stroke("white");
    }
}