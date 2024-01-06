let backGroundArr = [];
let cloudArr = [];
let coins = [];

function fillCoins() {
    for (let i = 0; i < 10; i++) {
        coins.push(new Coin(Math.random() * (700) + (i * 50), Math.random() * 100));
    }
}

function fill_backgroundObjects() {
    for (let i = 0; i <= 4; i++) {
        backGroundArr.push(new Sky(720 * i, 0));
        backGroundArr.push(new BackgroundThree(720 * i, this.y - 1));
        backGroundArr.push(new BackgroundTwo(720 * i, this.y - 1));
        backGroundArr.push(new BackgroundOne(720 * i, this.y - 1));
    }
};

function fill_clouds() {
    for (let i = 0; i < 6; i++) {
        cloudArr.push(new Clouds(Math.random() * (700) + (i * 720), Math.random() * 100));
        cloudArr.push(new Clouds(Math.random() * (700) + (i * 720), Math.random() * 100));
        cloudArr.push(new Clouds2(Math.random() * (700) + (i * 720), Math.random() * 100));
        cloudArr.push(new Clouds2(Math.random() * (700) + (i * 720), Math.random() * 100));
    }
}

// fillCoins();
fill_backgroundObjects();
fill_clouds();



const level1 = new Level(
    enemies = [
        new Chicken(1),
        new Chicken(1),
        new Chicken(1),
        new Chicken(1),
        new Chicken(2),
        new Chicken(2),
        new Chicken(2),
        new Chicken(2),
        new Chicken(3),
        new Chicken(3),
        new Chicken(3),
        new Chicken(3),
        new Chick(1),
        new Chick(1),
        new Chick(1),
        new Chick(1),
        new Chick(2),
        new Chick(2),
        new Chick(2),
        new Chick(2),
        new Chick(3),
        new Chick(3),
        new Chick(3),
        new Chick(3),
    ],
    [
        new Endboss()
    ],
    backGroundArr,
    cloudArr,
    coins = [
        new Coin(200, 100),
        new Coin(300, 100),
        new Coin(250, 50),
        new Coin(350, 50),
        new Coin(400, 100),
        new Coin(1100, 100),
        new Coin(1100, 50),
        new Coin(1050, 100),
        new Coin(1050, 50),
        new Coin(1500, 200),
        new Coin(1550, 200),
        new Coin(1600, 200),
        new Coin(1900, 100),
        new Coin(1850, 150),
        new Coin(1900, 200),
        new Coin(1950, 150)
    ],
    bottles = [
        new Bottle(200, "/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(300, "/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(250, "/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(350, "/assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 20),
        new Bottle(400, "/assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 20),
        new Bottle(1100, "/assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 20),
        new Bottle(1100, "/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(1050, "/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(1050, "/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(1500, "/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(1550, "/assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 30),
        new Bottle(1600, "/assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 30),
        new Bottle(1900, "/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(1850, "/assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 30),
        new Bottle(1900, "/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(1950, "/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30)
    ]
)

