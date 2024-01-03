
class MovableObject extends DrawableObject {
    width = 100;
    height = 250;
    otherDirection = false;
    speedY = 0;
    accelearion = 1;
    energie = 100;
    lastHit = 0;
    


    constructor(x, y, speed) {
        super();
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.default_positionY = y;
    }


    animate() {
        setInterval(() => {
            this.moveLeft()
        }, 1000 / 60)
    }


    playAnimation(image) {
        let i = this.currentImage % image.length;
        let path = image[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
        this.world.keyboard.KEY_LEFT = false;
    }


    moveLeft() {
        this.x -= this.speed;
        // this.world.keyboard.KEY_RIGHT = false;
    }


    applyGravity() {
        let gravity_interval = setInterval(() => {
            if (this.isAboveGround(this.default_positionY) || this.speedY > 0) {
                this.keepFalling();
            }
            if (!this.isAboveGround(this.default_positionY)) {
                this.y = this.default_positionY;
                if (this instanceof ThrowableObject) {
                    clearInterval(gravity_interval)
                } else {
                    this.stopFalling();
                }
            }
        }, 1000 / 60);
    }


    keepFalling() {
        this.y -= this.speedY;
        this.speedY -= this.accelearion;
    }

    stopFalling() {
        this.speedY = 0;
    }

    isAboveGround(default_positionY) {
        return this.y <= default_positionY;
    }



    isColliding(obj) {
        return (
            this.offset.x + this.offset.width > obj.offset.x &&
            this.offset.y + this.offset.height > obj.offset.y &&
            this.offset.x < obj.offset.x &&
            this.offset.y < obj.offset.y + obj.offset.height
        );

    }

    isHit() {
        this.energie -= 5;
        if (this.energie < 0) {
            this.energie = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }


    isDead() {
        return this.energie == 0;
    }
}

// isColliding(obj) {
//     return (this.x + this.width) >= obj.x && this.x <= (obj.x + obj.width) &&
//         (this.y + this.offsetY + this.height) >= obj.y &&
//         (this.y + this.offsetY) <= (obj.y + obj.height)
//             // obj.onCollisionCourse;
//         }
// Optional: hiermit könnten wir schauen,
//  ob ein Objekt sich in die richtige Richtung bewegt.
//  Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.