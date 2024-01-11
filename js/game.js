let canvas;
let world;
let characterAlive = true;
let bossAlive = true;
let keyboard = new Keyboard();
let intervalIds = [];
let backgroundMusic = new Audio("/assets/audio/backgroundMusic.mp3"); 
let intro_music = new Audio("/assets/audio/bossIntro.mp3");
let winning_sound = new Audio("/assets/audio/win.mp3");
let sound = true;
let music = true;
let fullscreen = false;
let mobileIds=["left", "right", "jump","throw"];

/**
 * Initializes the canvas and sets up the world object.
*
* @return {void} This function does not return anything.
*/
function init() {
    if(world && world.drawId !== undefined) {
       return restartGame()
    }else{
        hideStartScreen();
        canvas = document.getElementById('canvas');
        world = new World(canvas, keyboard);
        canvas.addEventListener('mousemove', showMousePosition);
        addKeyDown();
        addKeyUp();
        pushExtraIntervals();
    }
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


function mobileListener(){
    mobileIds.forEach((id)=>{
        document.getElementById(id).addEventListener("touchstart", ()=>{
            if(id=="left") keyboard.KEY_LEFT = true;
            if(id=="right") keyboard.KEY_RIGHT = true;
            if(id=="jump") keyboard.KEY_UP = true;
            if(id=="throw") keyboard.KEY_THROW = true;
        })
        document.getElementById(id).addEventListener("touchend", ()=>{
            if(id=="left") keyboard.KEY_LEFT = false;
            if(id=="right") keyboard.KEY_RIGHT = false;
            if(id=="jump") keyboard.KEY_UP = false;
            if(id=="throw") keyboard.KEY_THROW = false;
        })
    })
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
    intervalIds.forEach((id) => clearInterval(id));
    cancelAnimationFrame(world.drawId)
    console.log(intervalIds)
}


function restartGame() {
    canvas = document.getElementById('canvas');
    stopGame();
    closeGameMenu();
    level1 = null;
    world = null;
    canvas.removeEventListener('mousemove', showMousePosition);
    window.removeEventListener("keydown", function () { });
    window.removeEventListener("keyup", function () { });
    fillLevel();
    resetLevel(enemies, backGroundArr, cloudArr, coins, bottles);
    alive = true;
    init()
}
