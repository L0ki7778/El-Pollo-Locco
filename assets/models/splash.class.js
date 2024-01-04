class Splash extends MovableObject {
    isFadingOut=false;
    IMAGES_SPLASH = [
        "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
        "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
        "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
        "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
        "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
        "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png"
    ]
    constructor(x,y) {
        super()
        this.x=x;
        this.y=y-15;
        this.loadImage(this.IMAGES_SPLASH[0])
        this.loadImages(this.IMAGES_SPLASH);
        this.width = 50;
        this.height = 50;
        this.splash();
    }

    splash(){
       let splash_interval = setInterval(() => {
            this.playAnimation(this.IMAGES_SPLASH);
            if(this.currentImage == this.IMAGES_SPLASH.length - 1){
                clearInterval(splash_interval)
                this.isFadingOut=true
            }
        }, 1000 / 30);
    }


}

