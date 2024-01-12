let backGroundArr = [];
let cloudArr = [];
let enemies = [];
let coins = [];
let bottles = [];



/**
 * Generate an array of Bottle objects filled with specified properties.
 *
 * @return {Array<Bottle>} An array of Bottle objects.
 */
function fillBottles(){
    return bottles = [
        new Bottle(200, "/El-Pollo-Loco/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(300, "/El-Pollo-Loco/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(250, "/El-Pollo-Loco/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(350, "/El-Pollo-Loco/assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 20),
        new Bottle(400, "/El-Pollo-Loco/assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 20),
        new Bottle(600, "/El-Pollo-Loco/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(650, "/El-Pollo-Loco/assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 20),
        new Bottle(750, "/El-Pollo-Loco/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(700, "/El-Pollo-Loco/assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 20),
        new Bottle(1100, "/El-Pollo-Loco/assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 20),
        new Bottle(1150, "/El-Pollo-Loco/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(1050, "/El-Pollo-Loco/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(1000, "/El-Pollo-Loco/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(1500, "/El-Pollo-Loco/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(1550, "/El-Pollo-Loco/assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 30),
        new Bottle(1600, "/El-Pollo-Loco/assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 30),
        new Bottle(1800, "/El-Pollo-Loco/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(1850, "/El-Pollo-Loco/assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 30),
        new Bottle(1900, "/El-Pollo-Loco/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30),
        new Bottle(1950, "/El-Pollo-Loco/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 30)
    ];
};


/**
 * Generates an array of coin objects and fills it with initial values.
 *
 * @return {Array} An array of Coin objects.
 */
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
};


/**
 * Fills the background objects array.
 *
 * @return {Array} The filled background objects array.
 */
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


/**
 * Creates an array of cloud objects and returns it.
 *
 * @return {Array} The array of cloud objects.
 */
function fillClouds() {
    let arr = [];
    for (let i = 0; i < 6; i++) {
        arr.push(new Clouds(Math.random() * (700) + (i * 720), Math.random() * 100));
        arr.push(new Clouds(Math.random() * (700) + (i * 720), Math.random() * 100));
        arr.push(new Clouds2(Math.random() * (700) + (i * 720), Math.random() * 100));
        arr.push(new Clouds2(Math.random() * (700) + (i * 720), Math.random() * 100));
    }
    return cloudArr = arr;
};


/**
 * Generates an array of enemies.
 *
 * @return {Array} An array of enemy objects.
 */
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
};


/**
 * Fills the level with coins, background objects, clouds, enemies, and bottles.
 *
 * @param {type} paramName - description of parameter
 * @return {type} description of return value
 */
function fillLevel() {
    fillCoins();
    fillBackgroundObjects();
    fillClouds();
    fillEnemies();
    fillBottles();
};


fillLevel();
/**
 * Resets the level with the given enemies, background array, cloud array, coins, and bottles.
 *
 * @param {Array} enemies - The enemies for the level.
 * @param {Array} backGroundArr - The background array for the level.
 * @param {Array} cloudArr - The cloud array for the level.
 * @param {Array} coins - The coins for the level.
 * @param {Array} bottles - The bottles for the level.
 */
function resetLevel(enemies,backGroundArr,cloudArr,coins,bottles) {
    level1 = new Level(
        enemies=enemies,
        backGroundArr=backGroundArr,
        cloudArr=cloudArr,
        coins=coins,
        bottles=bottles
    )
};

let level1 = new Level(
    enemies,
    backGroundArr,
    cloudArr,
    coins,
    bottles
)