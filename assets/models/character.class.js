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
    deadId;
    canThrow = true;
    isJumping = false;
    isTrowing = false;
    isSleeping = false;
    walking_sound = new Audio("/assets/audio/step.mp3");
    jumping_sound = new Audio("/assets/audio/jump.mp3");
    throwing_sound = new Audio("/assets/audio/throw.mp3");
    sleeping_sound = new Audio("/assets/audio/sleeping.mp3");
    game_over = new Audio("/assets/audio/gameOver.mp3");

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


    /**
     * Initializes the object by loading images, animating, applying gravity, and setting the speed.
     *
     * @param {type} paramName - description of parameter
     * @return {type} description of return value
     */
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
    };


    /**
     * Animates the elements of the page.
     *
     * @param {type} paramName - description of parameter
     * @return {type} description of return value
     */
    animate() {
        interval.call(this, this.sleeping, 1000 / 3);
        interval.call(this, this.keyBindInterval, 1000 / 60);
        interval.call(this, this.walkAndJump, 80);
        this.characterdying();
    };


    /**
     * Executes a series of key bindings for the current interval.
     *
     * @param {type} paramName - description of parameter
     * @return {type} description of return value
     */
    keyBindInterval() {
        this.keyRight();
        this.keyLeft();
        this.keyUp();
        this.keyThrow();
        this.camera();
    };


    /**
     * Makes the character sleep.
     *
     * @param {type} paramName - description of parameter
     * @return {type} description of return value
     */
    sleeping() { if (this.isSleeping) this.playAnimation(this.IMAGES_SLEEPING) };


    /**
     * A function to handle the key right event.
     *
     * @return {undefined} This function does not return a value.
     */
    keyRight() {
        if (this.world.keyboard.KEY_RIGHT && this.x + this.width / 2 < this.world.level.level_limit) {
            this.isWalkingRight();
            if (this.y == this.default_positionY) {
                if (sound == true) this.walking_sound.play();
            }
        }
    };


    /**
     * Checks if the left arrow key is pressed and the object's x position is within bounds,
     * then triggers the walking left animation and plays a walking sound if the object is on the default Y position.
     *
     * @param {type} paramName - description of parameter
     * @return {type} description of return value
     */
    keyLeft() {
        if (this.world.keyboard.KEY_LEFT && this.x > 0 + this.width / 2) {
            this.isWalkingLeft();
            if (this.y == this.default_positionY) {
                if (sound == true) this.walking_sound.play()
            };
        }
    };


    /**
     * Triggered when the up arrow key is pressed.
     *
     * @param {void} No parameters.
     * @return {void} No return value.
     */
    keyUp() {
        if (this.world.keyboard.KEY_UP && this.y == this.default_positionY) {
            this.jump();
            this.resetIdleTimer();
        }
    };


    /**
     * Throws a key if the throw key is pressed and the player has bottles and is looking forward.
     *
     * @return {undefined} This function does not return a value.
     */
    keyThrow() {
        if (this.world.keyboard.KEY_THROW) {
            this.resetIdleTimer();
            if (this.hasBottlesAndLooksForward()) {
                this.throw();
                if (sound == true) this.throwing_sound.play()
            }
        }
    };


    /**
     * Check if the entity has bottles and is looking forward.
     *
     * @return {boolean} True if the entity has bottles and is looking forward, false otherwise.
     */
    hasBottlesAndLooksForward() {
        return !this.isTrowing && this.world.throwableObjects.length > 0 && !this.otherDirection && this.canThrow
    };


    /**
     * Determines if the character is walking left.
     *
     * This function resets the idle timer, moves the character to the left,
     * decreases the status character bars by 40, and sets the otherDirection
     * property to true.
     *
     * @return {boolean} - Returns true if the character is walking left, false otherwise.
     */
    isWalkingLeft() {
        return this.resetIdleTimer(),
            this.moveLeft(),
            this.takeStatuscharacterBars(-40),
            this.otherDirection = true
    };


    /**
     * Checks if the character is walking to the right.
     *
     * @return {boolean} Returns true if the character is walking to the right.
     */
    isWalkingRight() {
        return this.resetIdleTimer(),
            this.moveRight(),
            this.takeStatuscharacterBars(-40),
            this.isSleeping = false;
    };


    /**
     * Sets the camera position and offset based on the current object position.
     *
     * @return {Object} An object containing the camera position and offset.
     */
    camera() {
        return (
            this.world.camera_x = -this.x + this.width / 2,
            this.offset = {
                width: 40,
                height: 130,
                x: this.x + 30,
                y: this.y + 100
            }
        );
    };


    characterdying() {
        let scan_death = setInterval(() => {
            if (this.energie <= 10) {
                this.deathPreparation();
                clearInterval(scan_death);
                if (music == true) {
                    this.stopMusic(backgroundMusic);
                    this.stopMusic(intro_music);
                };
                if (sound == true) this.game_over.play();
                this.dyingInterval();
            };
        }, 60)
    };


    /**
     * Prepare for death.
     *
     * @param {type} paramName - description of parameter
     * @return {type} description of return value
     */
    deathPreparation() {
        this.isFadingOut = true;
        characterAlive = false;
    }


    /**
     * Executes the dying interval.
     *
     * This function sets up an interval that repeatedly executes a callback function
     * until a certain condition is met. The callback function is responsible for playing
     * the animation for the object's death. The interval is cleared when the animation
     * reaches the last frame, and a separate function is called to handle the game overlay.
     *
     * @return {undefined} There is no return value.
     */
    dyingInterval() {
        let dying_interval = setInterval(() => {
            this.playAnimation(this.IMAGES_DEAD)
            if (this.img.src.slice(-6) == "57.png") {
                clearInterval(dying_interval)
                gameOverlay()
            }
        }, 1000 / 30)
    }


    /**
     * Perform a sequence of actions based on the state of the character.
     *
     * @return {undefined} This function does not return a value.
     */
    walkAndJump() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
        }
        else if (this.isJumping) {
            this.playJumpAnimation(this.IMAGES_JUMPING);
        } else {
            if (this.world.keyboard.KEY_RIGHT || this.world.keyboard.KEY_LEFT) {
                this.playAnimation(this.IMAGES_WALKING);
            };
        };
    };


    /**
     * A function to perform a jump action.
     *
     * @param {type} paramName - description of parameter
     * @return {type} description of return value
     */
    jump() {
        if (this.isStanding()) {
            this.startsJumping();
            this.endsJumping();
        };
    };


    /**
     * Check if the object is in a standing position.
     *
     * @return {boolean} Returns true if the object is standing, false otherwise.
     */
    isStanding() {
        return !this.isJumping && this.y == this.default_positionY
    };


    /**
     * Sets the "isJumping" property to true and updates the "speedY" property to 20.
     * Plays the jumping sound if the "sound" parameter is true.
     */
    startsJumping() {
        this.isJumping = true;
        this.speedY = 20;
        if (sound == true) this.jumping_sound.play();
    };


    /**
     * Ends the jumping animation once the character is back on the ground.
     */
    endsJumping() {
        let backkOnGround_interval = setInterval(() => {
            if (this.y == this.default_positionY) {
                this.jumpImage = 0;
                this.loadImage(this.IMAGES_JUMPING[0]);
                clearInterval(backkOnGround_interval);
                backkOnGround_interval = null;
            }
        }, 200);
    };


    /**
     * Plays the jump animation using the provided images.
     *
     * @param {Array} image - An array of images to be used in the animation.
     */
    playJumpAnimation(image) {
        let i = this.jumpImage % image.length;
        let path = image[i];
        this.img = this.imageCache[path];
        this.jumpImage++;
    };


    /**
     * Update the position of the status character bars.
     *
     * @param {number} x - The offset for the character bars.
     */
    takeStatuscharacterBars(x) {
        this.world.bossBar.x = this.x + 440
        this.world.characterBars.forEach(element => {
            element.x = this.x + x
        });
    };


    /**
     * Throws an object and updates the character bars.
     *
     * @return {undefined} This function does not have a return value.
     */
    throw() {
        this.world.throwableObjects[0].throw(this.x + 30, this.y + 100)
        this.world.characterBars[1].percentage += 20
        this.world.characterBars[1].setPercentage(this.world.characterBars[1].percentage)
        this.isTrowing = true;
        setTimeout(() => {
            this.world.throwableObjects.pop();
            this.isTrowing = false;
        }, 1000);
    };


    /**
     * Starts the idle timer.
     *
     * This function sets a timer using the `setTimeout` function to trigger the `isSleeping` flag
     * after a specified duration.
     *
     * @param {number} sleepTimeout - The duration in milliseconds after which the `isSleeping` flag
     * will be set to `true`.
     * @return {void} This function does not return any value.
     */
    startIdleTimer() {
        this.idleTimeout = setTimeout(() => {
            this.isSleeping = true;
        }, this.sleepTimeout);
    };


    /**
     * Resets the idle timer and prepares the system for user activity.
     *
     * This function clears the idle timeout, sets the isSleeping flag to false, pauses the sleeping sound, and resets its current time to 0. It then starts the idle timer to monitor user activity.
     *
     * @return {void} This function does not return a value.
     */
    resetIdleTimer() {
        clearTimeout(this.idleTimeout);
        this.isSleeping = false;
        this.sleeping_sound.pause();
        this.sleeping_sound.currentTime = 0;
        this.startIdleTimer();
    };
}
