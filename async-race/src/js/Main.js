import Garage from "./Garage";
// import Winners from "../winners/Winners";
// import "./main.css";

class Main {
  constructor(props) {
    this.props = props;
  }

  async render() {
    const main = document.createElement("main");

    if (this.props.section === "garage") {
      const garage = new Garage(this.props);
      main.appendChild(garage.render());
    }

    return main;
  }
}

export default Main;
