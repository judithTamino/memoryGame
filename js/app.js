const gameContainer = document.querySelector(".game-container");
const popup = document.querySelector(".popup");
const cards = [
  "/images/apple.png",
  "/images/apple.png",
  "/images/bananas.png",
  "/images/bananas.png",
  "/images/carrot.png",
  "/images/carrot.png",
  "/images/chili.png",
  "/images/chili.png",
  "/images/mango.png",
  "/images/mango.png",
  "/images/pumpkin.png",
  "/images/pumpkin.png"
];
let firstCard = "", secondCard = "";
let lockBoard = false;

// shuffle Cards
const randomCards = cards.sort(() => Math.random() - 0.5);
createCards();

function initializeGame() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => card.addEventListener('click', flipCard));
}

// func -> create cards
function createCards() {
  for (let i = 0; i < randomCards.length; i++) {
    const card = document.createElement("div");
    card.className = "card";

    let img = document.createElement("img");
    img.src = randomCards[i];

    card.appendChild(img);
    gameContainer.appendChild(card);
  }
};

// func -> flip card
function flipCard() {
  let currentCard = this;

  if (!lockBoard) {
    if (currentCard === firstCard || currentCard.classList.contains("card-match"))
      return;

    // add card flipped class to the clicked card
    currentCard.classList.add("card-flipped");

    // checks if the var (firstCard) is empty
    if (firstCard === "") {
      firstCard = currentCard;
      return;
    }

    secondCard = currentCard;
    lockBoard = true;

    checkMatch();
  }
};

// func -> check if 2 card match
function checkMatch() {
  setTimeout(() => {
    const firstCardImg = firstCard.children[0].src;
    const secondCardImg = secondCard.children[0].src;

    if (firstCardImg === secondCardImg) {
      firstCard.classList.add("card-match");
      secondCard.classList.add("card-match");

      firstCard.classList.remove("card-flipped");
      secondCard.classList.remove("card-flipped");

      isWinner();

    } else {
      firstCard.classList.remove("card-flipped");
      secondCard.classList.remove("card-flipped");
    }

    lockBoard = false;
    firstCard = "";
  }, 1000);
};

// func -> check if win
function isWinner() {
  const matchedCards = document.querySelectorAll(".card-match");
  console.log(matchedCards.length);

  if (matchedCards.length == randomCards.length) {
    popup.classList.remove("hide-popup")
    popup.classList.add("show-popup")
  }

  lockBoard = true;
};

// func -> restart game
function restartGame() {
  location.reload();
};

// func -> close popup window
function closePopup() {
  popup.classList.remove("show-popup");
  popup.classList.add("hide-popup");
}

initializeGame();