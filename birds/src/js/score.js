const tableBody = document.querySelector("tbody");
const table = document.querySelector("table");

const createdTable = () => {
  const tr = document.createElement("tr");
  const tdNumber = document.createElement("td");
  tdNumber.textContent = "Твой результат";
  const tdScore = document.createElement("td");
  tdScore.textContent = localStorage.getItem("score");
  tr.append(tdNumber);
  tr.append(tdScore);
  tableBody.append(tr);
};
if (tableBody && localStorage.getItem("score")) {
  createdTable();
}
