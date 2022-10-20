const controlContainer = document.createElement("div");
const h1 = document.createElement("h1");
const buttonStart = document.createElement("button");
const scoreDivCreate = document.createElement("div");
const volume = document.createElement("div");

createPanelControl();

function createPanelControl() {
  h1.innerHTML = "Gem Puzzle";
  scoreDivCreate.classList = "score";
  scoreDivCreate.innerHTML = `Score: 0`;
  volume.classList = "volume";
  volume.classList.add("mute");
  buttonStart.classList = "button-start";
  buttonStart.innerHTML = "start";
  controlContainer.classList = "control-container";
  controlContainer.append(scoreDivCreate);
  controlContainer.append(volume);
}

export { h1, buttonStart, controlContainer };
