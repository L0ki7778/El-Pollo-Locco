class Character extends MovableObject {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    THROW = false;
    default_y = 200;
    noSpeed = 0;
    currentImage = 0;
    walkInterval;

    walking_sound = new Audio('/assets/audio/step.mp3');
    jumping_sound = new Audio('/assets/audio/jump.mp3');
    throwing_sound = new Audio('/assets/audio/throw.mp3');

    IMAGES_WALKING = [
        "/assets/img/2_character_pepe/2_walk/W-21.png",
        "/assets/img/2_character_pepe/2_walk/W-22.png",
        "/assets/img/2_character_pepe/2_walk/W-23.png",
        "/assets/img/2_character_pepe/2_walk/W-24.png",
        "/assets/img/2_character_pepe/2_walk/W-25.png",
        "/assets/img/2_character_pepe/2_walk/W-26.png"
    ];

    IMAGES_JUMPING = [
        "assets/img/2_character_pepe/3_jump/J-31.png",
        "assets/img/2_character_pepe/3_jump/J-32.png",
        "assets/img/2_character_pepe/3_jump/J-33.png",
        "assets/img/2_character_pepe/3_jump/J-34.png",
        "assets/img/2_character_pepe/3_jump/J-35.png",
        "assets/img/2_character_pepe/3_jump/J-36.png",
        "assets/img/2_character_pepe/3_jump/J-37.png",
        "assets/img/2_character_pepe/3_jump/J-38.png",
        "assets/img/2_character_pepe/3_jump/J-39.png"
    ]


    constructor(position_x, position_y) {
        super(position_x, position_y);
        this.speed = 3;
        this.loadImage("/assets/img/2_character_pepe/2_walk/W-21.png");
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
    }

    returnCharacterXPosition() {
        X = this.x
    }


    walkRight(speed) {
        this.walkInterval = setInterval(() => {
            // this.walking_sound.play()
            if (X < 280)
                this.x += speed;
            this.returnCharacterXPosition()
        }, 100 / 6);
        this.movementAnimation(6, this.IMAGES_WALKING)
        this.otherDirection = false;
    }


    walkLeft(speed) {
        this.walkInterval = setInterval(() => {
            // this.walking_sound.play()
            if (this.x > 0 && bgX >= 0) {
                this.x -= speed;
                this.returnCharacterXPosition()
            }
            this.movementAnimation(6, this.IMAGES_WALKING)
        }, 100 / 6);
        this.otherDirection = true;
    }

    stopWalking() {
        clearInterval(this.walkInterval);
        clearInterval(this.movement_interval);
        this.movement_interval = null;
        this.walkInterval = null;
        console.log("cleared")
    }


    jump() {
        clearInterval(this.gravity_interval)
        console.log(this.y)
        if (this.isAboveGround()) {
            this.jumping_sound.play();
            this.y = 100;
            this.movementAnimation(9, this.IMAGES_JUMPING);
            this.applyGravity();
        }

        let interval = setInterval(() => {
            if (!this.isAboveGround()) {
                clearInterval(this.gravity_interval);
                this.movementAnimation(6, this.IMAGES_WALKING)
                clearInterval(this.movement_interval);
                this.img = this.imageCache[this.IMAGES_JUMPING[0]];
                this.y = 200;
                clearInterval(interval);
            }
        }, 1000 / 25);
    }


    throw() {
        this.throwing_sound.play()
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
                this.jump()
                break;
            case "ArrowDown":
                this.DOWN = true;
                console.log("ArrowDown" + this.DOWN)
                break;
            case "Space":
                this.SPACE = true;
                this.throw()
                break;
            case "ShiftLeft":
                this.THROW = true;
                this.throw()
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

