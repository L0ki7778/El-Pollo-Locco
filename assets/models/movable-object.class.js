
class MovableObject {
    x;
    y;
    img;
    speed;
    imageCache = {};
    width = 100;
    height = 250;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    gravity_interval;
    movement_interval;


    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.addKeyboardListener()
    }


    /**
     * Loads images from an array of paths and caches them.
     *
     * @param {Array} arr - An array of image paths.
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        })
    }


    /**
     * Loads an image from a given path and caches it.
     *
     * @param {string} path - The path of the image to load.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    animate() {
        this.moveLeft(this.speed)
    }

    movementAnimation(imageCount, img_source) {
        if (!this.movement_interval) {
            this.movement_interval = setInterval(() => {
                let i = this.currentImage % imageCount;
                let path = img_source[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }, 100);
        }
    }

    resetPosition() {
            clearInterval(this.movement_interval);
            clearInterval(this.gravity_interval);
            this.gravity_interval = null
            this.movement_interval = null
            this.y = this.default_y;
    }

    animateLeft() {
        this.moveLeft(this.speed)
    }

    animateRight() {
        this.moveRight(this.speed)
    }

    moveRight(speed) {
        setInterval(() => {
            this.x += speed;
        }, 1000 / 60);
        this.otherDirection = true;
    }

    moveLeft(speed) {
        setInterval(() => {
            this.x -= speed;
        }, 1000 / 60);
        this.otherDirection = false;
    }


    applyGravity() {
        this.gravity_interval = setInterval(() => {
            if (this.isAboveGround()) {
                this.y += this.speedY;
                this.speedY += this.acceleration;
                return true
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y <= 205
    }


    addKeyboardListener() {
        window.addEventListener("keydown", (event) => {
            this.keyPushed(event.code);
        })
        window.addEventListener("keyup", (event) => {
            this.keyReleased(event.code);
        })
    }

    keyPushed(code) {
        switch (code) {
            case "ArrowLeft":
                this.LEFT = true;
                break;
            case "ArrowRight":
                this.RIGHT = true;
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
                console.log("ArrowLeft" + this.LEFT)
                break;
            case "ArrowRight":
                this.RIGHT = false;
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


