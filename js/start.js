
titleGame.classList.add('hidden');
function startGame() {
  titleGame.classList.remove('hidden');
  startScreen.classList.add('hidden');

  dealingCards();

  let eachCard = document.querySelectorAll(".card-container");
  eachCard.forEach((element) => {
    element.addEventListener("click", visibleCards);
  });

  setTimeout(startChronometer, 100);
}

startButton.addEventListener('click', startGame);