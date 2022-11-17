const languages = document.querySelector(".languages");
const language = document.querySelectorAll(".language");

if (languages) {
  languages.addEventListener("click", (event) => {
    let selectedElement = event.target;
    let selectedLanguage = event.target.classList[1];
    localStorage.setItem("selectedLanguage", selectedLanguage);
    language.forEach((el) => {
      el.classList.remove("selected");
    });
    selectedElement.classList.add("selected");
  });
}
