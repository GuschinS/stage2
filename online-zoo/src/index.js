import "./scss/main.scss";

// alert(
//   "Уважаемый проверяющий, пожалуйста дай мне еще несколько часов, что бы доделать работу. Большое спасибо! Мой ник в Discord: guschins#0304"
// );

const inputRanger = document.querySelector(".range-donate");
let wh1400 = window.matchMedia("(max-width: 1400px)");
let wh950 = window.matchMedia("(max-width: 950px)");

function maxWidth1400(e) {
  if (e.matches) {
    inputRanger.max = 7;
    inputRanger.value = 2;
  } else {
    inputRanger.max = 8;
    inputRanger.value = 3;
  }
}

function maxWidth950(e) {
  if (e.matches) {
    inputRanger.max = 5;
    inputRanger.value = 3;
  } else {
    inputRanger.max = 7;
    inputRanger.value = 2;
  }
}

wh1400.addListener(maxWidth1400);
wh950.addListener(maxWidth950);

maxWidth1400(wh1400);
maxWidth950(wh950);
