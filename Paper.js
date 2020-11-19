class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.8,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,(radius-20)/2,options);
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        noStroke();
        fill("red");
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}