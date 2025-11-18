const canvasEle = document.getElementById("my-canvas");
const textCanvas = document.getElementById("my-text-canvas");

const ctx = canvasEle.getContext("2d");
const textCanvasCtx = textCanvas.getContext("2d");

// Set the background color
ctx.fillStyle = "crimson";

// Draw a rectangle
ctx.fillRect(1, 1, 150, 100);

// Set font family and size
textCanvasCtx.font = "30px Arial";

// Set text color
textCanvasCtx.fillStyle = "crimson";

// Draw the text
textCanvasCtx.fillText("Hello HTML Canvas!", 1, 30);
