
console.log ("!up and running");

// var timers = [];

// timers.push({
// 	delay: 500, // timer fires every 500ms 
// 	nextFireTime: 0,

// 	counter: 0, //accumulate the number of times the timer fired
// })

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var paddleHeight = 15;
var paddleWidth = 85;
var paddleX = (canvas.width - paddleWidth) / 2;
//var paddleY = (canvas.height - paddleHeight) / 2;

var rightPressed = false;
var leftPressed = false;

var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;

var ballRadius = 10;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

function getRandomColor() {
			var letters = '0123456789ABCDEF';
			var color = '#';
			for (var i = 0; i < 6; i++) {
				color += letters[Math.floor(Math.random() * 16)];
			}
			return color;
		}
function setRandomColor() {
	$("#myCanvas").css("color", getRandomColor());
	$("#myCanvas").css("background-color", getRandomColor());
}

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	//ctx.fillStyle = getRandomColor();
	ctx.fill();
	ctx.closePath();
}

function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
	//ctx.fillStyle = "#25213D";
	ctx.fill();
	ctx.closePath();
}

function draw() {
    // drawing code
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBall(); 
	drawPaddle();
	 
	x += dx;
	y += dy;

	if ((x + dx > canvas.width - ballRadius) || (x + dx < ballRadius)) {
		dx = -dx;
		ctx.fillStyle = getRandomColor();
	}
	if (y + dy < ballRadius) {
		dy = -dy;
		ctx.fillStyle = getRandomColor();
	} else if (y + dy > canvas.height - ballRadius - paddleHeight) {

		if (x > paddleX && x < paddleX + paddleWidth) {
			dy = -1.01 * dy;
			ctx.fillStyle = getRandomColor();
		} else {
			alert("GAME OVER");
			alert = function() {};
			document.location.reload();
		}
	}
	if (rightPressed && paddleX < canvas.width-paddleWidth) {
    	paddleX += 7;
    	ctx.fillStyle = getRandomColor();
	} else if (leftPressed && paddleX > 0) {
    	paddleX -= 7;
    	ctx.fillStyle = getRandomColor();
	}

}


setInterval(draw, 10);