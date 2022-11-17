import Splide from "@splidejs/splide";
import { birdsData } from "./game";

const splideList = document.querySelector(".splide__list");

const createSlide = () => {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      const li = document.createElement("li");
      li.classList.add("splide__slide");
      const img = document.createElement("img");
      img.src = birdsData[i][j].image;
      img.width = 500;
      img.height = 400;
      li.append(img);
      const splideText = document.createElement("div");
      splideText.classList.add("splide__text");
      const h3 = document.createElement("h3");
      h3.textContent = birdsData[i][j].name;
      splideText.append(h3);
      const h4 = document.createElement("h4");
      h4.textContent = birdsData[i][j].species;
      splideText.append(h4);
      const p = document.createElement("p");
      p.textContent = birdsData[i][j].description;
      splideText.append(p);
      li.append(splideText);
      splideList.append(li);
    }
  }
};

if (splideList) {
  createSlide();
}

new Splide(".splide").mount();
