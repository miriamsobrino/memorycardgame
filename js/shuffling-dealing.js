function shufflingCards() {
  let result;

  result = totalCards.sort(function () {
    return 0.5 - Math.random();
  });

  return result;
}
function dealingCards() {
  let table = document.getElementById("table");
  let shuffleCards = shufflingCards();
  table.innerHTML = "";

  shuffleCards.forEach((element) => {
    let card = document.createElement("div");
    card.innerHTML =
      "<div class='card-container' data-valor= " +
      element +
      ">" +
      "<div class='card-content'>" +
      element +
      "</div>" +
      "</div>";

    table.appendChild(card);
  });
}
