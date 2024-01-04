class Chick extends Chicken{
    offsetY=this.y+10;
    default_positionY=415;
    speed=Math.round(Math.random()*3)+1;
    
    speedY=0;
    IMAGES_WALKING = [
        "assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
        "assets/img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
        "assets/img/3_enemies_chicken/chicken_small/1_walk/3_w.png"
    ];

    IMAGES_DEAD = [
        "assets/img/3_enemies_chicken/chicken_small/2_dead/dead.png",
        "assets/img/3_enemies_chicken/chicken_small/2_dead/dead.png",
    ];
    chicken_hit=new Audio("/assets/audio/chick_hit.mp3");
    constructor(i){
        super(i)
        this.loadImage("assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png");
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.height = 25;
        this.width = 25;
        this.y=415;
        this.applyGravity()
        this.jumping()
       
    }
    

    jumping(){
        setInterval(()=>{
            this.speedY=Math.round(Math.random()*5);
        },Math.round(Math.random()*2000)+800)
    }


     getsStompedOn() {
         clearInterval(this.animation_interval);
        this.offset.width=0;
        this.offset.height=0;
        this.offset.y=500;
        this.chicken_hit.play();
        this.loadImage("assets/img/3_enemies_chicken/chicken_small/2_dead/dead.png");
        console.log("hit");
     }
}