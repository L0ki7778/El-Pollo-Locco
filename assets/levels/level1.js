let backGroundArr = [];
let cloudArr = [];
let enemies = [];
let coins = [];
let bottles = [];

function fillBottles(){
    return bottles = [
        new Bottle(200, "/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(300, "/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(250, "/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(350, "/assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 20),
        new Bottle(400, "/assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 20),
        new Bottle(600, "/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(650, "/assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 20),
        new Bottle(750, "/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(700, "/assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 20),
        new Bottle(1100, "/assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 20),
        new Bottle(1100, "/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(1050, "/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(1050, "/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(1500, "/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(1550, "/assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 30),
        new Bottle(1600, "/assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 30),
        new Bottle(1800, "/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(1850, "/assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 30),
        new Bottle(1900, "/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(1950, "/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30)
    ];
}

function fillCoins() {
    return coins = [
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
    ]
}

function fillBackgroundObjects() {
    let arr = [];
    for (let i = 0; i <= 4; i++) {
        arr.push(new Sky(720 * i, 0));
        arr.push(new BackgroundThree(720 * i, this.y - 1));
        arr.push(new BackgroundTwo(720 * i, this.y - 1));
        arr.push(new BackgroundOne(720 * i, this.y - 1));
    }
    return backGroundArr = arr;
};

function fillClouds() {
    let arr = [];
    for (let i = 0; i < 6; i++) {
        arr.push(new Clouds(Math.random() * (700) + (i * 720), Math.random() * 100));
        arr.push(new Clouds(Math.random() * (700) + (i * 720), Math.random() * 100));
        arr.push(new Clouds2(Math.random() * (700) + (i * 720), Math.random() * 100));
        arr.push(new Clouds2(Math.random() * (700) + (i * 720), Math.random() * 100));
    }
    return cloudArr = arr;
}

function fillEnemies() {
    let arr = [];
    for (let i = 1; i < 4; i++) {
        arr.push(new Chicken(i));
        arr.push(new Chick(i))
        arr.push(new Chicken(i));
        arr.push(new Chick(i))
        arr.push(new Chicken(i));
        arr.push(new Chick(i))
        arr.push(new Chicken(i));
        arr.push(new Chick(i))
    }
    return enemies = arr;
}


function fillLevel() {
    fillCoins();
    fillBackgroundObjects();
    fillClouds();
    fillEnemies();
    fillBottles();
}



fillLevel();
function resetLevel(enemies,backGroundArr,cloudArr,coins,bottles) {
    level1 = new Level(
        enemies=enemies,
        backGroundArr=backGroundArr,
        cloudArr=cloudArr,
        coins=coins,
        bottles=bottles
    )
}
let level1 = new Level(
    enemies,
    backGroundArr,
    cloudArr,
    coins,
    bottles
)


