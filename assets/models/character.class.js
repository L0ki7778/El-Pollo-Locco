
class Character extends MovableObject{

    constructor(position_x, position_y){
        super(position_x, position_y);
    }

    Jump(){
        if(this.position_y > 0){
            this.position_y -= 15;
        }
    }
}