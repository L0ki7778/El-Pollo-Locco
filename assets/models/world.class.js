class World {
    ctx;
    keyboard;
    character = new Character();
    backgroundOne = new BackgroundOne(0, this.y);
    backgroundTwo = new BackgroundTwo(0, this.y);
    backgroundThree = new BackgroundThree(0, this.y);
    sky = new Sky(0, 0);

    clouds = [
        new Clouds(Math.random() * 700, Math.random() * 150),
        new Clouds(Math.random() * 700, Math.random() * 150),
        new Clouds2(Math.random() * 700, Math.random() * 150),
        new Clouds2(Math.random() * 700, Math.random() * 150),
    ];

    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld()
    }

    setWorld() {
        this.character.world = this
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addToMap(this.sky);
        this.addToMap(this.backgroundThree);
        this.addToMap(this.backgroundTwo);
        this.addToMap(this.backgroundOne);
        this.addToMap(this.character);
        this.addToMapArr(this.enemies);
        this.addToMapArr(this.clouds);
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
            this.ctx.save();
            this.ctx.translate(MovableObject.width, 0);
            this.ctx.scale(-1, 1);
            MovableObject.x = MovableObject.x * -1;
        }
        this.ctx.drawImage(MovableObject.img, MovableObject.x, MovableObject.y, MovableObject.width, MovableObject.height);
        if (MovableObject.otherDirection) {
            MovableObject.x = MovableObject.x * -1;
            this.ctx.restore();
        }
    }

    flipImage(MovableObject) {
        this.ctx.save();
        // this.ctx.translate(MovableObject.width, 0);
        this.ctx.scale(-1, 1);
        // MovableObject.x = MovableObject.x * -1; Ich habe den Vorschlag verändert, um auf die transition zu verzichten
        MovableObject.x = MovableObject.x + MovableObject.width;
    }

    flipImageBack(MovableObject) {
        MovableObject.x = MovableObject.x + MovableObject.width;
        this.ctx.restore();
    }
}