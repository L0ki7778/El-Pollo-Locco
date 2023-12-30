let canvas;
let world;
let X;
let bgX;
// let keyboard = new Keyboard();

/**
 * Initializes the canvas and sets up the world object.
*
* @return {void} This function does not return anything.
*/
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);
    canvas.addEventListener('mousemove', showMousePosition);
}

