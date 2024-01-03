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
        this.width = 100;
        this.height = 100;
        this.loadImages(this.IMAGE_SPINNING);
        this.spin()
    }

    offset = {
        width: 35,
        height: 42,
        x: this.x+32,
        y: this.y+28
    };

    
spin(){
    setInterval(() => {
        this.playAnimation(this.IMAGE_SPINNING);
    }, 100);
}
    
    
    

}