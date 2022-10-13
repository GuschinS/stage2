const inputRange = document.querySelector(".range-donate");
const tickmarks = document.querySelector(".tickmarks");
const inputNumber = document.querySelector(".number");
const wh1400 = window.matchMedia("(max-width: 1400px)");
const wh950 = window.matchMedia("(max-width: 950px)");
const yellowElement = document.querySelector(
  ".tickmarks .option:nth-child(6) "
);
const options = document.querySelectorAll(".tickmarks .option");
const screenWidth = window.screen.width;
const style = document.querySelector('[data="test"]');

// ограничивает количество введеных символов в намбер инпут
if (inputNumber) {
  inputNumber.oninput = function () {
    this.value = this.value.substr(0, 4);
  };
}

window.onload = function () {
  addRangeClickHandler();
  addTickmarksClickHandler();
  addInputNumberValueHandler();
  defaultInputRangeMax();
};

// сбрасывает все выбранные
const removeYellowClass = () => {
  options.forEach((option) => {
    option.classList.remove("yellow");
    option.classList.add("black");
  });
};
// меняет максимум инпут рейндж в зависимости от разрешения экрана
const defaultInputRangeMax = () => {
  if (inputRange) {
    if (screenWidth <= 950) {
      inputRange.max = 5;
      inputRange.value = 3;
    } else if (screenWidth <= 1400) {
      inputRange.max = 7;
      inputRange.value = 5;
    }
  }
};

// функция отслеживает клик по рейндж инпуту
function addRangeClickHandler() {
  if (inputRange) {
    inputRange.addEventListener("click", (e) => {
      let clickedRangeValue = e.target.value;
      if (screenWidth <= 950) {
        clickedRangeValue = +clickedRangeValue + 3;
        style.innerHTML =
          ".range-donate::-webkit-slider-thumb {display: block}";
      } else if (screenWidth <= 1400) {
        clickedRangeValue = +clickedRangeValue + 1;
        style.innerHTML =
          ".range-donate::-webkit-slider-thumb {display: block}";
      }
      removeYellowClass();
      addValueFromRange(clickedRangeValue);
      changeInputNumberFromRange(clickedRangeValue);
      style.innerHTML = ".range-donate::-webkit-slider-thumb {display: block}";
    });
  }
}
// функция отслеживает клик по полоске с цифрами
const addTickmarksClickHandler = () => {
  if (tickmarks) {
    tickmarks.addEventListener("click", (e) => {
      let clickedOption = e.target;
      let label = e.target.label;
      let clickedValue = e.target.value;
      if (screenWidth <= 950) {
        clickedValue = +clickedValue - 3;
        style.innerHTML =
          ".range-donate::-webkit-slider-thumb {display: block}";
      } else if (screenWidth <= 1400) {
        clickedValue = +clickedValue - 1;
        style.innerHTML =
          ".range-donate::-webkit-slider-thumb {display: block}";
      }
      removeYellowClass();
      selectClickedOption(clickedOption);
      selectClickedValue(clickedValue);
      changeInputNumber(label);
      style.innerHTML = ".range-donate::-webkit-slider-thumb {display: block}";
    });
  }
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
const addInputNumberValueHandler = () => {
  if (inputNumber) {
    inputNumber.addEventListener("input", (e) => {
      let inputNumberValue = e.target.value;
      findElementByInput(inputNumberValue);
    });
  }
};
// изменяет выбранное число и позицию на рейндж инпуте в зависимости от введенного числа
const findElementByInput = (inputNumberValue) => {
  if (
    +inputNumberValue != 5000 ||
    +inputNumberValue != 2000 ||
    +inputNumberValue != 1000 ||
    +inputNumberValue != 500 ||
    +inputNumberValue != 250 ||
    +inputNumberValue != 100 ||
    +inputNumberValue != 50 ||
    +inputNumberValue != 25
  ) {
    removeYellowClass();
    style.innerHTML = ".range-donate::-webkit-slider-thumb { display: none }";
  }

  options.forEach((option) => {
    if (option.label === inputNumberValue) {
      removeYellowClass();
      style.innerHTML = ".range-donate::-webkit-slider-thumb {display: block}";
      if (screenWidth <= 950) {
        inputRange.value = +option.value - 3;
        selectClickedOption(option);
        if (
          inputNumberValue == 5000 ||
          inputNumberValue == 2000 ||
          inputNumberValue == 1000
        ) {
          style.innerHTML =
            ".range-donate::-webkit-slider-thumb { display: none }";
        }
      } else if (screenWidth <= 1400) {
        inputRange.value = +option.value - 1;
        selectClickedOption(option);
        if (inputNumberValue == 5000) {
          style.innerHTML =
            ".range-donate::-webkit-slider-thumb { display: none }";
        }
      } else {
        inputRange.value = option.value;
        selectClickedOption(option);
      }
    }
  });
};

// отслеживают разрешение экрана и меняют максимум и валью рейндж инпут
const maxWidth1400 = (e) => {
  if (inputRange) {
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
  }
};

const maxWidth950 = (e) => {
  if (inputRange) {
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
  }
};

wh1400.addEventListener("change", maxWidth1400);
wh950.addEventListener("change", maxWidth950);
