function showMousePosition(event) {
    let canvas = document.getElementById('canvas');
    let rect = canvas.getBoundingClientRect();
    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;
    console.clear();
    console.log('Mouse Position on Canvas:');
    console.log('X: ' + mouseX);
    console.log('Y: ' + mouseY);
  }
  canvas = document.getElementById('canvas');
