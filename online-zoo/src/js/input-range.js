const inputRange = document.querySelector(".range-donate");
let wh1400 = window.matchMedia("(max-width: 1400px)");
let wh950 = window.matchMedia("(max-width: 950px)");

function maxWidth1400(e) {
  if (e.matches) {
    inputRange.max = 7;
    inputRange.value = 2;
  } else {
    inputRange.max = 8;
    inputRange.value = 3;
  }
}

function maxWidth950(e) {
  if (e.matches) {
    inputRange.max = 5;
    inputRange.value = 3;
  } else {
    inputRange.max = 7;
    inputRange.value = 2;
  }
}

wh1400.addListener(maxWidth1400);
wh950.addListener(maxWidth950);

maxWidth1400(wh1400);
maxWidth950(wh950);
