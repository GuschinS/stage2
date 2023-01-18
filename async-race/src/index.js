import App from "./js/App";
import "./scss/main.scss";

async function init() {
  const root = document.getElementById("root");
  const app = new App();

  root.appendChild(await app.render());
}

init();
