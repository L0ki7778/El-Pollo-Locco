
class Character extends MovableObject{

    constructor(position_x, position_y){
        super(position_x, position_y);
        this.loadImage("/assets/img/2_character_pepe/2_walk/W-21.png");
    }
    Jump(){
        if(this.position_y > 0){
            this.position_y -= 15;
        }
    }
}