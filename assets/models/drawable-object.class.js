class DrawableObject{
    x;
    y;
    width = 100;
    height = 250;
    img;
    imageCache = {};
    currentImage = 0;

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


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

    }

}