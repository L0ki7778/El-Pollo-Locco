class Coin extends MovableObject {
    IMAGE_SPINNING = [
        "/El-Pollo-Loco/assets/img/8_coin/paint/test0.png",
        "/El-Pollo-Loco/assets/img/8_coin/paint/test2.png",
        "/El-Pollo-Loco/assets/img/8_coin/paint/test3.png",
        "/El-Pollo-Loco/assets/img/8_coin/paint/test4.png",
        "/El-Pollo-Loco/assets/img/8_coin/paint/test6.png",
        "/El-Pollo-Loco/assets/img/8_coin/paint/test7.png",
        "/El-Pollo-Loco/assets/img/8_coin/paint/test8.png",
        "/El-Pollo-Loco/assets/img/8_coin/paint/test9.png",
        "/El-Pollo-Loco/assets/img/8_coin/paint/test10.png",
        "/El-Pollo-Loco/assets/img/8_coin/paint/test9.png",
        "/El-Pollo-Loco/assets/img/8_coin/paint/test8.png",
        "/El-Pollo-Loco/assets/img/8_coin/paint/test7.png",
        "/El-Pollo-Loco/assets/img/8_coin/paint/test6.png",
        "/El-Pollo-Loco/assets/img/8_coin/paint/test4.png",
        "/El-Pollo-Loco/assets/img/8_coin/paint/test3.png",
        "/El-Pollo-Loco/assets/img/8_coin/paint/test2.png",
    ];

    
    /**
     * Creates a new instance of the `Constructor` class.
     *
     * @param {type} position_x - The x coordinate of the position.
     * @param {type} position_y - The y coordinate of the position.
     * @return {type} The newly created instance of the `Constructor` class.
     */
    constructor(position_x, position_y) {
        super(position_x, position_y);
        this.loadImage("/El-Pollo-Loco/assets/img/8_coin/paint/test0.png");
        this.width = 100;
        this.height = 100;
        this.loadImages(this.IMAGE_SPINNING);
        this.spin()
    };


    offset = {
        width: 35,
        height: 42,
        x: this.x + 32,
        y: this.y + 28
    };


    /**
     * Spins the function.
     *
     * @param {type} paramName - description of parameter
     * @return {type} description of return value
     */
    spin() {
        interval.call(this, this.spinning, 100)
    };


    /**
     * Executes the spinning animation.
     *
     * @param {type} paramName - description of parameter
     * @return {type} description of return value
     */
    spinning() {
        this.playAnimation(this.IMAGE_SPINNING);
    };
}