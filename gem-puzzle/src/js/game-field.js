import { h1, buttonStart, controlContainer } from "./control";
import click from "../assets/sound/click.mp3";
import error from "../assets/sound/error.mp3";

const body = document.querySelector("body");
const main = document.createElement("main");
const container = document.createElement("div");
const volume = controlContainer.querySelector(".volume");
const values = new Array(16).fill(0).map((item, index) => {
  index;
});
let score = 0;

//Create

createGameField();

//Position

const items = Array.from(container.querySelectorAll(".item"));
let matrix = getMatrix(items.map((item) => item.dataset.matrixId));

setPositionItems(matrix);

//Start & Shuffle

buttonStart.addEventListener("click", () => {
  const shuffledArray = shuffleArray(matrix.flat());
  matrix = getMatrix(shuffledArray);
  setPositionItems(matrix);
  const scoreDiv = document.querySelector(".score");
  score = 0;
  scoreDiv.textContent = `Score: ${score}`;
  container.classList.add("play");
});

const blankNumber = 16;
container.addEventListener("click", (event) => {
  const buttonNode = event.target.closest("button");
  const buttonNumber = Number(buttonNode.dataset.matrixId);
  const buttonCoords = findCoordinatesByNumber(buttonNumber, matrix);
  const blankCoords = findCoordinatesByNumber(blankNumber, matrix);
  const isValid = isValidForSwap(buttonCoords, blankCoords);
  const scoreDiv = document.querySelector(".score");

  if (isValid) {
    swap(blankCoords, buttonCoords, matrix);
    setPositionItems(matrix);
    score += 1;
    scoreDiv.textContent = `Score: ${score}`;
    const clickItem = new Audio(click);
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
  main.append(buttonStart);
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
