import {
  h1,
  buttonStart,
  buttonStop,
  controlContainer,
  buttonContainer,
} from "./control";
import { checkMatrix, check } from "./algorithm-check";

import click from "../assets/sound/click.mp3";
import error from "../assets/sound/error.mp3";

const body = document.querySelector("body");
const main = document.createElement("main");
const container = document.createElement("div");
const timerDiv = controlContainer.querySelector(".timer-display");
const volume = controlContainer.querySelector(".volume");
const values = new Array(16).fill(0).map((item, index) => {
  index;
});
let score = 0;
let int = null;

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

function displayTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  timerDiv.textContent = ` ${h} : ${m} : ${s}`;
}

//Create

createGameField();

//Position

const items = Array.from(container.querySelectorAll(".item"));
let matrix = getMatrix(items.map((item) => item.dataset.matrixId));

setPositionItems(matrix);

//Start & Reset & Stop

const handlerStartStopReset = () => {
  if (buttonStart.classList.value === "button-start start") {
    buttonStart.classList.remove("start");
    buttonStart.classList.add("reset");
    buttonStart.textContent = "reset";
    buttonContainer.classList.remove("stop");
    container.classList.add("play");
    buttonStop.classList.remove("display-none");
  } else if (buttonStart.classList.value === "button-start") {
    buttonStart.classList.add("reset");
    buttonStart.textContent = "reset";
    buttonContainer.classList.remove("stop");
    container.classList.add("play");
    buttonStop.classList.remove("display-none");
  }
};

//Stop

buttonStop.addEventListener("click", () => {
  buttonStart.classList.remove("reset");
  buttonStart.textContent = "start";
  buttonStop.classList.add("display-none");
  buttonContainer.classList.add("stop");
  container.classList.remove("play");
  clearInterval(int);
});

//Start & Shuffle

buttonStart.addEventListener("click", () => {
  if (buttonStart.classList.value === "button-start") {
    if (int !== null) {
      clearInterval(int);
      handlerStartStopReset();
    }
    int = setInterval(displayTimer, 10);
  } else if (
    buttonStart.classList.value === "button-start reset" ||
    buttonStart.classList.value === "button-start start"
  ) {
    handlerStartStopReset();
    const shuffledArray = shuffleArray(matrix.flat());
    matrix = getMatrix(shuffledArray);
    checkMatrix(matrix);
    while (check % 2 != 0) {
      const shuffledArray = shuffleArray(matrix.flat());
      matrix = getMatrix(shuffledArray);
      checkMatrix(matrix);
    }
    setPositionItems(matrix);
    if (int !== null) {
      clearInterval(int);
      [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    }
    int = setInterval(displayTimer, 10);
    const scoreDiv = document.querySelector(".score");
    score = 0;
    scoreDiv.textContent = `Score: ${score}`;
    container.classList.add("play");
  }
});

const blankNumber = 16;
container.addEventListener("click", (event) => {
  const buttonNode = event.target.closest("button");
  const buttonNumber = Number(buttonNode.dataset.matrixId);
  const buttonCoords = findCoordinatesByNumber(buttonNumber, matrix);
  const blankCoords = findCoordinatesByNumber(blankNumber, matrix);
  const isValid = isValidForSwap(buttonCoords, blankCoords);
  const scoreDiv = document.querySelector(".score");
  const endArray = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
  ];
  if (isValid) {
    swap(blankCoords, buttonCoords, matrix);
    setPositionItems(matrix);
    score += 1;
    scoreDiv.textContent = `Score: ${score}`;
    const clickItem = new Audio(click);

    if (JSON.stringify(endArray) == JSON.stringify(matrix.flat())) {
      console.log("HURRRAAA!!!! Jesteś zwyczącą!!!");
    }
    if (volume.classList.value != "volume mute") {
      clickItem.play();
    }
  } else {
    if (volume.classList.value != "volume mute") {
      const clickItem = new Audio(error);
      clickItem.play();
    }
  }
});

//Mute

volume.addEventListener("click", () => {
  volume.classList.toggle("mute");
  volume.classList.toggle("no-mute");
});

//Functions

function createGameField() {
  main.append(h1);
  main.append(controlContainer);
  container.classList = "container";
  for (let value in values) {
    const button = document.createElement("button");
    button.classList = "item";
    button.dataset.matrixId = Number(value) + 1;
    button.innerHTML = Number(value) + 1;
    container.append(button);
  }
  main.append(container);
  main.append(buttonContainer);
  buttonContainer.append(buttonStart);
  buttonContainer.append(buttonStop);

  body.append(main);
}

function getMatrix(arr) {
  const matrix = [[], [], [], []];
  let x = 0;
  let y = 0;
  for (let i = 0; i < arr.length; i++) {
    if (x >= 4) {
      y++;
      x = 0;
    }
    matrix[y][x] = arr[i];
    x++;
  }
  return matrix;
}

function setPositionItems(matrix) {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      const value = matrix[y][x];
      const node = items[value - 1];
      setNodeStyles(node, x, y);
    }
  }
}

function setNodeStyles(node, x, y) {
  const shiftPs = 100;
  node.style.transform = `translate3D(${x * shiftPs}%, ${y * shiftPs}%, 0)`;
}

function shuffleArray(arr) {
  return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function findCoordinatesByNumber(number, matrix) {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == number) {
        return { x, y };
      }
    }
  }
  return null;
}

function isValidForSwap(coords1, coords2) {
  const diffX = Math.abs(coords1.x - coords2.x);
  const diffY = Math.abs(coords1.y - coords2.y);
  return (
    (diffX === 1 || diffY === 1) &&
    (coords1.x === coords2.x || coords1.y === coords2.y)
  );
}

function swap(coords1, coords2, matrix) {
  const coords1Number = matrix[coords1.y][coords1.x];
  matrix[coords1.y][coords1.x] = matrix[coords2.y][coords2.x];
  matrix[coords2.y][coords2.x] = coords1Number;
}
