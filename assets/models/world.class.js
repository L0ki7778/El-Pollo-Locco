class World {
    ctx;
    keyboard;
    character = new Character();
    level = level1;
    camera_x = 0;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.offsetX = this.canvas.getBoundingClientRect().x;
        this.offsetY = this.canvas.getBoundingClientRect().y;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }


    setWorld() {
        this.character.world = this
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);//verschiebt die kamera

        this.addToMapArr(this.level.backgroundObjects);
        this.addToMapArr(this.level.clouds);
        this.addToMapArr(this.level.coins)
        this.addToMap(this.character);

        this.addToMapArr(this.level.enemies);

        this.ctx.translate(-this.camera_x, 0);//setzt die kamera zurück



        requestAnimationFrame(() => {
            this.draw();
        });
    }


    addToMapArr(objs) {
        objs.forEach((obj) => {
            this.addToMap(obj);
        });
    }


    addToMap(MovableObject) {
        if (MovableObject.otherDirection) {
            this.flipImage(MovableObject)
        }
        MovableObject.draw(this.ctx)
        MovableObject.drawFrame(this.ctx);
        if (MovableObject.otherDirection) {
            this.flipImageBack(MovableObject)
        }
    }


    flipImage(MovableObject) {
        this.ctx.save();
        this.ctx.translate(MovableObject.width, 0);
        this.ctx.scale(-1, 1);
        MovableObject.x = MovableObject.x * -1;
    }


    flipImageBack(MovableObject) {
        MovableObject.x = MovableObject.x * -1;
        this.ctx.restore();
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.isHit();
                    console.log("collision", enemy)
                }
            })
        }, 100)
    }

  
}