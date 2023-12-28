class Clouds extends MovableObject {
    constructor(position_x, position_y) {
        super(position_x, position_y);
        this.loadImage("/assets/img/5_background/layers/4_clouds/1.png");
        this.width = 300;
        this.height = 200;
    }
    moveLeft() {
        this.x -= 5;
        setTimeout(() => {
            this.moveLeft();
        }, 1000 / 40);
    }
}

class Clouds2 extends MovableObject {
    constructor(position_x, position_y) {
        super(position_x, position_y);
        this.loadImage("/assets/img/5_background/layers/4_clouds/2.png");
        this.width = 300;
        this.height = 200;
    }

    moveLeft() {
        this.x -= 5;
        setTimeout(() => {
            this.moveLeft();
        }, 1000 / 30);
    }
}