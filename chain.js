class chain{
    constructor(bodyA, b){
        var options = {
            bodyA: bodyA,
            pointB: b,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Chain.create(options);
        this.pointB = b;
        World.add(world, this.chain);
    }

    fly()
    {
        this.chain.bodyA = null;
    }

    display(){
        strokeWeight(4);
        if(this.chain.bodyA)
        {
          var pointA = this.chain.bodyA.position;
          line(pointA.x,pointA.y, this.pointB.x,this.pointB.y);
        }
    }
    
}