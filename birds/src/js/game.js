import birdsData from "./birds";
import bird from "../assets/images/bird.jpg";

import { index, resetProgressBar } from "./audio";
import { level } from "./next-level";

const birdImage = document.querySelector(".bird-image");
const itemList = document.querySelector(".item-list");
const groupItem = document.querySelectorAll(".item-list .list-group-item");
const birdName = document.querySelector(".bird-name");
const cardBody = document.querySelector(".card-body");
const instruction = document.querySelector(".instruction");
const btn = document.querySelector(".btn");
const cardBodyBirdImage = document.querySelector(".card-body .bird-image");
const h4 = document.querySelector("h4");
const species = document.querySelector(".species");
const birdDescription = document.querySelector(".bird-description");
const playerPointerEventsNone = document.querySelector(".list-group-flush");
let count = 5;
let score = 0;
const audioCorrect = new Audio();
const audioError = new Audio();

itemList.classList.add("pointer-events-none");

const correct = (clickedButton) => {
  clickedButton.classList.add("correct");
  itemList.classList.add("pointer-events-none");
  playerPointerEventsNone.classList.add("pointer-events-none");
  birdImage.src = birdsData[level][index].image;
  resetProgressBar();
  birdName.textContent = birdsData[level][index].name;
  btn.classList.add("next-level");
  changeScore();
  audioCorrect.src =
    "https://birds-quiz.netlify.app/static/media/win.a1e9e8b6.mp3";
  audioCorrect.play();
};

const changeScore = () => {
  const scoreText = document.querySelector(".score__text");
  score += count;
  scoreText.textContent = `Score: ${score}`;
};

itemList.addEventListener("click", (event) => {
  let clickedButton = event.target;
  addedDescription(clickedButton);
  console.log("birdsData[level][index].name: ", birdsData[level][index].name);
  if (birdsData[level][index].name === clickedButton.textContent) {
    correct(clickedButton);
  } else {
    if (clickedButton.classList[0] === "list-group-item") {
      clickedButton.classList.add("error");
      clickedButton.classList.add("pointer-events-none");
      count--;
      audioError.src =
        "https://birds-quiz.netlify.app/static/media/error.165166d5.mp3";
      audioError.play();
    }
  }
});

const addedDescription = (clickedButton) => {
  cardBody.style.display = "flex";
  birdDescription.style.display = "block";
  instruction.style.display = "none";
  cardBodyBirdImage.src = birdsData[level][clickedButton.id].image;
  h4.textContent = birdsData[level][clickedButton.id].name;
  species.textContent = birdsData[level][clickedButton.id].species;
  birdDescription.textContent = birdsData[level][clickedButton.id].description;
};

const reset = () => {
  groupItem.forEach((el) => {
    el.classList.remove("correct");
    el.classList.remove("error");
    el.classList.remove("pointer-events-none");
  });
  birdName.textContent = "******";
  birdImage.src = bird;
  cardBody.style.display = "none";
  instruction.style.display = "block";
  birdDescription.style.display = "none";
  btn.classList.remove("next-level");
  playerPointerEventsNone.classList.remove("pointer-events-none");
  count = 5;
};

const next = () => {
  let index = 0;
  groupItem.forEach((el) => {
    el.innerHTML = `<span class="li-btn"></span>${birdsData[level][index].name}`;
    index++;
  });
};

next();

export { reset, next };
