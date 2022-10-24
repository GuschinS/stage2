const containerButtonSizeSelection = document.querySelector(".size-selection");
const itemsButtonSizeSelection = document.querySelectorAll(
  ".size-selection button"
);

containerButtonSizeSelection.addEventListener("click", (event) => {
  const itemButtonSizeSelection = event.target.closest("button");
  itemsButtonSizeSelection.forEach((el) => {
    el.classList.remove("active");
  });
  itemButtonSizeSelection.classList.add("active");
  //   switch (itemButtonSizeSelection.classList.value) {
  //     case "button-three active":
  //       matrixLength = 9;
  //       arrayLength = 3;
  //       items.forEach((item) => {
  //         item.style.width = "calc(100% / 3)";
  //         item.style.height = "calc(100% / 3)";
  //       });
  //       createGameField();
  //       const itemsArray = Array.from(document.querySelectorAll(".item"));
  //       let matrix = getMatrix(
  //         itemsArray.map((item) => item.dataset.matrixId)
  //       );
  //       setPositionItems(matrix);
  //       break;
  //     case "button-four active":
  //       items.forEach((el) => {
  //         el.style.width = "calc(100% / 4)";
  //         el.style.height = "calc(100% / 4)";
  //       });
  //       break;
  //     case "button-fife active":
  //       items.forEach((el) => {
  //         el.style.width = "calc(100% / 5)";
  //         el.style.height = "calc(100% / 5)";
  //       });
  //       break;
  //     case "button-six active":
  //       items.forEach((el) => {
  //         el.style.width = "calc(100% / 6)";
  //         el.style.height = "calc(100% / 6)";
  //       });
  //       break;
  //     case "button-seven active":
  //       items.forEach((el) => {
  //         el.style.width = "calc(100% / 7)";
  //         el.style.height = "calc(100% / 7)";
  //       });
  //       break;
  //     case "button-eight active":
  //       items.forEach((el) => {
  //         el.style.width = "calc(100% / 8)";
  //         el.style.height = "calc(100% / 8)";
  //       });
  //       break;
  //   }
});
