class Level {
    level_limit = 2880;
    enemies;
    backgroundObjects;
    clouds;
    coins;
    boss;
    bottles

    constructor(enemies,boss, backgroundObjects, clouds, coins, bottles) {
        this.enemies = enemies;
        this.boss = boss;
        this.backgroundObjects = backgroundObjects;
        this.clouds = clouds;
        this.coins = coins;
        this.bottles = bottles;
    }
}