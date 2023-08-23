let moves = 0;

function updateMoves() {
  let movesText;
  moves++;
  movesText = moves;

  if (moves < 10) {
    movesText = "0" + moves;
  }

  if (moves >= "20") {
    setTimeout(stopChronometer, 1000);
    setTimeout(finalGame, 500);
    setTimeout(userLost, 500);
  }
  document.getElementById("min-moves").innerText = movesText;
}

function movesRestart() {
  moves = 0;
  movesText = moves;
  movesText = "0" + moves;
  document.getElementById("min-moves").innerText = movesText;
}
