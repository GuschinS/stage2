const body = document.querySelector("body");
const main = document.createElement("main");
const container = document.createElement("div");
const controlContainer = document.createElement("div");
const h1 = document.createElement("h1");
const buttonContainer = document.createElement("div");
const buttonStart = document.createElement("button");
const buttonStop = document.createElement("button");
const movesDivCreate = document.createElement("div");
const volume = document.createElement("div");
const timerDiv = document.createElement("div");
const sizeSelection = document.createElement("div");
const buttonThree = document.createElement("button");
const buttonFour = document.createElement("button");
const buttonFife = document.createElement("button");
const buttonSix = document.createElement("button");
const buttonSeven = document.createElement("button");
const buttonEight = document.createElement("button");

const gameOverBackground = document.createElement("div");
const gameOverPopUp = document.createElement("div");
const popUpCloseButton = document.createElement("span");
const h2 = document.createElement("h2");
const save = document.createElement("button");

const resultsBackground = document.createElement("biv");
const results = document.createElement("div");
const resultsCloseButton = document.createElement("span");

createPanelControl();

function createPanelControl() {
  h1.innerHTML = "Gem Puzzle";
  movesDivCreate.classList = "moves";
  movesDivCreate.textContent = `Moves: 0`;
  volume.classList = "volume";
  volume.classList.add("mute");
  timerDiv.className = "timer-display";
  timerDiv.textContent = "00 : 00 : 00";
  buttonContainer.classList = "button-container stop";
  buttonStart.classList = "button-start start";
  buttonStart.innerHTML = "start";
  buttonStop.classList = "button-stop display-none";
  buttonStop.innerHTML = "pause";
  controlContainer.classList = "control-container";
  controlContainer.append(movesDivCreate);
  controlContainer.append(volume);
  controlContainer.append(timerDiv);
  buttonContainer.append(buttonStart);
  buttonContainer.append(buttonStop);
  container.classList = "container";
  sizeSelection.classList = "size-selection";
  buttonThree.classList = "button-three";
  buttonThree.textContent = `3 X 3`;
  buttonFour.classList = "button-four active";
  buttonFour.textContent = `4 X 4`;
  buttonFife.classList = "button-fife";
  buttonFife.textContent = `5 X 5`;
  buttonSix.classList = "button-six";
  buttonSix.textContent = `6 X 6`;
  buttonSeven.classList = "button-seven";
  buttonSeven.textContent = `7 X 7`;
  buttonEight.classList = "button-eight";
  buttonEight.textContent = `8 X 8`;
  popUpCloseButton.classList = "pop-up-close-button";
  save.classList = "save";
  save.textContent = "save";
  gameOverPopUp.classList = "game-over-pop-up";
  gameOverBackground.classList = "game-over-background";

  sizeSelection.append(buttonThree);
  sizeSelection.append(buttonFour);
  sizeSelection.append(buttonFife);
  sizeSelection.append(buttonSix);
  sizeSelection.append(buttonSeven);
  sizeSelection.append(buttonEight);
  main.append(h1);
  main.append(controlContainer);
  main.append(container);
  main.append(sizeSelection);
  main.append(buttonContainer);
  gameOverPopUp.append(popUpCloseButton);
  gameOverPopUp.append(h2);
  gameOverPopUp.append(save);
  gameOverBackground.append(gameOverPopUp);
  body.append(main);
  body.append(gameOverBackground);
  createTable();
}

function createTable() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const tr = document.createElement("tr");

  results.classList = "results";
  resultsBackground.classList = "results-background";
  resultsCloseButton.classList = "results-close-button";
  const thName = document.createElement("th");
  thName.classList = "full-name";
  thName.textContent = "Name";
  const thTime = document.createElement("th");
  thTime.classList = "time";
  thTime.textContent = "Time";
  const thMoves = document.createElement("th");
  thMoves.classList = "moves";
  thMoves.textContent = "Moves";
  thead.append(thName);
  thead.append(thTime);
  thead.append(thMoves);
  table.append(thead);
  if (localStorage.getItem("inputName")) {
    const tdName = document.createElement("td");
    tdName.textContent = localStorage.getItem("inputName");
    tr.append(tdName);
  }
  if (localStorage.getItem("time")) {
    const tdTime = document.createElement("td");
    tdTime.textContent = localStorage.getItem("time");
    tr.append(tdTime);
  }
  if (localStorage.getItem("moves")) {
    const tdMoves = document.createElement("td");
    tdMoves.textContent = localStorage.getItem("moves");
    tr.append(tdMoves);
  }
  tbody.append(tr);
  table.append(tbody);
  results.append(resultsCloseButton);
  results.append(table);
  createForm();
  resultsBackground.append(results);
  body.append(resultsBackground);
}

function createForm() {
  const formResults = document.createElement("div");
  const inputText = document.createElement("input");
  const buttonAddResult = document.createElement("button");
  formResults.classList = "form-result";
  inputText.getAttribute("type", "text");
  buttonAddResult.classList = "button-add-result";
  buttonAddResult.textContent = "ADD";
  formResults.append(inputText);
  formResults.append(buttonAddResult);
  results.append(formResults);
}
