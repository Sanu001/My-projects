const character = document.getElementById("character");
const block = document.getElementById("block");
const scoreSpan = document.getElementById("score");
const gameOverMsg = document.getElementById("gameOverMsg");
const restartBtn = document.getElementById("restartBtn");

let score = 0;
let isAlive = true;
let speed = 1.5; // in seconds
let increaseSpeedInterval;
let checkCollisionInterval;

// Make character jump
function jump() {
  if (!character.classList.contains("jump")) {
    character.classList.add("jump");
    setTimeout(() => character.classList.remove("jump"), 500);
  }
}

// Keyboard + touch control
document.addEventListener("keydown", e => {
  if (e.code === "Space" && isAlive) jump();
});
document.addEventListener("touchstart", () => {
  if (isAlive) jump();
});

// Collision detection loop
function startCollisionCheck() {
  checkCollisionInterval = setInterval(() => {
    if (!isAlive) return;

    const charTop = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    const blockRight = parseInt(window.getComputedStyle(block).getPropertyValue("right"));

    if (blockRight > 550 && blockRight < 580 && charTop < 30) {
      gameOver();
    } else {
      score++;
      scoreSpan.textContent = score;
    }
  }, 100);
}

// Increase difficulty over time
function startSpeedIncrease() {
  increaseSpeedInterval = setInterval(() => {
    if (!isAlive) return;

    speed -= 0.1;
    if (speed < 0.5) speed = 0.5;

    block.style.animation = `blockMove ${speed}s linear infinite`;
  }, 5000);
}

// Game Over Logic
function gameOver() {
  isAlive = false;
  block.style.animation = "none";
  block.style.display = "none";
  gameOverMsg.textContent = "Game Over!";
  restartBtn.style.display = "inline-block";
  clearInterval(increaseSpeedInterval);
  clearInterval(checkCollisionInterval);
}

// Restart Game
function restartGame() {
  score = 0;
  speed = 1.5;
  isAlive = true;
  scoreSpan.textContent = score;
  gameOverMsg.textContent = "";
  restartBtn.style.display = "none";

  block.style.display = "block";
  block.style.animation = `blockMove ${speed}s linear infinite`;

  startCollisionCheck();
  startSpeedIncrease();
}

// Start game on load
window.onload = () => {
  startCollisionCheck();
  startSpeedIncrease();
};
