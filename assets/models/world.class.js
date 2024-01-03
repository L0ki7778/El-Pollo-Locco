class World {
    ctx;
    keyboard;
    character = new Character();
    level = level1;
    throwableObjects = [
        new ThrowableObject(),
    ]
    camera_x = 0;
    bars = [
        new HealthBar(),
        new BottleBar(),
        new CoinBar()
    ]
    coin_sound = new Audio("/assets/audio/coin.mp3");



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
        this.addToMapArr(this.bars);
        this.addToMap(this.character);
        this.ctx.save();
        this.addToMap(this.throwableObjects[0]);
        this.ctx.restore();
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
        if (MovableObject instanceof ThrowableObject) { this.rotateImage(MovableObject) }
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
        MovableObject.offset.x = 60 + MovableObject.offset.x * -1;
    }


    flipImageBack(MovableObject) {
        MovableObject.x = MovableObject.x * -1;
        MovableObject.offset.x = 60 + MovableObject.offset.x * -1;
        this.ctx.restore();
    }

    rotateImage(MovableObject) {
        this.ctx.save();
        this.ctx.translate(
            MovableObject.width / 2 + MovableObject.x,
            MovableObject.height / 2 + MovableObject.y
        );
        this.ctx.rotate(MovableObject.rotation);
        this.ctx.translate(
            -MovableObject.width / 2 - MovableObject.x,
            -MovableObject.height / 2 - MovableObject.y
        );
    }


    checkCollisions() {
        // this.enemyCollision()
        this.coinCollision()
    }

    coinCollision() {
        setInterval(() => {
            this.level.coins.forEach((coin) => {
                if (this.character.isColliding(coin)) {
                    this.ctx.clearRect(coin.x, coin.y, coin.width, coin.height);
                    this.level.coins.splice(this.level.coins.indexOf(coin), 1);
                    this.coin_sound.play();
                    this.bars[2].percentage -= 6.25
                    this.bars[2].setPercentage(this.bars[2].percentage)
                }
            })
        }, 100)
    }

    enemyCollision() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.isHit();
                    this.bars[0].setPercentage(this.bars[0].percentage - 20)
                    console.log("collision", enemy)
                }
            })
        }, 100)
    }
}