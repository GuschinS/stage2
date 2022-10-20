import { h1, buttonStart, controlContainer } from "./control";

const body = document.querySelector("body");
const main = document.createElement("main");
const container = document.createElement("div");
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
