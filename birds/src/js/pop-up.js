const popupBackground = document.querySelector(".score-background");
const popupCloseButton = document.querySelector(".pop-up-close-button");

const closePopup = () => {
  popupBackground.style.display = "none";
};
if (popupCloseButton) {
  popupCloseButton.addEventListener("click", closePopup);
  popupBackground.addEventListener("click", (e) => {
    if (e.target === popupBackground) {
      closePopup();
    }
  });
}
