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

const randomCards = cards.sort(() => Math.random() - 0.5);
initializeGame()

function initializeGame() {
  createCards();

  const cards = document.querySelectorAll(".card");
  cards.forEach(card => card.addEventListener('click', () => {
    card.classList.toggle("card-flipped");
    checkMatch(card);
  }));
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

// func -> check if 2 card match
function checkMatch() {
  const flippedCards = document.querySelectorAll(".card-flipped");

  setTimeout(() => {
    if (flippedCards.length == 2) {
      console.log(flippedCards.length)
      const cardImgOne = flippedCards[0].children[0].src;
      const cardImgTwo = flippedCards[1].children[0].src;

      if (cardImgOne === cardImgTwo) {
        flippedCards[0].classList.add("card-match");
        flippedCards[1].classList.add("card-match");
       
        flippedCards[0].classList.remove("card-flipped");
        flippedCards[1].classList.remove("card-flipped");
       
        isWinner();
      }
    } else {
      flippedCards[0].classList.remove("card-flipped");
      flippedCards[1].classList.remove("card-flipped");
    }
  }, 5000);
};

// func -> check if win
function isWinner() {
 const matchedCards = document.querySelectorAll(".card-match");
 
  
  if (matchedCards.length == randomCards.length) {
    popup.classList.remove("hide-popup")
    popup.classList.add("show-popup")
  }
}


// func -> restart game
function restartGame() { };
