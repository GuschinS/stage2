const cards = document.querySelectorAll(".testimonials-card");
const cardsContainer = document.querySelector(".testimonials-cards");
// const cardsContainer = document.querySelector(".testimonials-cards-container");
const lineScroll = document.querySelector(".line-scroll");
const cardOne = document.querySelector(".testimonials-card.one");
const cardTwo = document.querySelector(".testimonials-card.two");
const cardThree = document.querySelector(".testimonials-card.three");
const cardFour = document.querySelector(".testimonials-card.four");
const cardFife = document.querySelector(".testimonials-card.fife");
const cardSix = document.querySelector(".testimonials-card.six");
const cardSeven = document.querySelector(".testimonials-card.seven");
const cardEight = document.querySelector(".testimonials-card.eight");
const cardNine = document.querySelector(".testimonials-card.nine");
const cardTen = document.querySelector(".testimonials-card.ten");
const cardEleven = document.querySelector(".testimonials-card.eleven");
const wh1400 = window.matchMedia("(max-width: 1400px)");
const screenWidth = window.screen.width;

// let isEnable = true;

// прослушиватель клика по карте
function addCardsHandler() {
  if (cardsContainer) {
    cardsContainer.addEventListener("click", (e) => {
      if (e.target.classList.value === "testimonials-card one") {
        let clickedCard = e.target;
      }
    });
  }
}

function removeClassActive() {
  cards.forEach((el) => {
    el.classList.remove("active");
  });
}

// прослушиватель линейного скрола
function addLineScrollHandler() {
  if (lineScroll) {
    lineScroll.addEventListener("change", (e) => {
      if (screenWidth > 1400) {
        if (e.target.value == 1) {
          removeClassActive();
          cardOne.classList.add("active");
          cardTwo.classList.add("active");
          cardThree.classList.add("active");
          cardFour.classList.add("active");
        }
        if (e.target.value == 2) {
          removeClassActive();
          cardTwo.classList.add("active");
          cardThree.classList.add("active");
          cardFour.classList.add("active");
          cardFife.classList.add("active");
        }
        if (e.target.value == 3) {
          removeClassActive();
          cardThree.classList.add("active");
          cardFour.classList.add("active");
          cardFife.classList.add("active");
          cardSix.classList.add("active");
        }
        if (e.target.value == 4) {
          removeClassActive();
          cardFour.classList.add("active");
          cardFife.classList.add("active");
          cardSix.classList.add("active");
          cardSeven.classList.add("active");
        }
        if (e.target.value == 5) {
          removeClassActive();
          cardFife.classList.add("active");
          cardSix.classList.add("active");
          cardSeven.classList.add("active");
          cardEight.classList.add("active");
        }
        if (e.target.value == 6) {
          removeClassActive();
          cardSix.classList.add("active");
          cardSeven.classList.add("active");
          cardEight.classList.add("active");
          cardNine.classList.add("active");
        }
        if (e.target.value == 7) {
          removeClassActive();
          cardSeven.classList.add("active");
          cardEight.classList.add("active");
          cardNine.classList.add("active");
          cardTen.classList.add("active");
        }
        if (e.target.value == 8) {
          removeClassActive();
          cardEight.classList.add("active");
          cardNine.classList.add("active");
          cardTen.classList.add("active");
          cardEleven.classList.add("active");
        }
      } else {
        if (e.target.value == 1) {
          removeClassActive();
          cardOne.classList.add("active");
          cardTwo.classList.add("active");
          cardThree.classList.add("active");
        }
        if (e.target.value == 2) {
          removeClassActive();
          cardTwo.classList.add("active");
          cardThree.classList.add("active");
          cardFour.classList.add("active");
        }
        if (e.target.value == 3) {
          removeClassActive();
          cardThree.classList.add("active");
          cardFour.classList.add("active");
          cardFife.classList.add("active");
        }
        if (e.target.value == 4) {
          removeClassActive();
          cardFour.classList.add("active");
          cardFife.classList.add("active");
          cardSix.classList.add("active");
        }
        if (e.target.value == 5) {
          removeClassActive();
          cardFife.classList.add("active");
          cardSix.classList.add("active");
          cardSeven.classList.add("active");
        }
        if (e.target.value == 6) {
          removeClassActive();
          cardSix.classList.add("active");
          cardSeven.classList.add("active");
          cardEight.classList.add("active");
        }
        if (e.target.value == 7) {
          removeClassActive();
          cardSeven.classList.add("active");
          cardEight.classList.add("active");
          cardNine.classList.add("active");
        }
        if (e.target.value == 8) {
          removeClassActive();
          cardEight.classList.add("active");
          cardNine.classList.add("active");
          cardTen.classList.add("active");
        }
      }
    });
  }
}

function removedCardFour() {
  if (cardFour) {
    if (screenWidth <= 950) {
    } else if (screenWidth <= 1400) {
      cardFour.classList.remove("active");
    } else {
      cardFour.classList.add("active");
    }
  }
}

const maxWidth1400 = (e) => {
  if (cardFour) {
    if (e.matches) {
      cardFour.classList.remove("active");
    } else {
      cardFour.classList.add("active");
    }
  }
};

addCardsHandler();
addLineScrollHandler();
removedCardFour();
wh1400.addEventListener("change", maxWidth1400);
