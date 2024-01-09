class Endboss extends MovableObject {
    world;
    width = 300;
    height = 360;
    active = false;
    energie = 200;
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
    character;


    IMAGES_WALKING = [
        "assets/img/4_enemie_boss_chicken/1_walk/G1.png",
        "assets/img/4_enemie_boss_chicken/1_walk/G2.png",
        "assets/img/4_enemie_boss_chicken/1_walk/G3.png",
        "assets/img/4_enemie_boss_chicken/1_walk/G4.png",
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


    IMAGES_HURT = [
        "assets/img/4_enemie_boss_chicken/4_hurt/G21.png",
        "assets/img/4_enemie_boss_chicken/4_hurt/G22.png",
        "assets/img/4_enemie_boss_chicken/4_hurt/G23.png"
    ]


    IMAGES_ATTACK_INITIATION = [
        "assets/img/4_enemie_boss_chicken/3_attack/G13.png",
        "assets/img/4_enemie_boss_chicken/3_attack/G14.png",
        "assets/img/4_enemie_boss_chicken/3_attack/G15.png",
        "assets/img/4_enemie_boss_chicken/3_attack/G16.png",
        "assets/img/4_enemie_boss_chicken/3_attack/G15.png",
        "assets/img/4_enemie_boss_chicken/3_attack/G16.png"

    ];


    IMAGES_DIEING = [
        "assets/img/4_enemie_boss_chicken/5_dead/1.png",
        "assets/img/4_enemie_boss_chicken/5_dead/45-1.png",
        "assets/img/4_enemie_boss_chicken/5_dead/90-1.png",
        "assets/img/4_enemie_boss_chicken/5_dead/135-1.png",
        "assets/img/4_enemie_boss_chicken/5_dead/180-1.png",
        "assets/img/4_enemie_boss_chicken/5_dead/225-1.png",
        "assets/img/4_enemie_boss_chicken/5_dead/270-1.png",
        "assets/img/4_enemie_boss_chicken/5_dead/315-1.png",
        "assets/img/4_enemie_boss_chicken/5_dead/1.png",
        "assets/img/4_enemie_boss_chicken/5_dead/2.png",
        "assets/img/4_enemie_boss_chicken/5_dead/45-2.png",
        "assets/img/4_enemie_boss_chicken/5_dead/90-2.png",
        "assets/img/4_enemie_boss_chicken/5_dead/135-2.png",
        "assets/img/4_enemie_boss_chicken/5_dead/180-2.png",
        "assets/img/4_enemie_boss_chicken/5_dead/225-2.png",
        "assets/img/4_enemie_boss_chicken/5_dead/270-2.png",
        "assets/img/4_enemie_boss_chicken/5_dead/315-2.png",
        "assets/img/4_enemie_boss_chicken/5_dead/2.png",
    ]

    IMAGES_DEAD = [
        "assets/img/4_enemie_boss_chicken/5_dead/3.png",
        "assets/img/4_enemie_boss_chicken/5_dead/45-3.png",
        "assets/img/4_enemie_boss_chicken/5_dead/90-3.png",
        "assets/img/4_enemie_boss_chicken/5_dead/135-3.png",
        "assets/img/4_enemie_boss_chicken/5_dead/180-3.png",
        "assets/img/4_enemie_boss_chicken/5_dead/225-3.png",
        "assets/img/4_enemie_boss_chicken/5_dead/270-3.png",
        "assets/img/4_enemie_boss_chicken/5_dead/315-3.png"
    ]


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
        this.loadImages(this.IMAGES_DIEING);
        this.loadImages(this.IMAGES_DEAD);
        this.applyGravity();
        this.characterArrives();
        this.speed = 2;
    };


    characterArrives() {

        let arrivement_interval = setInterval(() => {
            try{
                if (this.active) {
                    return;
                }
                if (this.world.character.x >= 1990) {
                    console.log(1)
                    this.active = true;
                    this.intro();
                    clearInterval(arrivement_interval);
                    arrivement_interval = null;
                };

            }catch(e){
                console.log(e, this, 2)
            }
        }, 300);
    };


    intro() {
        let i = 0;
        let engage_interval = setInterval(() => {
            this.playAnimation(this.IMAGES_ALERT);
            i++;
            if (i == 7) {
                this.IMAGES_ALERT=null;
                clearInterval(engage_interval);
                engage_interval = null;
                this.loadImage("/assets/img/4_enemie_boss_chicken/2_alert/G12.png");
                this.jump();
            };
        }, 500);
    };


    jump() {
        let i = 0;
        this.invincible = true;
        let attackPreparation_interval = setInterval(() => {
            this.playAnimation(this.IMAGES_ATTACK_INITIATION);
            console.log(this.IMAGES_ATTACK_INITIATION[i])
            console.log(i)
            i++;
            if (this.preJumpAnimationEnds(i)) {
                clearInterval(attackPreparation_interval)
                attackPreparation_interval = null;
                this.bossAttacks()
            };
        }, 1000 / 8);
    };


    bossAttacks() {
        this.speedY = 20;
        this.bossTakesOff(this.IMAGE_ATTACK, 1, 60);
    };


    bossDies() {
        this.speedY = 20;
        this.bossTakesOff(this.IMAGES_DIEING, -1, 40);
    }


    landingAnimation() {
        let i = 0;
        let landing_interval = setInterval(() => {
            this.playAnimation(this.IMAGES_LANDING);
            i++;
            if (this.reachedLastAnimationImg(i)) {
                this.watchMadAtCharacter(landing_interval)
            };
        }, 1000 / 30)
    };


    watchMadAtCharacter(interval) {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
        this.loadImage("/assets/img/4_enemie_boss_chicken/2_alert/G12.png");
        this.invincible = false;
        this.moveLeft();
        let moving_interval = setInterval(() => {
            this.moveLeft();
            this.keepOffset();
        }, 1000 / 60)
        let walking_interval = setInterval(() => {
            if (this.isDead()) {
                clearInterval(walking_interval);
                clearInterval(moving_interval);
                walking_interval = null;
                moving_interval = null;
                this.bossDies();
            } else if (this.gotHurt) {
                clearInterval(walking_interval);
                clearInterval(moving_interval);
                walking_interval = null;
                moving_interval = null;
            }
            this.playAnimation(this.IMAGES_WALKING);
        }, 1000 / 8)
    };


    bossTakesOff(animationCache, multiplicator, frames) {
        let i = 0;
        let jumpX_interval = setInterval(() => {
            this.keepOffset();
            this.x = this.x - 8 * multiplicator;
            this.playAnimation(animationCache);
            if (this.isDead()) {
                i++;
                if (i == this.IMAGES_DIEING.length - 1) {
                    clearInterval(jumpX_interval);
                    jumpX_interval = null;
                    this.deadBoss()
                }
            } else if (this.isTouchingGround()) {
                clearInterval(jumpX_interval);
                jumpX_interval=0;
                this.landingAnimation()
            };
        }, 1000 / frames);
    }


    deadBoss() {
        let dead_interval = setInterval(() => {
            this.playAnimation(this.IMAGES_DEAD);
            this.default_positionY = 160;
            if (this.y == this.default_positionY) {
                clearInterval(dead_interval);
                dead_interval = null;
                this.loadImage(this.IMAGES_DEAD[this.IMAGES_DEAD.length - 1]);
            }
        }, 1000 / 30)

    }


    keepOffset() {
        this.offset = {
            width: 250,
            height: 200,
            x: this.x + 30,
            y: this.y + 80
        };
    };


    preJumpAnimationEnds(i) {
        return (i == this.IMAGES_ATTACK_INITIATION.length)
    };


    isTouchingGround() {
        return (this.y == this.default_positionY)
    };


    reachedLastAnimationImg(i) {
        return (i == this.IMAGES_LANDING.length - 1)
    };


}


