
class Character extends MovableObject {

    IMAGES_WALKING = [
        "/assets/img/2_character_pepe/2_walk/W-21.png",
        "/assets/img/2_character_pepe/2_walk/W-22.png",
        "/assets/img/2_character_pepe/2_walk/W-23.png",
        "/assets/img/2_character_pepe/2_walk/W-24.png",
        "/assets/img/2_character_pepe/2_walk/W-25.png",
        "/assets/img/2_character_pepe/2_walk/W-26.png"
    ];
    currentImage = 0;

    constructor(position_x, position_y) {
        super(position_x, position_y);
        this.speed = 0.5;
        this.loadImage("/assets/img/2_character_pepe/2_walk/W-21.png");
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
        // this.addKeyboardListener();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % 6;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }

    // addKeyboardListener() {
    //     document.addEventListener("keydown", (event) => {
    //         this.controlCharacter(event.key);
    //     });
    // }

    controlCharacter(key) {
        switch (key) {
            case "ArrowRight":
                this.moveRight(this.speed);
                break;
            case "ArrowLeft":
                this.moveLeft(this.speed);
                break;
            case "ArrowUp":
                this.jump(this.speed);
                break;
        }
    }

    jump(speed) {
        setInterval(() => {
            this.y -= speed;
        }, 1000 / 60);
    }
}
