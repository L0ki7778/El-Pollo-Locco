class World {
    ctx;
    character = new Character(50, 200);
    backgroundOne = new BackgroundOne(0,this.y);
    backgroundTwo = new BackgroundTwo(0,this.y);
    backgroundThree = new BackgroundThree(0,this.y);
    sky=new Sky(0,0);

    clouds = [
        new Clouds(Math.random() * 700, Math.random() * 150),
        new Clouds(Math.random() * 700, Math.random() * 150),
        new Clouds2(Math.random() * 700, Math.random() * 150),
        new Clouds2(Math.random() * 700, Math.random() * 150),
    ];

    enemies = [
        new Chicken(Math.random() * 500 + 200, 395),
        new Chicken(Math.random() * 500 + 200, 395),
        new Chicken(Math.random() * 500 + 200, 395),
    ];

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addDrawing(this.sky);
        this.addDrawing(this.backgroundThree);
        this.addDrawing(this.backgroundTwo);
        this.addDrawing(this.backgroundOne);
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
        this.ctx.drawImage(MovableObject.img, MovableObject.x, MovableObject.y, MovableObject.width, MovableObject.height);
    }
}