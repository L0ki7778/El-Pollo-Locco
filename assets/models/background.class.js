class BackgroundFrontLayer extends MovableObject {
    speed;
    width;
    widthMultiplikator;
    shiftInterval;
    height;

    constructor(x, y, height,width,widthMultiplikator,speed) {
        super(x,y);
        this.speed=speed
        this.loadImage("/assets/img/5_background/layers/1_first_layer/full.png");
        this.width = width*widthMultiplikator;
        this.height = height;
        this.y = 480 - this.height;
    }

    returnBackgroundXPosition() {
        bgX=this.x
        console.log(bgX)
    }


    moveRight(speed) {
        if (X >= 280) {
            if (!this.shiftInterval) {
                this.shiftInterval = setInterval(() => {
                        this.x -= speed;
                        this.returnBackgroundXPosition()
                }, 1000 / 60);
            }
        }
    }


    moveLeft(speed) {
        speed = speed;
        if (!this.shiftInterval) {
            this.shiftInterval = setInterval(() => {
                if (this.x<=0) {
                    this.x += speed;
                    this.returnBackgroundXPosition()
                }
            }, 1000 / 60);
        }
    }

    stopAnimation() {
        clearInterval(this.shiftInterval);
        this.shiftInterval = null;
    }


    keyPushed(code) {
        switch (code) {
            case "ArrowLeft":
                this.LEFT = true;
                this.animateLeft()
                break;
            case "ArrowRight":
                this.RIGHT = true;
                this.animateRight()
                break;
        }
    }


    keyReleased(code) {
        switch (code) {
            case "ArrowLeft":
                this.LEFT = false;
                this.stopAnimation()
                console.log(this.position_x)
                break;
            case "ArrowRight":
                this.RIGHT = false;
                this.stopAnimation()
                break;
        }
    }

}


class BackgroundMiddleLayer extends BackgroundFrontLayer {
    constructor(position_x, y, height,width,widthMultiplikator,speed) {
        super(position_x, y, height,width,widthMultiplikator,speed);
        this.loadImage("/assets/img/5_background/layers/2_second_layer/full.png");
    }
}


class BackgroundBackLayer extends BackgroundFrontLayer {
    constructor(position_x, y, height,width,widthMultiplikator,speed) {
        super(position_x, y, height,width,widthMultiplikator,speed);
        this.loadImage("/assets/img/5_background/layers/3_third_layer/full.png");
    }
}