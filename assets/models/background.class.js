class BackgroundOne extends MovableObject {
    /**
     * Constructor function for creating a new instance of the class.
     *
     * @param {number} position_x - The x-coordinate of the position.
     * @param {number} y - The y-coordinate of the position.
     */
    constructor(position_x,y) {
        super(position_x,y);
        this.loadImage("/El-Pollo-Loco/assets/img/5_background/layers/1_first_layer/full.png");
        this.width = 720;
        this.height = 320;
        this.y = 480 - this.height;
    }
};


class BackgroundTwo extends MovableObject {
    constructor(position_x, y) {
        super(position_x, y);
        this.loadImage("/El-Pollo-Loco/assets/img/5_background/layers/2_second_layer/full.png");
        this.width = 720;
        this.height = 380;
        this.y = 430 - this.height;
    }
};


class BackgroundThree extends MovableObject {
    constructor(position_x, y) {
        super(position_x, y);
        this.loadImage("/El-Pollo-Loco/assets/img/5_background/layers/3_third_layer/full.png");
        this.width = 720;
        this.height = 420;
        this.y = 380 - this.height;
    }
};