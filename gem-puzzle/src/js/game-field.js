const body = document.querySelector("body");
const createGameField = () => {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  //   const tr = document.createElement("tr");

  let columnCount = 4;
  let rowCount = 4;

  for (let index = 0; index < rowCount; index++) {
    const tr = document.createElement("tr");
    tbody.append(tr);
    console.log("tr: ", tr);
    for (let index = 0; index < columnCount; index++) {
      const td = document.createElement("td");
      tr.append(td);
      console.log("td: ", td);
    }
  }

  table.append(tbody);
  body.append(table);
};

createGameField();
