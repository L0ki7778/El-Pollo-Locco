class Endboss extends MovableObject {
    character;
    width = 300;
    height = 360;
    world;
    energie=200;
    healthBar;
    health_percentage;
    invincible = true;
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


    IMAGES_HURT=[
        "assets/img/4_enemie_boss_chicken/4_hurt/G21.png",
        "assets/img/4_enemie_boss_chicken/4_hurt/G22.png",
        "assets/img/4_enemie_boss_chicken/4_hurt/G23.png"
    ]


    IMAGES_ATTACK_INITIATION = [
        "assets/img/4_enemie_boss_chicken/3_attack/G13.png",
        "assets/img/4_enemie_boss_chicken/3_attack/G13.png",
        "assets/img/4_enemie_boss_chicken/3_attack/G14.png",
        "assets/img/4_enemie_boss_chicken/3_attack/G14.png",
        "assets/img/4_enemie_boss_chicken/3_attack/G15.png",
        "assets/img/4_enemie_boss_chicken/3_attack/G15.png",
        "assets/img/4_enemie_boss_chicken/3_attack/G16.png",
        "assets/img/4_enemie_boss_chicken/3_attack/G16.png",
        "assets/img/4_enemie_boss_chicken/3_attack/G17.png",
        "assets/img/4_enemie_boss_chicken/3_attack/G17.png",
    ];


    IMAGE_ATTACK = [
        "assets/img/4_enemie_boss_chicken/3_attack/G18.png"
    ];


    IMAGES_LANDING = [
        "assets/img/4_enemie_boss_chicken/3_attack/G19.png",
        "assets/img/4_enemie_boss_chicken/3_attack/G20.png",
        "assets/img/4_enemie_boss_chicken/3_attack/G19.png"
    ];


    constructor() {
        super();
        this.loadImage(this.IMAGES_WALKING[1]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGE_ATTACK);
        this.loadImages(this.IMAGES_LANDING);
        this.loadImages(this.IMAGES_ATTACK_INITIATION);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.characterArrives();
    };


    characterArrives() {
        let arrivement_interval = setInterval(() => {
            if (this.world.character.x >= 1990) {
                this.intro();
                clearInterval(arrivement_interval);
                setInterval(() => {
                    this.playAnimation(this.IMAGES_ALERT);
                }, 500);
            };
        }, 300);
    };


    intro() {
        let i = 0;
        let engage_interval = setInterval(() => {
            this.playAnimation(this.IMAGES_ALERT);
            i++;
            if (i == 9) {
                clearInterval(engage_interval);
                this.loadImage(this.IMAGES_ALERT[7]);
                this.jump();
            };
        }, 500);
    };


    jump() {
        let i = 0;
        this.invincible = true;
        let attackPreparation_interval = setInterval(() => {
            this.playAnimation(this.IMAGES_ATTACK_INITIATION);
            i++;
            if (this.preJumpAnimationEnds(i)) {
                this.bossAttacks(attackPreparation_interval)
            };
        }, 1000 / 15);
    };


    bossAttacks(interval) {
        clearInterval(interval)
        this.speedY = 20;
        let jumpX_interval = setInterval(() => {
            this.keepOffset();
            this.x = this.x - 8;
            this.playAnimation(this.IMAGE_ATTACK);
            if (this.isTouchingGround()) {
                this.landingAnimation(jumpX_interval, this)
            };
        }, 1000 / 60);
    };


    landingAnimation(interval) {
        let i = 0;
        clearInterval(interval);
        let landing_interval = setInterval(() => {
            this.playAnimation(this.IMAGES_LANDING);
            i++;
            if (this.reachedLastAnimationImg(i)) {
                this.watchMadAtCharacter(landing_interval)
            };
        }, 1000 / 30)
    };


    watchMadAtCharacter(interval) {
        clearInterval(interval);
        this.loadImage(this.IMAGES_ALERT[7]);
        this.invincible = false;
    };


    keepOffset() {
        this.offset = {
            width: 250,
            height: 200,
            x: this.x + 30,
            y: this.y + 80
        };
    };


    preJumpAnimationEnds(i) {
        return (i == this.IMAGES_ATTACK_INITIATION.length - 1)
    };


    isTouchingGround() {
        return (this.y == this.default_positionY)
    };


    reachedLastAnimationImg(i) {
        return (i == this.IMAGES_LANDING.length - 1)
    };
}


