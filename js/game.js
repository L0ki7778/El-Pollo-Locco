let canvas;
let world;
let keyboard = new Keyboard();

/**
 * Initializes the canvas and sets up the world object.
*
* @return {void} This function does not return anything.
*/
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas,keyboard);
    canvas.addEventListener('mousemove', showMousePosition);
    window.addEventListener("keydown", (event) => {
        switch (event.code) {
            case "ArrowLeft":
                keyboard.KEY_LEFT = true;
                keyboard.KEY_RIGHT = false;
                break;
            case "ArrowRight":
                keyboard.KEY_RIGHT = true;
                keyboard.KEY_LEFT = false;
                break;
            case "ArrowUp":
                keyboard.KEY_UP = true;
                break;
            case "ArrowDown":
                keyboard.KEY_DOWN = true;
                break;
            case "Space":
                keyboard.KEY_SPACE = true;
                break;
            case "Shift":
                keyboard.KEY_THROW = true;
                break;
        }
    })
    
    window.addEventListener("keyup", (event) => {
        switch (event.code) {
            case "ArrowLeft":
                keyboard.KEY_LEFT = false;
                break;
            case "ArrowRight":
                keyboard.KEY_RIGHT = false;
                break;
            case "ArrowUp":
                keyboard.KEY_UP = false;
                break;
            case "ArrowDown":
                keyboard.KEY_DOWN = false;
                break;
            case "Space":
                keyboard.KEY_SPACE = false;
                break;
            case "Shift":
                keyboard.KEY_THROW = false;
                break;
        }
    })
}
