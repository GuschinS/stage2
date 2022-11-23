import { reset, next } from "./game";

const nextLevel = document.querySelector(".btn");
let level = 0;

const changeLevel = () => {
  if (nextLevel.classList.value === "btn next-level") {
    const popupBackground = document.querySelector(".score-background");

    if (level == 5) {
      popupBackground.style.display = "block";
    }
    level += 1;
    reset();
  }
  next();
};
if (nextLevel) {
  nextLevel.addEventListener("click", changeLevel);
}

export { level };
