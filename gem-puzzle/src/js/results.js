import { moves, timerDiv } from "./game";
const resultsBackground = document.querySelector(".results-background");
const resultsCloseButton = document.querySelector(".results-close-button");
const tbody = document.querySelector("tbody");
const inputName = document.querySelector("input");
const buttonAddResult = document.querySelector(".button-add-result");

buttonAddResult.addEventListener("click", () => {
  let trs = document.querySelectorAll("tr");
  let count = 0;
  for (let i = 0; i < trs.length; i++) {
    count++;
  }
  if (count < 5) {
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    tdName.classList = "full-name";
    tdName.textContent = inputName.value;
    localStorage.setItem("inputName", inputName.value);
    const tdTime = document.createElement("td");
    tdTime.classList = "time";
    tdTime.textContent = timerDiv.textContent;
    localStorage.setItem("time", timerDiv.textContent);
    const tdMoves = document.createElement("td");
    tdMoves.classList = "moves";
    tdMoves.textContent = moves;
    localStorage.setItem("moves", moves);
    tr.append(tdName);
    tr.append(tdTime);
    tr.append(tdMoves);
    tbody.appendChild(tr);
  }
});

const closePopup = () => {
  //   resultsBackground.style.display = "none";
  document.location.reload();
};
if (resultsCloseButton) {
  resultsCloseButton.addEventListener("click", closePopup);
  resultsBackground.addEventListener("click", (e) => {
    if (e.target === resultsBackground) {
      closePopup();
    }
  });
}
