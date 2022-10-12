const cards = document.querySelectorAll(".testimonials-card");
const cardsContainer = document.querySelector(".testimonials-cards");
const cardsContainerSlider = document.querySelector(
  ".testimonials-cards-container"
);
const lineScroll = document.querySelector(".line-scroll");
const screenWidth = window.screen.width;

// прослушиватель линейного скрола
function addLineScrollHandler() {
  if (lineScroll) {
    lineScroll.addEventListener("change", (e) => {
      if (screenWidth > 1400) {
        if (e.target.value == 1) {
          cardsContainerSlider.style.transitionDuration = "300ms";
          cardsContainerSlider.style.transform = "translate3d(0px, 0px, 0px)";
        }
        if (e.target.value == 2) {
          cardsContainerSlider.style.transitionDuration = "300ms";
          cardsContainerSlider.style.transform =
            "translate3d(-280px, 0px, 0px)";
        }
        if (e.target.value == 3) {
          cardsContainerSlider.style.transitionDuration = "300ms";
          cardsContainerSlider.style.transform =
            "translate3d(-580px, 0px, 0px)";
        }
        if (e.target.value == 4) {
          cardsContainerSlider.style.transitionDuration = "300ms";
          cardsContainerSlider.style.transform =
            "translate3d(-880px, 0px, 0px)";
        }
        if (e.target.value == 5) {
          cardsContainerSlider.style.transitionDuration = "300ms";
          cardsContainerSlider.style.transform =
            "translate3d(-1170px, 0px, 0px)";
        }
        if (e.target.value == 6) {
          cardsContainerSlider.style.transitionDuration = "300ms";
          cardsContainerSlider.style.transform =
            "translate3d(-1470px, 0px, 0px)";
        }
        if (e.target.value == 7) {
          cardsContainerSlider.style.transitionDuration = "300ms";
          cardsContainerSlider.style.transform =
            "translate3d(-1760px, 0px, 0px)";
        }
        if (e.target.value == 8) {
          cardsContainerSlider.style.transitionDuration = "300ms";
          cardsContainerSlider.style.transform =
            "translate3d(-2055px, 0px, 0px)";
        }
      } else {
        if (e.target.value == 1) {
          cardsContainerSlider.style.transitionDuration = "300ms";
          cardsContainerSlider.style.transform = "translate3d(0px, 0px, 0px)";
        }
        if (e.target.value == 2) {
          cardsContainerSlider.style.transitionDuration = "300ms";
          cardsContainerSlider.style.transform =
            "translate3d(-320px, 0px, 0px)";
        }
        if (e.target.value == 3) {
          cardsContainerSlider.style.transitionDuration = "300ms";
          cardsContainerSlider.style.transform =
            "translate3d(-640px, 0px, 0px)";
        }
        if (e.target.value == 4) {
          cardsContainerSlider.style.transitionDuration = "300ms";
          cardsContainerSlider.style.transform =
            "translate3d(-960px, 0px, 0px)";
        }
        if (e.target.value == 5) {
          cardsContainerSlider.style.transitionDuration = "300ms";
          cardsContainerSlider.style.transform =
            "translate3d(-1280px, 0px, 0px)";
        }
        if (e.target.value == 6) {
          cardsContainerSlider.style.transitionDuration = "300ms";
          cardsContainerSlider.style.transform =
            "translate3d(-1600px, 0px, 0px)";
        }
        if (e.target.value == 7) {
          cardsContainerSlider.style.transitionDuration = "300ms";
          cardsContainerSlider.style.transform =
            "translate3d(-1920px, 0px, 0px)";
        }
        if (e.target.value == 8) {
          cardsContainerSlider.style.transitionDuration = "300ms";
          cardsContainerSlider.style.transform =
            "translate3d(-2240px, 0px, 0px)";
        }
      }
    });
  }
}

addLineScrollHandler();
