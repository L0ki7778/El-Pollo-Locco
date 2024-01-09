
class MovableObject extends DrawableObject {
    otherDirection = false;
    accelearion = 1;
    energie = 100;
    gotHurt = false;
    speedY = 0;
    gravityId;
    lastHit;



    constructor(x, y, speed) {
        super();
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.default_positionY = this.y;
    }


    animate() {
        interval.call(this, this.moveLeft, 1000 / 60)
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
    }


    applyGravity() {
        this.gravityId = interval.call(this, this.gravityInterval, 1000 / 60)
    }

    gravityInterval() {
        if (this.isAboveGround(this.default_positionY) || this.speedY > 0) this.keepFalling();
        if (!this.isAboveGround(this.default_positionY)) {
            this.y = this.default_positionY;
            if (this instanceof ThrowableObject) {
                clearInterval(intervalIds.splice(intervalIds.indexOf(this.gravityId), 1))
            } else {
                this.stopFalling();
                if (this instanceof Character) this.isJumping = false;
            }
        }
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
            this.offset.x + this.offset.width > obj.offset.x
            && this.offset.x <= obj.offset.x + obj.offset.width
            && this.offset.y + this.offset.height > obj.offset.y
            && this.offset.y <= obj.offset.y + obj.offset.height
        );
    }

    isJumpingUpon(obj) {
        return (
            this.speedY <= 0
            && this.offset.y + this.offset.height > obj.offset.y
            && this.offset.x + this.offset.width > obj.offset.x
            && this.offset.x < obj.offset.x + obj.offset.width
        )
    }


    isHit() {
        if (this.gotHurt) {
            return;
        } else if (!this.gotHurt) {
            this.health_percentage = this.energie -= 20;
            this.gotHurt = true;
            this.dmgAnimation();
            if (this.energie <= 0) {
                this.healthBar.setPercentage(0);
            }
        }
    }


    isDead() {
        return this.energie <= 0;
    }

    dmgAnimation() {
        if (!this.isDead()) {
            this.lastHit = new Date().getTime();
            this.startDmgAnimation();
        }
    }

    startDmgAnimation() {
        this.hurt_interval = setInterval(() => {
            this.playAnimation(this.IMAGES_HURT);
            this.healthBar.setPercentage(this.health_percentage);
            if (this.timepassed(this.lastHit)) {
                clearInterval(this.hurt_interval);
                this.gotHurt = false;
                if (this instanceof Endboss) {
                    console.log(this.energie)
                    if (this.energie == 160) {
                        this.energie -= 1;
                        this.clearAllIntervals();
                        this.jump();
                    } else if (this.energie == 99) {
                        this.energie -= 1;
                        this.clearAllIntervals();
                        this.jump();
                    } else if (this.energie == 38) {
                        this.clearAllIntervals();
                        this.jump();
                    } else {
                        this.watchMadAtCharacter()
                    };
                }
            }
        }, 1000 / 25);
    }

    timepassed(time) {
        let timepassed = new Date().getTime() - time;
        timepassed = timepassed / 1000;
        return (timepassed > 1.5)
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