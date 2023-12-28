
class MovableObject {
    x;
    y;
    img;
    width=100;
    height=250;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log("moves right")
    }

    moveLeft() {
        console.log("moves left")
    }
}
