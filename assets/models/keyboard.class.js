class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    THROW = false;
    constructor() {}

    keyPushed(code) {
        switch (code) {
            case "ArrowLeft":
                this.LEFT = true;
                console.log("ArrowLeft" + this.LEFT)
                break;
            case "ArrowRight":
                this.RIGHT = true;
                console.log("ArrowRight" + this.RIGHT)
                break;
            case "ArrowUp":
                this.UP = true;
                console.log("ArrowUp" + this.UP)
                break;
            case "ArrowDown":
                this.DOWN = true;
                console.log("ArrowDown" + this.DOWN)
                break;
            case "Space":
                this.SPACE = true;
                console.log("Space" + this.SPACE)
                break;
            case "Shift":
                this.THROW = true;
                console.log("Shift" + this.THROW)
                break;
        }
    }

    keyReleased(code) {
        switch (code) {
            case "ArrowLeft":
                this.LEFT = false;
                console.log("ArrowLeft" + this.LEFT)
                break;
            case "ArrowRight":
                this.RIGHT = false;
                console.log("ArrowRight" + this.RIGHT)
                break;
            case "ArrowUp":
                this.UP = false;
                console.log("ArrowUp" + this.UP)
                break;
            case "ArrowDown":
                this.DOWN = false;
                console.log("ArrowDown" + this.DOWN)
                break;
            case "Space":
                this.SPACE = false;
                console.log("Space" + this.SPACE)
                break;
            case "Shift":
                this.THROW = false;
                console.log("Shift" + this.THROW)
                break;
        }
    }
}