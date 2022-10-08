const items = document.querySelectorAll(".cards");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
let currentItem = 0;
let isEnable = true;

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
  isEnable = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener("animationend", function () {
    this.classList.remove("active", direction);
  });
}

function showItem(direction) {
  isEnable = false;
  items[currentItem].classList.add("next", direction);
  items[currentItem].addEventListener("animationend", function () {
    this.classList.remove("next", direction);
    this.classList.add("active");
    isEnable = true;
  });
}

function previousItem(n) {
  hideItem("to-right");
  changeCurrentItem(n - 1);
  showItem("from-left");
}

function nextItem(n) {
  hideItem("to-left");
  changeCurrentItem(n + 1);
  showItem("from-right");
}
if (leftButton) {
  leftButton.addEventListener("click", function () {
    if (isEnable) {
      previousItem(currentItem);
    }
  });
}
if (rightButton) {
  rightButton.addEventListener("click", function () {
    if (isEnable) {
      nextItem(currentItem);
    }
  });
}
