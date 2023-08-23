let chronometer;
let seconds;
let minutes;
let secondsText;
let minutesText;

function startChronometer() {
  seconds = 0;
  minutes = 1;

  function updateChronometer() {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }

    if (minutes < 0) {
      seconds = 0;
      minutes = 0;
      clearInterval(chronometer);
    }

    minutesText = minutes;
    secondsText = seconds;
    if (seconds < 10) {
      secondsText = "0" + seconds;
    }

    if (minutes < 10) {
      minutesText = "0" + minutes;
    }

    if ((minutes === 0) & (seconds === 0)) {
      stopChronometer();
      finalGame();
      userLost();
    }
    document.getElementById("minutes").innerText = minutesText;
    document.getElementById("seconds").innerText = secondsText;
  }

  chronometer = setInterval(updateChronometer, 1000);
}

function stopChronometer() {
  clearInterval(chronometer);
}

function restartChronometer() {
  minutes = 1;
  seconds = 0;

  minutesText = "01";
  secondsText = "00";

  document.getElementById("minutes").innerText = minutesText;
  document.getElementById("seconds").innerText = secondsText;
}
