const inputRange = document.querySelector(".range-donate");
const tickmarks = document.querySelector(".tickmarks");
const inputNumber = document.querySelector(".number");
const options = document.querySelectorAll(".option");
const wh1400 = window.matchMedia("(max-width: 1400px)");
const wh950 = window.matchMedia("(max-width: 950px)");
const yellow1400 = document.querySelector(".tickmarks .option:nth-child(3) ");
const yellow950 = document.querySelector(".tickmarks .option:nth-child(6)");

// сбрасывает все выбранные
const removeYellowClass = () => {
  let options = document.querySelectorAll(".tickmarks .option");
  options.forEach((option) => {
    option.classList.remove("yellow");
    option.classList.add("black");
  });
};

const maxWidth1400 = (e) => {
  removeYellowClass();
  if (e.matches) {
    inputRange.max = 7;
    inputRange.value = 2;
    yellow1400.classList.add("yellow");
  } else {
    inputRange.max = 8;
    inputRange.value = 3;
    yellow1400.classList.add("yellow");
  }
};

const maxWidth950 = (e) => {
  removeYellowClass();
  if (e.matches) {
    inputRange.max = 5;
    inputRange.value = 3;
    yellow950.classList.add("yellow");
  } else {
    inputRange.max = 7;
    inputRange.value = 2;
    yellow1400.classList.add("yellow");
  }
};

wh1400.addEventListener("change", maxWidth1400);
wh950.addEventListener("change", maxWidth950);

window.onload = function () {
  addRangeClickHendler();
  addTickmarksClickHendler();
  addInputNumberValueHendler();
};

// функция отслеживает клик по рейндж инпуту
const addRangeClickHendler = () => {
  inputRange.addEventListener("click", (e) => {
    let clickedRangeValue = e.target.value;
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
changeInputNumberFromRange = (clickedRangeValue) => {
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
