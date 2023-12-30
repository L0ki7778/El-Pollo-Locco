class World {
    ctx;
    keyboard;
    character = new Character();
    level = level1;
    camera_x = 0;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }
    

    setWorld() {
        this.character.world = this
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);//verschiebt die kamera
        
        this.addToMapArr(this.level.backgroundObjects);
        this.addToMapArr(this.level.clouds);
        
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
        this.ctx.drawImage(MovableObject.img, MovableObject.x, MovableObject.y, MovableObject.width, MovableObject.height);
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


    
}