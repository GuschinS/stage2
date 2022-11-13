import birdsData from "./birds";
import bird from "../assets/images/bird.jpg";

import { index, resetProgressBar } from "./audio";
import { level } from "./next-level";

const birdImage = document.querySelector(".bird-image");
const itemList = document.querySelector(".item-list");
const groupItem = document.querySelectorAll(".list-group-item");
const birdName = document.querySelector(".bird-name");
const btn = document.querySelector(".btn");

const correct = (clickedButton) => {
  clickedButton.classList.add("correct");
  birdImage.src = birdsData[level][index].image;
  resetProgressBar();
  birdName.textContent = birdsData[level][index].name;
  btn.classList.add("next-level");
};

itemList.addEventListener("click", (event) => {
  let clickedButton = event.target;
  if (birdsData[level][index].name === clickedButton.textContent) {
    correct(clickedButton);
  } else {
    clickedButton.classList.add("error");
  }
});

const reset = () => {
  groupItem.forEach((el) => {
    el.classList.remove("correct");
    el.classList.remove("error");
  });
  birdName.textContent = "******";
  birdImage.src = bird;
  btn.classList.remove("next-level");
};

export { reset };
