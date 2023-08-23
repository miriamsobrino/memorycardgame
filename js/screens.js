let finalScreen = document.getElementById("final-game");
let message = document.getElementById("message");

function finalGame() {
  titleGame.classList.add("hidden");
  table.classList.add("hidden");
  setTimeout(addFinalScreen, 500);
}

function userWin() {
  message.innerText = "Congratulations, you won! 🎉";
}

function userLost() {
  message.innerText = "You lost...😔 try again!";
}

function addFinalScreen() {
  finalScreen.classList.remove("hidden");
}

function removeFinalScreen() {
  titleGame.classList.remove("hidden");
  table.classList.remove("hidden");
  finalScreen.classList.add("hidden");
}

function initialize() {
  titleGame.classList.add("hidden");
  table.classList.add("hidden");
}
