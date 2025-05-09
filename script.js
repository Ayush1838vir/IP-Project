const playerCar = document.getElementById("player-car");
const enemyCar = document.getElementById("enemy-car");
const scoreElement = document.getElementById("score");
let score = 0;
let gameInterval;

// Move player car
document.addEventListener("keydown", (event) => {
  const playerCarRect = playerCar.getBoundingClientRect();
  if (event.key === "ArrowLeft" && playerCarRect.left > 0) {
    playerCar.style.left = playerCarRect.left - 10 + "px";
  }
  if (event.key === "ArrowRight" && playerCarRect.right < 300) {
    playerCar.style.left = playerCarRect.left + 10 + "px";
  }
});

// Move enemy car
function moveEnemyCar() {
  const enemyCarRect = enemyCar.getBoundingClientRect();
  if (enemyCarRect.top >= 400) {
    enemyCar.style.top = "-80px";
    enemyCar.style.left = Math.random() * 250 + "px";
    score++;
    scoreElement.textContent = score;
  } else {
    enemyCar.style.top = enemyCarRect.top + 5 + "px";
  }

  // Check for collision
  if (
    enemyCarRect.bottom >= playerCar.getBoundingClientRect().top &&
    enemyCarRect.left <= playerCar.getBoundingClientRect().right &&
    enemyCarRect.right >= playerCar.getBoundingClientRect().left
  ) {
    alert("Game Over! Your score: " + score);
    clearInterval(gameInterval);
    location.reload();
  }
}

// Start game
gameInterval = setInterval(moveEnemyCar, 20);