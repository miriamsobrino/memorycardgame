function visibleCards() {
  let visibles;
  let totalVisbiles = document.querySelectorAll(".visible:not(.correct)");

  if (totalVisbiles.length > 1) {
    return;
  }
  this.classList.add("visible");

  visibles = document.querySelectorAll(".visible:not(.correct)");
  if (visibles.length < 2) {
    return;
  }

  compare(visibles);
  updateMoves();

  let pendingCards = document.querySelectorAll(".card-container:not(.correct)");
  if (pendingCards.length === 0) {
    stopChronometer();
    setTimeout(finalGame, 500);
    userWin();
  }
}

function compare(compareVisibles) {
  if (compareVisibles[0].dataset.valor === compareVisibles[1].dataset.valor) {
    correct(compareVisibles);
  } else {
    error(compareVisibles);
  }
}
