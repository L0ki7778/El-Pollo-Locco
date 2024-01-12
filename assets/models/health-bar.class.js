class HealthBar extends Statusbar {
    percentage = 100;
    x;

    IMAGES = [
        "/El-Pollo-Loco/assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png",
        "/El-Pollo-Loco/assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png",
        "/El-Pollo-Loco/assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png",
        "/El-Pollo-Loco/assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png",
        "/El-Pollo-Loco/assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png",
        "/El-Pollo-Loco/assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png"
    ];


    /**
     * Constructor for the class.
     *
     * @param {type} x - the x coordinate
     * @return {undefined}
     */
    constructor(x) {
        super();
        this.loadImages(this.IMAGES);
        this.x = x;
        this.y = 0;
        this.setPercentage(100);
    };

}

class BossHealth extends Statusbar {
    percentage = 200;
    height = 35;
    width = 180;
    x;

    IMAGES_BOSS = [
        "/El-Pollo-Loco/assets/img/7_statusbars/2_statusbar_endboss/200.png",
        "/El-Pollo-Loco/assets/img/7_statusbars/2_statusbar_endboss/180.png",
        "/El-Pollo-Loco/assets/img/7_statusbars/2_statusbar_endboss/160.png",
        "/El-Pollo-Loco/assets/img/7_statusbars/2_statusbar_endboss/140.png",
        "/El-Pollo-Loco/assets/img/7_statusbars/2_statusbar_endboss/120.png",
        "/El-Pollo-Loco/assets/img/7_statusbars/2_statusbar_endboss/100.png",
        "/El-Pollo-Loco/assets/img/7_statusbars/2_statusbar_endboss/80.png",
        "/El-Pollo-Loco/assets/img/7_statusbars/2_statusbar_endboss/60.png",
        "/El-Pollo-Loco/assets/img/7_statusbars/2_statusbar_endboss/40.png",
        "/El-Pollo-Loco/assets/img/7_statusbars/2_statusbar_endboss/20.png",
        "/El-Pollo-Loco/assets/img/7_statusbars/2_statusbar_endboss/0.png",
    ];

    
    constructor() {
        super();
        this.loadImages(this.IMAGES_BOSS);
        this.y = -40;
        this.setPercentage(200);
    };

    
    /**
     * Sets the percentage value for the object.
     *
     * @param {number} percentage - The new percentage value to set.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        const path = this.IMAGES_BOSS[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    };

    
    /**
     * Resolves the image index based on the percentage value.
     *
     * @return {number} The index of the image based on the percentage value.
     */
    resolveImageIndex() {
        if (this.percentage == 200) {
            return 0;
        } else if (this.percentage >= 180) {
            return 1;
        } else if (this.percentage >= 160) {
            return 2;
        } else if (this.percentage >= 139) {
            return 3;
        } else if (this.percentage >= 119) {
            return 4;
        } else if (this.percentage >= 99) {
            return 5;
        } else if (this.percentage >= 78) {
            return 6;
        } else if (this.percentage >= 58) {
            return 7;
        } else if (this.percentage >= 36) {
            return 8;
        } else if (this.percentage >= 17) {
            return 9;
        } else {
            return 10;
        }
    };
}