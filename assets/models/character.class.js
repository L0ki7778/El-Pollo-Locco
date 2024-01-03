
class Character extends MovableObject {
    x = 50;
    y = 200;
    default_positionY = 200;
    speed = 5;
    world;
    isJumping = false;
    isTrowing = false;
    jumpImage = 0;
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
        "/assets/img/2_character_pepe/3_jump/J-33.png",
        "/assets/img/2_character_pepe/3_jump/J-34.png",
        "/assets/img/2_character_pepe/3_jump/J-34.png",
        "/assets/img/2_character_pepe/3_jump/J-34.png",
        "/assets/img/2_character_pepe/3_jump/J-35.png",
        "/assets/img/2_character_pepe/3_jump/J-36.png",
        "/assets/img/2_character_pepe/3_jump/J-37.png",
        "/assets/img/2_character_pepe/3_jump/J-37.png",
        "/assets/img/2_character_pepe/3_jump/J-38.png",
        "/assets/img/2_character_pepe/3_jump/J-39.png"
    ];

    IMAGES_DEAD = [
        "/assets/img/2_character_pepe/5_dead/D-51.png",
        "/assets/img/2_character_pepe/5_dead/D-52.png",
        "/assets/img/2_character_pepe/5_dead/D-53.png",
        "/assets/img/2_character_pepe/5_dead/D-54.png",
        "/assets/img/2_character_pepe/5_dead/D-55.png",
        "/assets/img/2_character_pepe/5_dead/D-56.png",
        "/assets/img/2_character_pepe/5_dead/D-57.png"
    ];

    IMAGES_HURT = [
        "/assets/img/2_character_pepe/4_hurt/H-41.png",
        "/assets/img/2_character_pepe/4_hurt/H-42.png",
        "/assets/img/2_character_pepe/4_hurt/H-43.png"
    ]

    constructor() {
        super();
        this.loadImage("/assets/img/2_character_pepe/2_walk/W-21.png");
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
        this.applyGravity();
    }

    
    animate() {
        setInterval(() => {
            if (this.world.keyboard.KEY_RIGHT && this.x + this.width / 2 < this.world.level.level_limit) {
                this.moveRight();
                this.takeStatusBars();
                if (this.y == this.default_positionY) {
                    this.walking_sound.play();
                }
            }
            if (this.world.keyboard.KEY_LEFT && this.x > 0 + this.width / 2) {
                this.moveLeft();
                this.takeStatusBars();
                this.otherDirection = true;
                if (this.y == this.default_positionY) { this.walking_sound.play(); }
            }
            if (this.world.keyboard.KEY_UP && this.y == this.default_positionY) {
                this.jump();
            }
            if (this.world.keyboard.KEY_THROW) {
                if (!this.isTrowing) {
                    this.throw();
                }
            }
            this.world.camera_x = -this.x + this.width / 2;
            this.offset = {
                width: 40,
                height: 130,
                x: this.x+30,
                y: this.y+100
            };
        }, 1000 / 60);


        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            }
            else if (this.isJumping) {
                this.playJumpAnimation(this.IMAGES_JUMPING);
            } else {
                if (this.world.keyboard.KEY_RIGHT || this.world.keyboard.KEY_LEFT) {
                    console.log("keypressed")
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 80);
    }

    jump() {
        if (!this.isJumping && this.y == this.default_positionY) {
            this.jumping_sound.play();
            this.speedY = 20;
            this.isJumping = true;
            setTimeout(() => {
                this.isJumping = false;
                this.jumpImage = 0;
            }, 740);
        }
    }

    playJumpAnimation(image) {
        let i = this.jumpImage % image.length;
        let path = image[i];
        this.img = this.imageCache[path];
        this.jumpImage++;
        if (i === image.length - 1) {
            this.isJumping = false;
        }
    }


    takeStatusBars() {
        this.world.bars.forEach(element => {
            element.x = this.x - 40
        });
    }

    throw() {
        this.world.throwableObjects[0].throw(this.x + 30, this.y + 100)
        this.isTrowing = true;
        setTimeout(() => {
            this.isTrowing = false;
        }, 1000);
    }
}
