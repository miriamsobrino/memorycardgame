function correct(cards) {
  cards.forEach((element) => {
    element.classList.add("correct");
  });
}

function error(cards) {
  cards.forEach((element) => {
    element.classList.add("error");
  });

  setTimeout(function () {
    cards.forEach((element) => {
      element.classList.remove("visible");
      element.classList.remove("error");
    });
  }, 1000);
}
