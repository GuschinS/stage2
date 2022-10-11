const testimonialsBackground = document.querySelector(
  ".testimonials-background"
);
const testimonialsCard = document.querySelectorAll(".testimonials-card");
const testimonialPopup = document.querySelector(".testimonials-pop-up");
const popupCloseButton = document.querySelector(".pop-up-close-button");

const popupTestimonialsHandler = (card) => {
  testimonialsBackground.classList.toggle("open");
  const testimonialsCardCopy = card.cloneNode(true);
  testimonialPopup.innerHTML = "";
  testimonialsCardCopy.remove();
  popupCloseButton.remove();
  testimonialPopup.append(testimonialsCardCopy, popupCloseButton);
  testimonialsCardCopy.classList.toggle("open-card");
};

testimonialsCard.forEach((card) => {
  card.addEventListener("click", () => {
    popupTestimonialsHandler(card);
  });
});

popupCloseButton.addEventListener("click", popupTestimonialsHandler);
testimonialsBackground.addEventListener("click", (e) => {
  if (e.target === testimonialsBackground) {
    popupTestimonialsHandler();
  }
});
