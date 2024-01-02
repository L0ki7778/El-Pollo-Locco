class Level {
    enemies;
    backgroundObjects;
    clouds;
    coins;
    level_limit=2880;

    constructor(enemies, backgroundObjects, clouds,coins) {
        this.enemies = enemies
        this.backgroundObjects = backgroundObjects
        this.clouds = clouds
        this.coins = coins
    }
}