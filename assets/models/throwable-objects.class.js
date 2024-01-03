class ThrowableObject extends MovableObject {
    throwableObjects = [];
    default_positionY = 600;
    speed = this.speedY;
    accelearion = 1;
    rotationX;
    rotationY;
    rotation = 1;
    rotationSpeed = .2;
    
    constructor() {
        super();
        this.x = -100;
        this.y = -100;
        this.loadImage("assets/img/6_salsa_bottle/salsa_bottle.png");
        this.width = 50;
        this.height = 50;
        // this.updateRotation();
    }

    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 23;
        this.speedX = 10;
        this.applyGravity();
        let throw_interval = setInterval(() => {
            this.x += this.speedX;

            this.updateRotation();
            if (this.y >= this.default_positionY) {
                this.x += 0
                clearInterval(throw_interval);
            }
        }, 1000 / 60);
    }

    updateRotation() {
        this.offset = {
            width: 20,
            height: 45,
            x: this.x+15,
            y: this.y+3
        }
        this.rotation += this.rotationSpeed;
    }

}