
class Character extends MovableObject {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    THROW = false;
    noSpeed = 0;
    currentImage = 0;
    walkInterval;
    animationInterval;

    IMAGES_WALKING = [
        "/assets/img/2_character_pepe/2_walk/W-21.png",
        "/assets/img/2_character_pepe/2_walk/W-22.png",
        "/assets/img/2_character_pepe/2_walk/W-23.png",
        "/assets/img/2_character_pepe/2_walk/W-24.png",
        "/assets/img/2_character_pepe/2_walk/W-25.png",
        "/assets/img/2_character_pepe/2_walk/W-26.png"
    ];

    constructor(position_x, position_y) {
        super(position_x, position_y);
        this.speed = 3;
        this.loadImage("/assets/img/2_character_pepe/2_walk/W-21.png");
        this.loadImages(this.IMAGES_WALKING);
    }

    animate() {
        if (!this.animationInterval) {
            this.animationInterval = setInterval(() => {
                let i = this.currentImage % 6;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }, 100);
        }
    }


    returnCharacterXPosition(){
        X=this.x
    }

    
    walkRight(speed) {
        if (!this.walkInterval) {
            this.walkInterval = setInterval(() => {
                if(X<280)
                this.x += speed;
                this.returnCharacterXPosition()
            }, 1000 / 60);
            this.otherDirection=false;
        }
        this.animate()
    }

    walkLeft(speed) {
        speed=speed;
        if (!this.walkInterval) {
            this.walkInterval = setInterval(() => {
                if(this.x>0 && bgX>=0){
                this.x -= speed;
                this.returnCharacterXPosition()
            }
            }, 1000 / 60);
            this.otherDirection=true;
        }
        this.animate()
    }

    stopWalking() {
        clearInterval(this.walkInterval);
        clearInterval(this.animationInterval);
        this.animationInterval = null;
        this.walkInterval = null;
        console.log("cleared")

    }































    
    keyPushed(code) {
        switch (code) {
            case "ArrowLeft":
                this.LEFT = true;
                this.walkLeft(this.speed);
                break;
            case "ArrowRight":
                this.RIGHT = true;
                this.walkRight(this.speed);
                break;
            case "ArrowUp":
                this.UP = true;
                console.log("ArrowUp" + this.UP)
                break;
            case "ArrowDown":
                this.DOWN = true;
                console.log("ArrowDown" + this.DOWN)
                break;
            case "Space":
                this.SPACE = true;
                console.log("Space" + this.SPACE)
                break;
            case "Shift":
                this.THROW = true;
                console.log("Shift" + this.THROW)
                break;
        }
    }

    keyReleased(code) {
        switch (code) {
            case "ArrowLeft":
                this.LEFT = false;
                this.stopWalking()
                console.log("ArrowLeft" + this.LEFT)
                break;
            case "ArrowRight":
                this.RIGHT = false;
                this.stopWalking()
                console.log("ArrowRight" + this.RIGHT)
                break;
            case "ArrowUp":
                this.UP = false;
                console.log("ArrowUp" + this.UP)
                break;
            case "ArrowDown":
                this.DOWN = false;
                console.log("ArrowDown" + this.DOWN)
                break;
            case "Space":
                this.SPACE = false;
                console.log("Space" + this.SPACE)
                break;
            case "Shift":
                this.THROW = false;
                console.log("Shift" + this.THROW)
                break;
        }
    }
}

