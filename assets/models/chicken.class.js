class Chicken extends MovableObject {
    constructor(position_x, position_y) {
        super(position_x, position_y);
        this.loadImage("/assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png");
        this.height = 50;
        this.width = 50;
    }
    eat() { }
}
