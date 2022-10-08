const inputRange = document.querySelector(".range-donate");
const tickmarks = document.querySelector(".tickmarks");
const inputNumber = document.querySelector(".number");
const options = document.querySelectorAll(".option");
const wh1400 = window.matchMedia("(max-width: 1400px)");
const wh950 = window.matchMedia("(max-width: 950px)");
const yellowElement = document.querySelector(
  ".tickmarks .option:nth-child(6) "
);
// const yellow950 = document.querySelector(".tickmarks .option:nth-child(6)");
const screenWidth = window.screen.width;

window.onload = function () {
  addRangeClickHendler();
  addTickmarksClickHendler();
  addInputNumberValueHendler();
  defaultInputRangeMax();
};

// сбрасывает все выбранные
const removeYellowClass = () => {
  let options = document.querySelectorAll(".tickmarks .option");
  options.forEach((option) => {
    option.classList.remove("yellow");
    option.classList.add("black");
  });
};
// меняет максимум инпут рейндж в зависимости от разрешения экрана
const defaultInputRangeMax = () => {
  if (screenWidth <= 950) {
    inputRange.max = 5;
    inputRange.value = 3;
  } else if (screenWidth <= 1400) {
    inputRange.max = 7;
    inputRange.value = 5;
  }
};

// функция отслеживает клик по рейндж инпуту
const addRangeClickHendler = () => {
  inputRange.addEventListener("click", (e) => {
    let clickedRangeValue = e.target.value;
    if (screenWidth <= 950) {
      clickedRangeValue = +clickedRangeValue + 3;
    } else if (screenWidth <= 1400) {
      clickedRangeValue = +clickedRangeValue + 1;
    }
    removeYellowClass();
    addValueFromRange(clickedRangeValue);
    changeInputNumberFromRange(clickedRangeValue);
  });
};
// функция отслеживает клик по полоске с цифрами
const addTickmarksClickHendler = () => {
  tickmarks.addEventListener("click", (e) => {
    let clickedOption = e.target;
    let label = e.target.label;
    let clickedValue = e.target.value;
    if (screenWidth <= 950) {
      clickedValue = +clickedValue - 3;
    } else if (screenWidth <= 1400) {
      clickedValue = +clickedValue - 1;
    }
    removeYellowClass();
    selectClickedOption(clickedOption);
    selectClickedValue(clickedValue);
    changeInputNumber(label);
  });
};
// добавить класс желтый выбранному элементу
const selectClickedOption = (clickedOption) => {
  clickedOption.classList.add("yellow");
  clickedOption.classList.remove("black");
};
// выбор элемента из списка чисел
const selectClickedValue = (clickedValue) => {
  inputRange.value = clickedValue;
};
// выбор элемента на рейндж инпуте
const addValueFromRange = (clickedRangeValue) => {
  let yellowValue = document.querySelector(
    `.tickmarks .option:nth-child(${clickedRangeValue})`
  );
  yellowValue.classList.add("yellow");
};

// добавляет выбраное число в инпут из списка чисел
const changeInputNumber = (label) => {
  inputNumber.value = label;
};

// добавляет выбраное число на рейндж инпуте в инпут
const changeInputNumberFromRange = (clickedRangeValue) => {
  let option = document.querySelector(
    `.tickmarks .option:nth-child(${clickedRangeValue})`
  );
  inputNumber.value = option.label;
};
// отслеживает число введенное в инпут
const addInputNumberValueHendler = () => {
  inputNumber.addEventListener("input", (e) => {
    let inputNumberValue = e.target.value;
    findElementByInput(inputNumberValue);
  });
};
// изменяет выбранное число и позицию на рейндж инпуте в зависимости от введенного числа
const findElementByInput = (inputNumberValue) => {
  options.forEach((option) => {
    if (option.label === inputNumberValue) {
      removeYellowClass();
      selectClickedOption(option);
      inputRange.value = option.value;
    }
  });
};

// отслеживают разрешение экрана и меняют максимум и валью рейндж инпут
const maxWidth1400 = (e) => {
  removeYellowClass();
  if (e.matches) {
    inputRange.max = 7;
    inputRange.value = 5;
    yellowElement.classList.add("yellow");
  } else {
    inputRange.max = 8;
    inputRange.value = 6;
    yellowElement.classList.add("yellow");
  }
};

const maxWidth950 = (e) => {
  removeYellowClass();
  if (e.matches) {
    inputRange.max = 5;
    inputRange.value = 3;
    yellowElement.classList.add("yellow");
  } else {
    inputRange.max = 7;
    inputRange.value = 5;
    yellowElement.classList.add("yellow");
  }
};

wh1400.addEventListener("change", maxWidth1400);
wh950.addEventListener("change", maxWidth950);
