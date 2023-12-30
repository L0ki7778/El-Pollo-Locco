
class Character extends MovableObject {
    x = 50;
    y = 100;
    default_positionY = 200;
    speed = 5;
    world;
    walking_sound = new Audio("/assets/audio/step.mp3");
    jumping_sound = new Audio("/assets/audio/jump.mp3");
    throwing_sound = new Audio("/assets/audio/throw.mp3");

    IMAGES_WALKING = [
        "/assets/img/2_character_pepe/2_walk/W-21.png",
        "/assets/img/2_character_pepe/2_walk/W-22.png",
        "/assets/img/2_character_pepe/2_walk/W-23.png",
        "/assets/img/2_character_pepe/2_walk/W-24.png",
        "/assets/img/2_character_pepe/2_walk/W-25.png",
        "/assets/img/2_character_pepe/2_walk/W-26.png"
    ];

    IMAGES_JUMPING = [
        "/assets/img/2_character_pepe/3_jump/J-31.png",
        "/assets/img/2_character_pepe/3_jump/J-32.png",
        "/assets/img/2_character_pepe/3_jump/J-33.png",
        "/assets/img/2_character_pepe/3_jump/J-34.png",
        "/assets/img/2_character_pepe/3_jump/J-35.png",
        "/assets/img/2_character_pepe/3_jump/J-36.png",
        "/assets/img/2_character_pepe/3_jump/J-37.png",
        "/assets/img/2_character_pepe/3_jump/J-38.png",
        "/assets/img/2_character_pepe/3_jump/J-39.png"
    ];

    constructor() {
        super();
        this.loadImage("/assets/img/2_character_pepe/2_walk/W-21.png");
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.animate();
        this.applyGravity();
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.KEY_RIGHT && this.x + this.width / 2 < this.world.level.level_limit) {
                this.moveRight()
                if (this.y == this.default_positionY) {
                    this.walking_sound.play();
                }
            }
            if (this.world.keyboard.KEY_LEFT && this.x > 0 + this.width / 2) {
                this.moveLeft();
                this.otherDirection = true;
                if (this.y == this.default_positionY) { this.walking_sound.play(); }
            }
            if (this.world.keyboard.KEY_UP && this.y == this.default_positionY) {
                this.jump();
            }
            this.world.camera_x = -this.x + this.width / 2;
        }, 1000 / 60);


        setInterval(() => {
            if (this.isAboveGround(this.default_positionY)) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                if (this.world.keyboard.KEY_RIGHT || this.world.keyboard.KEY_LEFT) {
                    console.log("keypressed")
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 60);
    }





   

    jump() {
        this.jumping_sound.play();
        this.speedY = 20;
    }
}
