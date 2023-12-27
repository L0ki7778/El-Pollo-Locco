
class  MovableObject{
    x;
    y;
    img;
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.img = new Image();
        this.img.src = 'assets/img/2_character_pepe/2_walk/W-21.png';
    }


    moveRight(){
        console.log("moves right")
    }

    moveLeft(){
        console.log("moves left")
    }
}
