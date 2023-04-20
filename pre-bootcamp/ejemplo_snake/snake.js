const canvas = document.getElementById("game-board");
const ctx = canvas.getContext("2d");

const snakeSize = 10;
const width = canvas.width;
const height = canvas.height;

let snake = [];
let score = 0;

let food = {
    x: Math.floor(Math.random() * (width / snakeSize)) * snakeSize,
    y: Math.floor(Math.random() * (height / snakeSize)) * snakeSize,
};

let direction = "right";
let paused = false;

snake[0] = {
    x: (Math.floor(width / snakeSize / 2) * snakeSize),
    y: (Math.floor(height / snakeSize / 2) * snakeSize)
};

function drawSnake() {
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = "#fff";
        ctx.fillRect(snake[i].x, snake[i].y, snakeSize, snakeSize);
    }
}

function drawFood() {
    ctx.fillStyle = "#f00";
    ctx.fillRect(food.x, food.y, snakeSize, snakeSize);
}

function checkCollision(x, y, array) {
    for (let i = 0; i < array.length; i++) {
        if (x == array[i].x && y == array[i].y) {
            return true;
        }
    }
    return false;
}
var lastTime = 0;
var fps = 10;
var interval = 1000 / fps;
var delta = 0;
var now;

function update(timestamp) {
    requestAnimationFrame(update);
    delta += timestamp - lastTime;
    lastTime = timestamp;
    if (delta > interval && !paused) {
        delta = delta % interval;

        ctx.clearRect(0, 0, width, height);
        drawSnake();

        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        if (direction == "right") snakeX += snakeSize;
        if (direction == "left") snakeX -= snakeSize;
        if (direction == "up") snakeY -= snakeSize;
        if (direction == "down") snakeY += snakeSize;

        if (snakeX < 0) {
            snakeX = width - snakeSize;
        } else if (snakeX >= width) {
            snakeX = 0;
        } else if (snakeY < 0) {
            snakeY = height - snakeSize;
        } else if (snakeY >= height) {
            snakeY = 0;
        }

        if (checkCollision(snakeX, snakeY, snake)) {
            restartGame();
            return;
        }

        if (snakeX == food.x && snakeY == food.y) {
            food = {
                x: Math.floor(Math.random() * (width / snakeSize)) * snakeSize,
                y: Math.floor(Math.random() * (height / snakeSize)) * snakeSize,
            };
            score++;
        } else {
            snake.pop();
        }

        let newHead = {
            x: snakeX,
            y: snakeY,
        };

        snake.unshift(newHead);

        drawFood();

        ctx.fillStyle = "#fff";
        ctx.font = "20px Arial";
        ctx.fillText("Score: " + score, 10, 25);
    }

}

requestAnimationFrame(update);

function restartGame() {
    snake = [{ x: 0, y: 0 }];
    direction = "right";
    food = {
        x: Math.floor(Math.random() * (width / snakeSize)) * snakeSize,
        y: Math.floor(Math.random() * (height / snakeSize)) * snakeSize,
    };
    score = 0;
}

function easy() {
    restartGame();
    fps = 10;
    interval = 1000 / fps;
    return true;
}

function medium() {
    restartGame();
    fps = 20; 
    interval = 1000 / fps;
    return true;
}

function hard() {
    restartGame();
    fps = 30; 
    interval = 1000 / fps;
    return true;
}

document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        paused = !paused;
        if (paused) {
            var pLabel = document.getElementById("pause-label");
            pLabel.innerHTML = " &#9208; Pausa";
        }
        else {
            var pLabel = document.getElementById("pause-label");
            pLabel.innerHTML = "";

        }
    } else if (event.code === "ArrowRight" && direction !== "left") {
        direction = "right";
    } else if (event.code === "ArrowLeft" && direction !== "right") {
        direction = "left";
    } else if (event.code === "ArrowUp" && direction !== "down") {
        event.preventDefault();
        direction = "up";
    } else if (event.code === "ArrowDown" && direction !== "up") {
        event.preventDefault();
        direction = "down";
    }
});

