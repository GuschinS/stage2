import template from "./template";

class Cars {
  constructor(props) {
    this.props = props;
  }

  selectBtn(btn) {
    const id = Number(btn.dataset.id);
    const car = this.props.cars.find((val) => val.id === id);
    const updateCarNameInput = document.getElementById("update-car-name");
    const updateCarColorInput = document.getElementById("update-car-color");
    const updateBtn = document.getElementById("update-btn");

    updateCarNameInput.disabled = false;
    updateCarColorInput.disabled = false;
    updateBtn.disabled = false;
    updateCarNameInput.value = car.name;
    updateCarColorInput.value = car.color;
    updateBtn.setAttribute("data-id", id);
  }

  render() {
    const garagePlayground = document.createElement("div");
    garagePlayground.className = "garage__playground";
    garagePlayground.innerHTML = template(this.props);
    const prevBtn = garagePlayground.querySelector("button.btn-prev");
    const nextBtn = garagePlayground.querySelector("button.btn-next");
    const deleteButtons =
      garagePlayground.querySelectorAll("button.btn-delete");
    const selectButtons =
      garagePlayground.querySelectorAll("button.btn-select");
    const startButtons = garagePlayground.querySelectorAll("button.btn-start");
    const stopButtons = garagePlayground.querySelectorAll("button.btn-stop");

    deleteButtons.forEach((btn) => {
      btn.addEventListener("click", async () => {
        const id = Number(btn.dataset.id);
        await this.props.deleteCar(id);
      });
    });
    selectButtons.forEach((btn) => {
      btn.addEventListener("click", () => this.selectBtn(btn));
    });
    startButtons.forEach((btn) => {
      btn.addEventListener("click", () => this.props.startEngine(btn));
    });
    stopButtons.forEach((btn) => {
      btn.addEventListener("click", () => this.props.stopEngine(btn));
    });
    prevBtn.addEventListener("click", () => this.props.handlePrevPage());
    nextBtn.addEventListener("click", () => this.props.handleNextPage());
    return garagePlayground;
  }
}

export default Cars;
