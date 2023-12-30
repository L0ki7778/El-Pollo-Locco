
class MovableObject {
    x;
    y;
    img;
    imageCache = {};
    width = 100;
    height = 250;
    currentImage = 0;
    otherDirection = false;
    speedY = 0;
    accelearion = 1;
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.default_positionY = y;
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
        setInterval(()=>{
            this.moveLeft()
        },1000/60)
    }


    playAnimation(image) {
        let i = this.currentImage % image.length;
        let path = image[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
        this.world.keyboard.KEY_LEFT = false;
    }


    moveLeft() {
        this.x -= this.speed;
        // this.world.keyboard.KEY_RIGHT = false;
    }


    applyGravity() {
       setInterval(() => {
            if (this.isAboveGround(this.default_positionY)||this.speed) {
                this.keepFalling();
            }
            if(!this.isAboveGround(this.default_positionY)) {
                this.y = this.default_positionY;
                this.stopFalling()
                console.log(this.speedY);
            }
        }, 1000 / 60);
    }

    keepFalling() {
        this.y -= this.speedY;
        this.speedY -= this.accelearion;
    }

    stopFalling() {
        this.speedY = 0;
    }

    isAboveGround(default_positionY) {
        return this.y < default_positionY;
    }
}
