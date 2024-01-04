class Chicken extends MovableObject {
    animation_interval;
    offsetY;
    IMAGES_WALKING = [
        "/assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
        "/assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
        "/assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
    ];

    IMAGES_DEAD = [
        "/assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png",
        "/assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png"
    ];

    chicken_hit=new Audio("/assets/audio/chicken_hit.mp3");

    constructor(i) {
        super();
        this.loadImage("/assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png");
        this.height = 50;
        this.width = 50;
        this.y=395;
        this.offsetY=this.y;
        this.x=(Math.random() * 700+300)*i;
        this.speed = 0.5 + Math.random() * 1.5;
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }
    

    animate() {
       this.animation_interval = setInterval(() => {
            this.moveLeft();
            this.playAnimation(this.IMAGES_WALKING);
            if(this instanceof Chick){
                this.offset = {
                    width: 25,
                    height: 50,
                    x: this.x,
                    y: this.offsetY
                };
            }else{
                this.offset = {
                    width: 50,
                    height: 50,
                    x: this.x,
                    y: this.offsetY
                };
            }
        }, 1000 / 15);
    }
    eat() { }

    getsPlucked(){
        console.log("also triggered")
        clearInterval(this.animation_interval);
        this.offset.width=0;
        this.offset.height=0;
        this.offset.y=500;
        this.chicken_hit.play();
        this.loadImage("assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png");
        console.log("hit");
    }
}
