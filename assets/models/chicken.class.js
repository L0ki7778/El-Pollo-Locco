class Chicken extends MovableObject {
    shiftInterval
    shiftSpeed=2.5;
    IMAGES_WALKING = [
        "/assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
        "/assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
        "/assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
    ];
    currentImage = 0;

    constructor(position_x, position_y) {
        super(position_x, position_y);
        this.loadImage("/assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png");
        this.height = 50;
        this.width = 50;
        this.speed = 0.15 + Math.random() * 0.5;
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate() {
        this.moveLeft(this.speed);
        setInterval(() => {
            let i = this.currentImage % 3;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }
    eat() { }

    animateRight() {
        this.shiftRight(this.shiftSpeed)
    }

    animateLeft() {
        this.shiftLeft(this.shiftSpeed)
    }

    
    shiftRight(speed) {
        if (X >= 280) {
            if (!this.shiftInterval) {
                this.shiftInterval = setInterval(() => {
                        this.x -= speed;
                }, 1000 / 60);
            }
        }
    }


    shiftLeft(speed) {
        speed = speed;
        if (!this.shiftInterval) {
            this.shiftInterval = setInterval(() => {
                if(bgX<=0){
                    this.x += speed;}
            }, 1000 / 60);
        }
    }

    stopAnimation() {
        clearInterval(this.shiftInterval);
        this.shiftInterval = null;
    }


    keyPushed(code) {
        switch (code) {
            case "ArrowLeft":
                this.LEFT = true;
                this.animateLeft()
                break;
            case "ArrowRight":
                this.RIGHT = true;
                this.animateRight()
                break;
        }
    }


    keyReleased(code) {
        switch (code) {
            case "ArrowLeft":
                this.LEFT = false;
                this.stopAnimation()
                console.log(this.position_x)
                break;
            case "ArrowRight":
                this.RIGHT = false;
                this.stopAnimation()
                break;
        }
    }

}