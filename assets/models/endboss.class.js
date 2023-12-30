class endBoss extends Chicken {
    
    IMAGES_WALKING = [
        "/assets/img/4_enemie_boss_chicken/1_walk/G1.png",
        "/assets/img/4_enemie_boss_chicken/1_walk/G2.png",
        "/assets/img/4_enemie_boss_chicken/1_walk/G3.png",
        "/assets/img/4_enemie_boss_chicken/1_walk/G4.png"
    ];


    constructor(position_x, position_y) {
        super(position_x, position_y);
        this.loadImage("/assets/img/4_enemie_boss_chicken/1_walk/G1.png");
        this.loadImages(this.IMAGES_WALKING);
        this.height = 300;
        this.width = 300;
    }

}