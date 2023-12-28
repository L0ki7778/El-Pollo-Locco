class Clouds extends MovableObject {
    constructor(position_x, position_y,speed) {
        super(position_x, position_y,speed);
        this.loadImage("/assets/img/5_background/layers/4_clouds/1.png");
        this.width = 300;
        this.height = 200;
        this.speed=0.3
        this.animate()
    }
}

class Clouds2 extends MovableObject {
    constructor(position_x, position_y,speed) {
        super(position_x, position_y,speed);
        this.loadImage("/assets/img/5_background/layers/4_clouds/2.png");
        this.width = 300;
        this.height = 200;
        this.speed=0.2
        this.animate()
    }
}