import { reset } from "./game";

const nextLevel = document.querySelector(".btn");
const levels = document.querySelectorAll(".levels .page-item");

let level = 0;

const changeLevel = () => {
  if (nextLevel.classList.value === "btn next-level") {
    levels[level].classList.remove("active");
    level += 1;
    levels[level].classList.add("active");
    reset();
  }
};

nextLevel.addEventListener("click", changeLevel);

export { level };
