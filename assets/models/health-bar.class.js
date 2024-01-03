class HealthBar extends Statusbar {
    percentage = 100;

    IMAGES = [
        "assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png",
        "assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png",
        "assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png",
        "assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png",
        "assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png",
        "assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png"
    ]

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 10;
        this.y = 10;
        this.setPercentage(100);
    }

}