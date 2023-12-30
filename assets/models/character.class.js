
class Character extends MovableObject {
    world;
    IMAGES_WALKING = [
        "/assets/img/2_character_pepe/2_walk/W-21.png",
        "/assets/img/2_character_pepe/2_walk/W-22.png",
        "/assets/img/2_character_pepe/2_walk/W-23.png",
        "/assets/img/2_character_pepe/2_walk/W-24.png",
        "/assets/img/2_character_pepe/2_walk/W-25.png",
        "/assets/img/2_character_pepe/2_walk/W-26.png"
    ];
    currentImage = 0;

    constructor() {
        super();
        this.x = 50;
        this.y = 200;
        this.speed=5;
        this.loadImage("/assets/img/2_character_pepe/2_walk/W-21.png");
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.KEY_RIGHT) {
                this.x+=this.speed;
                this.otherDirection=false;
            }else if(this.world.keyboard.KEY_LEFT) {
                this.x-=this.speed;
                this.otherDirection=true;
            }
        }, 1000/60);
    

        setInterval(() => {
            if (this.world.keyboard.KEY_RIGHT || this.world.keyboard.KEY_LEFT) {
                console.log("keypressed")
                let i = this.currentImage % 6;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 60);
    }


    jump(speed) {
        setInterval(() => {
            this.y -= speed;
        }, 1000 / 60);
    }
}
