class Level {
    enemies;
    backgroundObjects;
    clouds;
    level_limit=2880;

    constructor(enemies, backgroundObjects, clouds) {
        this.enemies = enemies
        this.backgroundObjects = backgroundObjects
        this.clouds = clouds
    }
}