let canvas;
let ctx;
let character = new MovableObject(50,50);

function init(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    console.log(character);
    canvas.addEventListener('mousemove', showMousePosition);
}