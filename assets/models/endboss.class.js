class Endboss extends MovableObject {
    character;
    width = 300;
    height = 360;
    x = 2600;
    y = 110;
    default_positionY = this.y;
    offset = {
        width: 250,
        height: 200,
        x: this.x + 30,
        y: this.y + 80
    };

    IMAGES_WALKING = [
        "/assets/img/4_enemie_boss_chicken/2_alert/G5.png",
        "/assets/img/4_enemie_boss_chicken/2_alert/G6.png",
        "/assets/img/4_enemie_boss_chicken/2_alert/G7.png"
    ];

    IMAGES_ALERT = [
        "/assets/img/4_enemie_boss_chicken/2_alert/G5.png",
        "/assets/img/4_enemie_boss_chicken/2_alert/G6.png",
        "/assets/img/4_enemie_boss_chicken/2_alert/G7.png",
        "/assets/img/4_enemie_boss_chicken/2_alert/G8.png",
        "/assets/img/4_enemie_boss_chicken/2_alert/G9.png",
        "/assets/img/4_enemie_boss_chicken/2_alert/G10.png",
        "/assets/img/4_enemie_boss_chicken/2_alert/G11.png",
        "/assets/img/4_enemie_boss_chicken/2_alert/G12.png"
    ];

    IMAGES_ATTACK = [
        "assets/img/4_enemie_boss_chicken/3_attack/G13.png",
        "assets/img/4_enemie_boss_chicken/3_attack/G14.png",
        "assets/img/4_enemie_boss_chicken/3_attack/G15.png",
        "assets/img/4_enemie_boss_chicken/3_attack/G16.png",
        "assets/img/4_enemie_boss_chicken/3_attack/G17.png",
        "assets/img/4_enemie_boss_chicken/3_attack/G18.png",
        "assets/img/4_enemie_boss_chicken/3_attack/G19.png",
        "assets/img/4_enemie_boss_chicken/3_attack/G20.png",
        "assets/img/4_enemie_boss_chicken/3_attack/G19.png"
    ];

    constructor() {
        super();
        this.loadImage(this.IMAGES_WALKING[1]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.applyGravity();
        this.characterArrives();
    }

    characterArrives() {
        let arrivement_interval = setInterval(() => {
            if (this.character.x >= 1990) {
                this.intro();
                clearInterval(arrivement_interval);
            }

        }, 300);
    }

    intro() {
        let i = 0;
        let engage_interval = setInterval(() => {
            this.playAnimation(this.IMAGES_ALERT);
            i++;
            if (i == 9) {
                clearInterval(engage_interval);
                this.loadImage(this.IMAGES_ALERT[7]);

                this.jump();
            }
        }, 700);
    }

    jump() {
        this.speedY = 20;
        let attack_interval = setInterval(() => {
            console.log(this.speedY);
            this.playAnimation(this.IMAGES_ATTACK);
            this.x = this.x - 8;
            if (this.y == this.default_positionY) {
                clearInterval(attack_interval);
            }
        }, 1000 / 60);
    }
}