const gameOverBackground = document.querySelector(".game-over-background");
const popUpCloseButton = document.querySelector(".pop-up-close-button");
const resultsBackground = document.querySelector(".results-background");
const save = document.querySelector(".save");

const closePopup = () => {
  // gameOverBackground.classList.toggle("open");
  document.location.reload();
};
if (popUpCloseButton) {
  popUpCloseButton.addEventListener("click", closePopup);
  gameOverBackground.addEventListener("click", (e) => {
    if (e.target === gameOverBackground) {
      closePopup();
    }
  });
}

save.addEventListener("click", () => {
  resultsBackground.style.display = "block";
  gameOverBackground.classList.toggle("open");
});
