class Bottle extends DrawableObject {
    constructor(x,path,offset) {
        super();
        this.x=x;
        this.y=400;
        this.loadImage(path);
        this.width = 70;
        this.height = 60;
        this.offset = {
            width: 30,
            height: 50,
            x: x+offset,
            y: 400
        }
    }
}