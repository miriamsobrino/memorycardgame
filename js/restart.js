function restart() {
  removeFinalScreen();
  movesRestart();
  restartChronometer();
  startGame();
}

let restartButton = document.getElementById("restart-btn");
restartButton.addEventListener("click", restart);
