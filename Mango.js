class Mango {
    constructor(x, y,radius) {
        var option = {
            isStatic: true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.circle(x, y, radius, option);
        this.radius = radius;
        this.image = loadImage("sprite/mango.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 50, 50);
    }
}