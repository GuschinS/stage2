import { checkMatrix, check, endArray } from "./algorithm-check";
import click from "../assets/sound/click.mp3";
import error from "../assets/sound/error.mp3";

const container = document.querySelector(".container");
const timerDiv = document.querySelector(".timer-display");
const volume = document.querySelector(".volume");
const buttonContainer = document.querySelector(".button-container");
const buttonStart = buttonContainer.querySelector(".button-start");
const buttonStop = buttonContainer.querySelector(".button-stop");
const gameOverBackground = document.querySelector(".game-over-background");
const movesDiv = document.querySelector(".moves");
const h2 = document.querySelector("h2");
const containerButtonSizeSelection = document.querySelector(".size-selection");
const itemsButtonSizeSelection = document.querySelectorAll(
  ".size-selection button"
);

let matrixLength = 16;
let arrayLength = 4;
let blankNumber = matrixLength;
let itemNodes = [];
let matrix = [];
let moves = 0;
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

containerButtonSizeSelection.addEventListener("click", (event) => {
  const itemButtonSizeSelection = event.target.closest("button");

  itemsButtonSizeSelection.forEach((el) => {
    el.classList.remove("active");
  });
  itemButtonSizeSelection.classList.add("active");
  itemsButtonSizeSelection.forEach((el) => {
    if (el.classList.value === "button-three active") {
      matrixLength = 9;
      arrayLength = 3;
      blankNumber = matrixLength;

      deleteGameItem();
      createGameField();
      updateGrid();
      if (int !== null) {
        clearInterval(int);
        [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
      }
      int = setInterval(displayTimer, 10);
    }
    if (el.classList.value === "button-four active") {
      matrixLength = 16;
      arrayLength = 4;
      blankNumber = matrixLength;

      deleteGameItem();
      createGameField();
      updateGrid();
      if (int !== null) {
        clearInterval(int);
        [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
      }
      int = setInterval(displayTimer, 10);
    }
    if (el.classList.value === "button-fife active") {
      matrixLength = 25;
      arrayLength = 5;
      blankNumber = matrixLength;

      deleteGameItem();
      createGameField();
      updateGrid();
      if (int !== null) {
        clearInterval(int);
        [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
      }
      int = setInterval(displayTimer, 10);
    }
    if (el.classList.value === "button-six active") {
      matrixLength = 36;
      arrayLength = 6;
      blankNumber = matrixLength;

      deleteGameItem();
      createGameField();
      updateGrid();
      if (int !== null) {
        clearInterval(int);
        [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
      }
      int = setInterval(displayTimer, 10);
    }
    if (el.classList.value === "button-seven active") {
      matrixLength = 49;
      arrayLength = 7;
      blankNumber = matrixLength;

      deleteGameItem();
      createGameField();
      updateGrid();
      if (int !== null) {
        clearInterval(int);
        [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
      }
      int = setInterval(displayTimer, 10);
    }
    if (el.classList.value === "button-eight active") {
      matrixLength = 64;
      arrayLength = 8;
      blankNumber = matrixLength;

      deleteGameItem();
      createGameField();
      updateGrid();
      if (int !== null) {
        clearInterval(int);
        [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
      }
      int = setInterval(displayTimer, 10);
    }
  });
});

function deleteGameItem() {
  const lastGameItems = document.querySelectorAll(".item");
  for (let i = 0; i < lastGameItems.length; i++) {
    lastGameItems[i].remove();
  }
}
function updateGrid() {
  matrix = getMatrix(itemNodes.map((item) => Number(item.dataset.matrixId)));
  // console.log("matrix: ", matrix);
  setPositionItems(matrix);
}
updateGrid();

// let matrix = getMatrix(items.map((item) => item.dataset.matrixId));

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
    const movesDiv = document.querySelector(".moves");
    moves = 0;
    movesDiv.textContent = `Moves: ${moves}`;
    container.classList.add("play");
  }
});

// const blankNumber = matrixLength; // пустой элемент, для каждой длинны другой

container.addEventListener("click", (event) => {
  const buttonNode = event.target.closest("button");
  const buttonNumber = Number(buttonNode.dataset.matrixId);
  const buttonCoords = findCoordinatesByNumber(buttonNumber, matrix);
  const blankCoords = findCoordinatesByNumber(blankNumber, matrix);
  const isValid = isValidForSwap(buttonCoords, blankCoords);
  if (isValid) {
    swap(blankCoords, buttonCoords, matrix);
    setPositionItems(matrix);
    moves += 1;
    movesDiv.textContent = `Moves: ${moves}`;
    const clickItem = new Audio(click);
    if (JSON.stringify(endArray) == JSON.stringify(matrix.flat())) {
      gameOverBackground.classList.toggle("open");
      h2.textContent = `Hooray! You solved the puzzle in ${timerDiv.textContent} and ${moves} moves!`;
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
  itemNodes = [];
  const values = new Array(matrixLength).fill(0).map((item, index) => {
    index + 1;
  });
  for (let value in values) {
    const button = document.createElement("button");
    button.classList = "item";
    button.style.width = 100 / arrayLength + "%";
    button.style.height = 100 / arrayLength + "%";
    button.dataset.matrixId = Number(value) + 1;
    button.innerHTML = Number(value) + 1;
    itemNodes.push(button);
    container.appendChild(button);
  }
}

function getMatrix(arr) {
  const matrix = [];
  for (let i = 0; i < arrayLength; i++) {
    matrix.push([]);
  } //количество элементов в столбце
  let x = 0;
  let y = 0;
  for (let i = 0; i < arr.length; i++) {
    if (x >= arrayLength) {
      //колличество  элементов в строке
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
      const node = itemNodes[value - 1];

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

export { moves, timerDiv };
