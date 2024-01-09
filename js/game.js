let canvas;
let world;
let keyboard = new Keyboard();
let intervalIds = [];

/**
 * Initializes the canvas and sets up the world object.
*
* @return {void} This function does not return anything.
*/
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    canvas.addEventListener('mousemove', showMousePosition);
    addKeyDown();
    addKeyUp();
    pushExtraIntervals();
};

function addKeyDown() {
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
            case "KeyD":
                keyboard.KEY_THROW = true;
                break;
        }
    })
}

function addKeyUp() {
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
            case "KeyD":
                keyboard.KEY_THROW = false;
                break;
        }
    });
}

function interval(func, time) {
    let boundFunc = func.bind(this);
    let intervalId = setInterval(boundFunc, time);
    intervalIds.push(intervalId);
}

function pushExtraIntervals() {
    world.level.enemies.forEach((e) => { intervalIds.push(e.animation_interval) })
}

function stopGame() {
    // for(let i = 0; i<9999;i++){
    //     window.clearInterval(i);
    // }
    intervalIds.forEach((id) => clearInterval(id));
    cancelAnimationFrame(world.drawId)
    console.log(intervalIds)
}


function restartGame() {
    stopGame();
    level1 = null;
    world = null;
    canvas.removeEventListener('mousemove', showMousePosition);
    window.removeEventListener("keydown", function () { });
    window.removeEventListener("keyup", function () { });
    fillLevel();
    resetLevel(enemies, backGroundArr, cloudArr, coins, bottles);
    init()
}