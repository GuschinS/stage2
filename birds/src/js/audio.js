import birdsData from "./birds";
import { level } from "./next-level";

const play = document.querySelector(".playback-button");
const progressBar = document.querySelector(".time-bar__input");
const durationTime = document.querySelector(".duration");
const current = document.querySelector(".current-time");
const itemList = document.querySelector(".item-list");

let isPlay = false;
let index = 0;
const audio = new Audio();

function getRandomInt() {
  index = Math.floor(Math.random() * 5);
  return index;
}

const playAudio = () => {
  if (audio.currentTime == 0) {
    getRandomInt();
    audio.src = birdsData[level][index].audio;
    console.log(birdsData[level][index].name);
    audio.play();
    // itemList.classList.remove("pointer-events-none");
  } else {
    audio.play();
  }
};

const pauseAudio = () => {
  audio.pause();
};

const toggleBtn = () => {
  if (isPlay == false) {
    playAudio();
    isPlay = true;
  } else {
    pauseAudio();
    isPlay = false;
  }
  play.classList.toggle("pause");
};

const resetProgressBar = () => {
  audio.currentTime = 0;
  toggleBtn();
};

function updateProgressValue() {
  audio.addEventListener("ended", resetProgressBar);
  progressBar.max = Math.floor(audio.duration);
  progressBar.value = audio.currentTime;
  current.textContent = formatTime(Math.floor(audio.currentTime));
  progressBar.style.background =
    "linear-gradient(to right, #007c5d 0%, #007c5d " +
    (progressBar.value * 100) / progressBar.max +
    "%, grey " +
    (progressBar.value * 100) / progressBar.max +
    "%, grey 100%)";
  if (isNaN(audio.duration)) {
    durationTime.textContent = "00:00";
  } else {
    durationTime.textContent = formatTime(Math.floor(audio.duration));
  }
}

function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds - min * 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min}:${sec}`;
}

function changeProgressBar() {
  audio.currentTime = progressBar.value;
}

progressBar.addEventListener("input", changeProgressBar);
play.addEventListener("click", toggleBtn);
play.addEventListener("click", () => {
  setInterval(updateProgressValue, 500);
});

export { index, resetProgressBar };
