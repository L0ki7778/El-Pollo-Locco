
class Character extends MovableObject {
    world;
    x = 50;
    y = 200;
    healthBar;
    health_percentage;
    default_positionY = 200;
    idleTimeout;
    sleepTimeout = 4000;
    jumpImage = 0;
    isJumping = false;
    isTrowing = false;
    isSleeping = false;
    walking_sound = new Audio("/assets/audio/step.mp3");
    jumping_sound = new Audio("/assets/audio/jump.mp3");
    throwing_sound = new Audio("/assets/audio/throw.mp3");
    sleeping_sound = new Audio("/assets/audio/sleeping.mp3");

    IMAGES_WALKING = [
        "/assets/img/2_character_pepe/2_walk/W-21.png",
        "/assets/img/2_character_pepe/2_walk/W-22.png",
        "/assets/img/2_character_pepe/2_walk/W-23.png",
        "/assets/img/2_character_pepe/2_walk/W-24.png",
        "/assets/img/2_character_pepe/2_walk/W-25.png",
        "/assets/img/2_character_pepe/2_walk/W-26.png"
    ];

    IMAGES_JUMPING = [
        "/assets/img/2_character_pepe/3_jump/J-32.png",
        "/assets/img/2_character_pepe/3_jump/J-34.png",
        "/assets/img/2_character_pepe/3_jump/J-34.png",
        "/assets/img/2_character_pepe/3_jump/J-34.png",
        "/assets/img/2_character_pepe/3_jump/J-35.png",
        "/assets/img/2_character_pepe/3_jump/J-36.png",
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

    IMAGES_SLEEPING = [
        "assets/img/2_character_pepe/1_idle/long_idle/I-11.png",
        "assets/img/2_character_pepe/1_idle/long_idle/I-12.png",
        "assets/img/2_character_pepe/1_idle/long_idle/I-13.png",
        "assets/img/2_character_pepe/1_idle/long_idle/I-14.png",
        "assets/img/2_character_pepe/1_idle/long_idle/I-15.png",
        "assets/img/2_character_pepe/1_idle/long_idle/I-16.png",
        "assets/img/2_character_pepe/1_idle/long_idle/I-17.png",
        "assets/img/2_character_pepe/1_idle/long_idle/I-18.png",
        "assets/img/2_character_pepe/1_idle/long_idle/I-19.png",
        "assets/img/2_character_pepe/1_idle/long_idle/I-20.png"
    ]

    constructor() {
        super();
        this.loadImage("/assets/img/2_character_pepe/2_walk/W-21.png");
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_SLEEPING);
        this.animate();
        this.applyGravity();
        this.resetIdleTimer();
        this.speed = 5;
    }

    animate() {
        interval.call(this, this.sleeping, 1000 / 3);
        interval.call(this, this.keyBindInterval, 1000 / 60);
        interval.call(this, this.walkJumpDie, 80);
    }

    keyBindInterval() {
        this.keyRight();
        this.keyLeft();
        this.keyUp();
        this.keyThrow();
        this.camera();
    }

    sleeping() { if (this.isSleeping) this.playAnimation(this.IMAGES_SLEEPING) };

    keyRight() {
        if (this.world.keyboard.KEY_RIGHT && this.x + this.width / 2 < this.world.level.level_limit) {
            this.isWalkingRight();
            if (this.y == this.default_positionY) {
                this.walking_sound.play();
            }
        }

    }

    keyLeft() {
        if (this.world.keyboard.KEY_LEFT && this.x > 0 + this.width / 2) {
            this.isWalkingLeft();
            if (this.y == this.default_positionY) this.walking_sound.play()
        }

    }

    keyUp() {
        if (this.world.keyboard.KEY_UP && this.y == this.default_positionY) {
            this.jump();
            this.resetIdleTimer();
        }

    }

    keyThrow() {
        if (this.world.keyboard.KEY_THROW) {
            this.resetIdleTimer();
            if (this.hasBottlesAndLooksForward()) {
                this.throw();
                this.throwing_sound.play()
            }
        }
    }

    hasBottlesAndLooksForward() {
        return !this.isTrowing && this.world.throwableObjects.length > 0 && !this.otherDirection
    }

    isWalkingLeft() {
        return this.resetIdleTimer(),
            this.moveLeft(),
            this.takeStatuscharacterBars(-40),
            this.otherDirection = true
    }

    isWalkingRight() {
        return this.resetIdleTimer(),
            this.moveRight(),
            this.takeStatuscharacterBars(-40),
            this.isSleeping = false;
    }

    camera() {
        return (
            this.world.camera_x = -this.x + this.width / 2,
            this.offset = {
                width: 40,
                height: 130,
                x: this.x + 30,
                y: this.y + 100
            }
        )
    }

    walkJumpDie() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
        }
        else if (this.isJumping) {
            this.playJumpAnimation(this.IMAGES_JUMPING);
        } else {
            if (this.world.keyboard.KEY_RIGHT || this.world.keyboard.KEY_LEFT) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }
    }

    jump() {
        if (this.isStanding()) {
            this.startsJumping();
            this.endsJumping();
        }
    }

    isStanding() {
        return !this.isJumping && this.y == this.default_positionY
    }

    startsJumping() {
        this.isJumping = true;
        this.jumping_sound.play();
        this.speedY = 20;
    }

    endsJumping() {
        let backkOnGround_interval = setInterval(() => {
            if (this.y == this.default_positionY) {
                this.jumpImage = 0;
                this.loadImage(this.IMAGES_JUMPING[0]);
                clearInterval(backkOnGround_interval);
            }
        }, 200);
    }

    playJumpAnimation(image) {
        let i = this.jumpImage % image.length;
        let path = image[i];
        this.img = this.imageCache[path];
        this.jumpImage++;
    }


    takeStatuscharacterBars(x) {
        this.world.bossBar.x = this.x + 480
        this.world.characterBars.forEach(element => {
            element.x = this.x + x
        });
    }


    throw() {
        this.world.throwableObjects[0].throw(this.x + 30, this.y + 100)
        this.world.characterBars[1].percentage += 20
        this.world.characterBars[1].setPercentage(this.world.characterBars[1].percentage)
        this.isTrowing = true;
        setTimeout(() => {
            this.world.throwableObjects.pop();
            this.isTrowing = false;
        }, 1000);
    }

    startIdleTimer() {
        this.idleTimeout = setTimeout(() => {
            this.isSleeping = true;
        }, this.sleepTimeout);
    }

    resetIdleTimer() {
        clearTimeout(this.idleTimeout);
        this.isSleeping = false;
        this.sleeping_sound.pause();
        this.sleeping_sound.currentTime = 0;
        this.startIdleTimer();
    }
}
