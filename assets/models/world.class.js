class World {
    ctx;
    keyoard;
    character = new Character(50, 200);
    backgroundObjects=level1.backgroundObjects;
    sky=new Sky(0,0);
    clouds =level1.clouds ;
    enemies = level1.enemies;

    constructor(canvas,keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addDrawing(this.sky);
        this.addDrawingArr(this.backgroundObjects);
        this.addDrawing(this.character);
        this.addDrawingArr(this.enemies);
        this.addDrawingArr(this.clouds);
        requestAnimationFrame(() => {
            this.draw();
        });
    }

    addDrawingArr(objs) {
        objs.forEach((obj) => {
            this.addDrawing(obj);
        });
    }

    addDrawing(MovableObject) {
        if(MovableObject.otherDirection){
           this.flipImage(MovableObject);
        }
        this.ctx.drawImage(MovableObject.img, MovableObject.x, MovableObject.y, MovableObject.width, MovableObject.height);
       this.ctx.restore()
    }

    flipImage(MovableObject) {
        this.ctx.save();
        this.ctx.scale(-1, 1);
        this.ctx.drawImage(MovableObject.img, -MovableObject.x - MovableObject.width, MovableObject.y, MovableObject.width, MovableObject.height);
    }
}