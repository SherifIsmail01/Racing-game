
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// var image = document.createElement("img");
// image.setAttribute("src", "racing-game/download.jpeg");
// document.getElementById("myCanvas").appendChild("image");

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var rectWidth = 100;
var rightPressed = false;

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
}

var x1 = 40;
var y1 = 300;
var x2 = 40;
var y2 = 370;

var dx1 = 4.5;
var dy1 = 0;

var dx2 = 5;
var dy2 = 0;

function drawRect1() {
	ctx.beginPath();
	ctx.rect(x1, y1, 100, 40);
	ctx.fillStyle = "#FF0000";
	ctx.fill();
	ctx.closePath();

}	
function drawRect2() {
	ctx.beginPath();
	ctx.rect(x2, y2, 100, 40);
	ctx.fillStyle = "#00FF00";
	ctx.fill();
	ctx.closePath();

}

var reset = drawRect1; drawRect2;


function start() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawRect1();
	drawRect2();
	x1 += dx1;
	y1 += dy1;
	
	if(rightPressed && rectWidth < canvas.width - rectWidth) {
    	drawRect2();
    	x2 += dx2;
	}

	if ((x1 + dx1 > canvas.width - rectWidth) && (x2 + dx2 < canvas.width - rectWidth)) {
		alert("Computer wins");
		alert = function() {};
		clearInterval();
		
	} else if ((x2 + dx2 > canvas.width - rectWidth) && (x1 + dx1 < canvas.width - rectWidth)) {
		alert("Green player wins");	
		alert = function() {};
		clearInterval();
	}
	reset;

	
}
setInterval(start, 30);













