
class MovableObject {
    x;
    y;
    img;
    imageCache={};
    width=100;
    height=250;
    otherDirection = false;
    constructor(x, y,speed) {
        this.x = x;
        this.y = y;
        this.speed = speed
    }


    /**
     * Loads images from an array of paths and caches them.
     *
     * @param {Array} arr - An array of image paths.
     */
    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path]=img;
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
    
    moveRight(speed) {
        setInterval(() => {
            this.x += speed;
        }, 1000 / 60);    }

    moveLeft(speed) {
        setInterval(() => {
            this.x -= speed;
        }, 1000 / 60);
    }
}
