class ThrowableObject extends MovableObject {
    throwableObjects = [];
    default_positionY = 600;
    speed = this.speedY;
    throwId;
    broken=false;
    rotationX;
    rotationY;
    rotation = 1;
    rotationSpeed = .2;
    collision_sound= new Audio("/assets/audio/glass.mp3")


    
    constructor() {
        super();
        this.x = -100;
        this.y = -100;
        this.loadImage("assets/img/6_salsa_bottle/salsa_bottle.png");
        this.width = 50;
        this.height = 50;
    }


    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 23;
        this.speedX = 10;
        this.applyGravity();
        this.throwId = interval.call(this, this.throwInterval, 1000 / 60) 
    }

    
    throwInterval(){
        this.x += this.speedX;
        this.updateRotation();
        if (this.y >= this.default_positionY||this.broken ) {
            this.x += 0
            clearInterval(this.throwId);
        }
    }


    break(){
        this.broken = true;
        this.collision_sound.play();
        setTimeout(() => {
            this.broken = false;
        }, 60);
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