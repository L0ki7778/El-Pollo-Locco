class CoinBar extends Statusbar {
    percentage = 100;

    IMAGES = [
        "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png",
        "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png",
        "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png",
        "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png",
        "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png",
        "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png"
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 450;
        this.y = 10;
        this.setPercentage(100);
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 0;
        } else if (this.percentage >= 80) {
            return 1;
        } else if (this.percentage >= 60) {
            return 2;
        } else if (this.percentage >= 40) {
            return 3;
        } else if (this.percentage > 0) {
            return 4;
        } else  if(this.percentage <= 0) {
            return 5;
        } els
    }
    
}