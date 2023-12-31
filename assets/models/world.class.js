class World {
    ctx;
    drawId;
    keyboard;
    character = new Character();
    level = level1;
    throwableObjects = []
    camera_x = 0;
    splashes = [];
    globalAlpha = 1;
    alphaDecrease = 0.01;
    fadingAlpha = 1;
    characterBars = [
        new HealthBar(10),
        new BottleBar(),
        new CoinBar()
    ];
    bossBar = new BossHealth(2800);
    endBoss = new Endboss();
    coin_sound = new Audio("/assets/audio/coin.mp3");
    bottle_sound = new Audio("/assets/audio/bottle.mp3");


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.offsetX = this.canvas.getBoundingClientRect().x;
        this.offsetY = this.canvas.getBoundingClientRect().y;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.checkCollisions();

    };


    setWorld() {
        this.character.world = this;
        this.character.healthBar = this.characterBars[0];
        this.endBoss.world = this;
        this.endBoss.healthBar = this.bossBar;
    };


    draw() {
        this.resetSurvingEnemies();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);//verschiebt die kamera
        this.ctx.globalAlpha = this.globalAlpha;
        this.addToMapArr(this.level.backgroundObjects);
        this.addToMapArr(this.level.clouds);
        if (this.level.coins.length > 0) {
            this.addToMapArr(this.level.coins);
        };
        this.addToMapArr(this.level.bottles);
        this.addToMapArr(this.characterBars);
        this.addToMap(this.bossBar);

        if (this.character.isFadingOut) {
            this.ctx.globalAlpha = this.fadingAlpha - this.alphaDecrease;
            this.fadingAlpha -= this.alphaDecrease;

            this.addToMap(this.character);
        } else {
            this.addToMap(this.character);
        };
        this.ctx.globalAlpha = 1;
        this.addToMapArr(this.level.enemies);
        this.addToMap(this.endBoss);
        if (this.splashes.length > 0) {
            this.splashes.forEach((e) => {
                if (e.isFadingOut) {
                    this.ctx.globalAlpha = this.fadingAlpha - this.alphaDecrease;
                    if (this.ctx.globalAlpha <= 0.02) {
                        return this.splashes.splice(this.splashes[0], 1),
                            this.ctx.globalAlpha = 1, this.fadingAlpha = 1;
                    } else {
                        this.fadingAlpha -= this.alphaDecrease;
                        this.addToMap(e);
                        this.ctx.globalAlpha = 1;
                    }
                } else {
                    this.addToMap(e);
                }
            })
        };
        this.ctx.save();
        if (this.throwableObjects[0]) {
            if (!this.throwableObjects[0].broken) {
                this.addToMap(this.throwableObjects[0]);
            }
        };
        this.ctx.restore();
        this.ctx.translate(-this.camera_x, 0);//setzt die kamera zurück
        this.drawId = requestAnimationFrame(() => {
            this.draw();
        });
    }


    addToMapArr(objs) {
        objs.forEach((obj) => {
            this.addToMap(obj);
        });
    }


    addToMap(MovableObject) {
        try {
            if (MovableObject instanceof ThrowableObject) { this.rotateImage(MovableObject) }
            if (MovableObject.otherDirection) this.flipImage(MovableObject);
            MovableObject.draw(this.ctx)
            MovableObject.drawFrame(this.ctx);
            if (MovableObject.otherDirection) this.flipImageBack(MovableObject);
        } catch (err) {
            console.log(err, MovableObject)
        };
    }


    flipImage(MovableObject) {
        this.ctx.save();
        this.ctx.translate(MovableObject.width, 0);
        this.ctx.scale(-1, 1);
        MovableObject.x = MovableObject.x * -1;
        MovableObject.offset.x = 60 + MovableObject.offset.x * -1;
    };


    flipImageBack(MovableObject) {
        MovableObject.x = MovableObject.x * -1;
        MovableObject.offset.x = 60 + MovableObject.offset.x * -1;
        this.ctx.restore();
    };


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
    };


    checkCollisions() {
        this.coinCollision();
        this.bottleCollection();
        this.bottleEnemyCollision();
        this.enemyCollision();
        this.endBossCollision();
    };


    coinCollision() {
        interval.call(this, this.takeCoins, 10)
    };


    takeCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.coin_sound.play();
                this.ctx.clearRect(coin.x, coin.y, coin.width, coin.height);
                this.level.coins.splice(this.level.coins.indexOf(coin), 1);
                this.characterBars[2].percentage -= 6.25
                this.characterBars[2].setPercentage(this.characterBars[2].percentage)
            }
        })
    }


    bottleCollection() {
        interval.call(this, this.collectBottles, 10)
    };

    collectBottles() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle) && this.throwableObjects.length < 5) {
                this.ctx.clearRect(bottle.x, bottle.y, bottle.width, bottle.height);
                this.bottle_sound.play();
                console.log(bottle)
                this.level.bottles.splice(this.level.bottles.indexOf(bottle), 1);
                this.throwableObjects.push(new ThrowableObject());
                this.characterBars[1].percentage -= 20;
                this.characterBars[1].setPercentage(this.characterBars[1].percentage)
            }
        })
    }


    bottleEnemyCollision() {
        interval.call(this, this.bottleCollides, 10)
    };


    bottleCollides() {
        this.level.enemies.forEach((enemy) => {
            if (this.throwableObjects.length > 0) {
                let bottle = this.throwableObjects[0];
                if (bottle.isColliding(enemy) && enemy instanceof Chicken) {
                    this.bottleBreak(bottle);
                    this.chickenDies(enemy);
                } else if (bottle.isColliding(this.endBoss) && !this.endBoss.invincible) {
                    this.bottleBreak(bottle);
                    this.endBoss.isHit();
                }
            };
        })
    }


    endBossCollision() {
        interval.call(this, this.characterBossInteraction, 10)
    };


    characterBossInteraction() {
        if (this.bossBehindCharacter()) {
            this.character.energie = 0;
            this.character.healthBar.setPercentage(0);
        }
        if (this.character.isColliding(this.endBoss)) {
            this.character.isHit();
        };
    }


    bossBehindCharacter() {
        return (this.endBoss.offset.x + this.endBoss.offset.width < this.character.x);
    }


    enemyCollision() {
        interval.call(this, this.characterEnemyInteraction, 10)
    };


    characterEnemyInteraction() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isJumping) {
                if (this.character.isJumpingUpon(enemy) && enemy instanceof Chicken) {
                    if (enemy instanceof Chick) {
                        this.littleChickDies(enemy)
                    } else {
                        this.chickenDies(enemy);
                        this.character.speedY = 5;
                        this.character.jumpImage = this.character.IMAGES_JUMPING.length - 2;
                    };
                };
            } else if (this.character.isColliding(enemy)) {
                this.character.isHit();
            };
        })
    }


    chickenDies(enemy) {
        return (enemy.getsPlucked(this.level.enemies.indexOf(enemy)),
            setTimeout(() => {
                enemies.splice(this.level.enemies.indexOf(enemy), 1);
            }, 1000));
    };


    littleChickDies(enemy) {
        return (enemy.getsStompedOn(this.level.enemies.indexOf(enemy)),
            setTimeout(() => {
                enemies.splice(this.level.enemies.indexOf(enemy), 1);
            }, 1000));
    };


    resetSurvingEnemies() {
        this.level.enemies.forEach((e) => {
            if (e.x + e.width < 0) { e.x = 2800 }
        })
        this.level.clouds.forEach((e) => {
            if (e.x + e.width < 0) { e.x = 2800 }
        })
    };


    bottleBreak(bottle) {
        this.splashes.push(new Splash(bottle.x + 10, bottle.y + 30));
        bottle.break();
        this.throwableObjects.splice(this.throwableObjects.indexOf(bottle), 1);
        this.throwableObjects.push(new ThrowableObject());
    }

}