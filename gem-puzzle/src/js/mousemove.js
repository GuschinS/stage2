let isDown = false;
const container = document.querySelector(".container");

container.addEventListener("mousedown", (event) => {
  const buttonNode = event.target.closest("button");
  isDown = true;
});
container.addEventListener("mousemove", (e) => {
  if (isDown) {
    let x = e.clientX;
    // console.log("x: ", x);
    let y = e.clientY;
    // console.log("y: ", y);
  }
});
container.addEventListener("mouseup", () => {
  isDown = false;
});
