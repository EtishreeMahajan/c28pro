class Stone {
    constructor(x, y, radius) {
        var option = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, radius, option);
        this.radius = radius;
        this.image = loadImage("sprite/stone.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 50, 50);
    }
}