import birdsDataRu from "./birds";
import birdsDataEn from "./birds-en";
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
const audioPlayer = document.querySelector(".audio-player");
const popupBackground = document.querySelector(".score-background");
const spanLevel = document.querySelector(".level");
const levelEn = [
  "Training",
  "Old World sparrow",
  "Forest birds",
  "Songbirds",
  "Bird of prey",
  "Seabird",
];
const levelRu = [
  "Разминка",
  "Воробьиные",
  "Лесные птицы",
  "Певчие птицы",
  "Хищные птицы",
  "Морские птицы",
];
let arrayLevels;

const audio = new Audio();
let count = 5;
let score = 0;
let birdsData;
const audioCorrect = new Audio();
const audioError = new Audio();

const changeLanguage = () => {
  if (
    !localStorage.getItem("selectedLanguage") ||
    localStorage.getItem("selectedLanguage") === "en"
  ) {
    birdsData = birdsDataEn;
    arrayLevels = levelEn;
    if (instruction) {
      instruction.textContent =
        "Listen to the player. Select a bird from the list.";
    }
  } else if (localStorage.getItem("selectedLanguage") === "ua") {
    birdsData = birdsDataRu;
    arrayLevels = levelRu;
    if (instruction) {
      instruction.textContent = "Послушайте плеер. Выберите птицу из списка";
    }
  }
};

changeLanguage();

const correct = (clickedButton) => {
  clickedButton.classList.add("correct");
  audioPlayer.classList.add("pointer-events-none");
  birdImage.src = birdsData[level][index].image;
  resetProgressBar();
  birdName.textContent = birdsData[level][index].name;
  btn.classList.add("next-level");
  changeScore();
  audioCorrect.src =
    "https://birds-quiz.netlify.app/static/media/win.a1e9e8b6.mp3";
  audioCorrect.play();
  if (level == 5) {
    popupBackground.style.display = "block";
  }
};

const changeScore = () => {
  const scoreText = document.querySelectorAll(".score__text");
  score += count;
  scoreText.forEach((el) => {
    el.textContent = `Score: ${score}`;
  });
  localStorage.setItem("score", score);
};

if (itemList) {
  itemList.addEventListener("click", (event) => {
    let clickedButton = event.target;
    addedDescription(clickedButton);
    if (birdsData[level][index].name === clickedButton.textContent) {
      correct(clickedButton);
    } else {
      if (clickedButton.classList[0] === "list-group-item") {
        clickedButton.classList.add("error");
        count--;
        audioError.src =
          "https://birds-quiz.netlify.app/static/media/error.165166d5.mp3";
        audioError.play();
      }
    }
  });
}

const addedDescription = (clickedButton) => {
  cardBody.style.display = "flex";
  birdDescription.style.display = "block";
  instruction.style.display = "none";
  cardBodyBirdImage.src = birdsData[level][clickedButton.id].image;
  h4.textContent = birdsData[level][clickedButton.id].name;
  species.textContent = birdsData[level][clickedButton.id].species;
  birdDescription.textContent = birdsData[level][clickedButton.id].description;
  audio.src = birdsData[level][clickedButton.id].audio;
};

const reset = () => {
  groupItem.forEach((el) => {
    el.classList.remove("correct");
    el.classList.remove("error");
  });
  birdName.textContent = "******";
  birdImage.src = bird;
  cardBody.style.display = "none";
  instruction.style.display = "block";
  birdDescription.style.display = "none";
  btn.classList.remove("next-level");
  audioPlayer.classList.remove("pointer-events-none");
  count = 5;
};

const next = () => {
  if (spanLevel) {
    spanLevel.textContent = arrayLevels[level];
  }
  let index = 0;
  groupItem.forEach((el) => {
    el.innerHTML = `<span class="li-btn"></span>${birdsData[level][index].name}`;
    index++;
  });
};

next();

export { reset, next, audio };
