class Chicken extends MovableObject {
    IMAGES_WALKING = [
        "/assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
        "/assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
        "/assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
    ];

    constructor() {
        super();
        this.loadImage("/assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png");
        this.height = 50;
        this.width = 50;
        this.y=395;
        this.x=Math.random() * 700+300;
        this.speed = 0.5 + Math.random() * 1.5;
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
            this.playAnimation(this.IMAGES_WALKING);
            this.offset = {
                width: 50,
                height: 50,
                x: this.x,
                y: this.y
            };
        }, 1000 / 15);
    }
    eat() { }

    getsPlucked(){
        console.log("hit");
    }
}
