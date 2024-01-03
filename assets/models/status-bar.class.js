class Statusbar extends DrawableObject {
    percentage = 100;
    IMAGES=[];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.height = 60;
        this.width = 200;
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        const path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 0;
        } else if (this.percentage > 80) {
            return 1;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 3;
        } else if (this.percentage > 0) {
            return 4;
        } else {
            return 5;
        }
    }

}