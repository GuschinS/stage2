const body = document.querySelector("body");
const main = document.createElement("main");
const container = document.createElement("div");
const values = new Array(16).fill(0).map((item, index) => {
  index;
});

//Create

createGameField();

//Position

const items = Array.from(container.querySelectorAll(".item"));
let matrix = getMatrix(items.map((item) => item.dataset.matrixId));

setPositionItems(matrix);

//Functions

function createGameField() {
  container.classList = "container";
  for (let value in values) {
    const button = document.createElement("button");
    button.classList = "item";
    button.dataset.matrixId = Number(value) + 1;
    button.innerHTML = Number(value) + 1;
    container.append(button);
  }
  main.append(container);
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
