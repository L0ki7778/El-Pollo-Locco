class Coin extends MovableObject {
    IMAGE_SPINNING=[
        "/assets/img/8_coin/paint/test0.png",
        "/assets/img/8_coin/paint/test2.png",
        "/assets/img/8_coin/paint/test3.png",
        "/assets/img/8_coin/paint/test4.png",
        "/assets/img/8_coin/paint/test6.png",
        "/assets/img/8_coin/paint/test7.png",
        "/assets/img/8_coin/paint/test8.png",
        "/assets/img/8_coin/paint/test9.png",
        "/assets/img/8_coin/paint/test10.png",
        "/assets/img/8_coin/paint/test9.png",
        "/assets/img/8_coin/paint/test8.png",
        "/assets/img/8_coin/paint/test7.png",
        "/assets/img/8_coin/paint/test6.png",
        "/assets/img/8_coin/paint/test4.png",
        "/assets/img/8_coin/paint/test3.png",
        "/assets/img/8_coin/paint/test2.png",
    ];

    constructor(position_x, position_y) {
        super(position_x, position_y);
        this.loadImage("assets/img/8_coin/paint/test0.png");
        this.width = 170;
        this.height = 170;
        this.loadImages(this.IMAGE_SPINNING);
        this.spin()
    }

    
spin(){
    setInterval(() => {
        this.playAnimation(this.IMAGE_SPINNING);
    }, 100);
}
    
    
    

}