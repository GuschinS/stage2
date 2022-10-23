// import { timerDiv } from "./game-field";

const controlContainer = document.createElement("div");
const h1 = document.createElement("h1");
const buttonContainer = document.createElement("div");
const buttonStart = document.createElement("button");
const buttonStop = document.createElement("button");
const scoreDivCreate = document.createElement("div");
const volume = document.createElement("div");
const timerDiv = document.createElement("div");
timerDiv.className = "timer-display";
timerDiv.textContent = "00 : 00 : 00";

createPanelControl();

function createPanelControl() {
  h1.innerHTML = "Gem Puzzle";
  scoreDivCreate.classList = "score";
  scoreDivCreate.innerHTML = `Score: 0`;
  volume.classList = "volume";
  volume.classList.add("mute");
  buttonContainer.classList = "button-container stop";

  buttonStart.classList = "button-start start";
  buttonStart.innerHTML = "start";
  buttonStop.classList = "button-stop display-none";
  buttonStop.innerHTML = "pause";
  controlContainer.classList = "control-container";
  controlContainer.append(scoreDivCreate);
  controlContainer.append(volume);
  controlContainer.append(timerDiv);
}

export { h1, buttonStart, buttonStop, controlContainer, buttonContainer };
