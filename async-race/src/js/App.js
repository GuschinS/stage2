import loaderData from "./loaderData";
import Controller from "./Controller";
import Header from "./Header";
import Main from "./Main";
import generateRandomCar from "./helpers";

class App extends Controller {
  constructor() {
    super();
    this.state = {
      section: "garage",
      page: 1,
      sortBy: "id",
      orderType: "ASC",
      totalCars: 0,
      totalWinners: 0,
      cars: [],
      winners: [],
      animations: [],
      hasWinner: false,
    };

    this.handleSection = this.handleSection.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handlePrevPage = this.handlePrevPage.bind(this);
    this.createCar = this.createCar.bind(this);
    this.updateCar = this.updateCar.bind(this);
    this.deleteCar = this.deleteCar.bind(this);
    this.generateRandomCars = this.generateRandomCars.bind(this);
    this.startEngine = this.startEngine.bind(this);
    this.stopEngine = this.stopEngine.bind(this);
    this.resetCar = this.resetCar.bind(this);
    this.raceCar = this.raceCar.bind(this);
    this.sortCars = this.sortCars.bind(this);
  }

  async initState() {
    const { cars, winners, page } = this.state;

    if (cars.length === 0) {
      const data = await loaderData(`garage?_page=${page}&_limit=7`, "GET");
      const AllCars = await loaderData("garage", "GET");
      this.setState({ ...this.state, cars: data, totalCars: AllCars.length });
    }

    if (winners.length === 0) {
      const data = await loaderData(
        `winners?_page=${page}&_limit=10&_sort=${this.state.sortBy}&_order=${this.state.orderType}`,
        "GET"
      );
      const AllWinners = await loaderData("winners", "GET");
      this.setState({
        ...this.state,
        winners: data,
        totalWinners: AllWinners.length,
      });
    }
  }

  handleSection(target) {
    if (target.dataset.page === "garage") {
      this.setState({ ...this.state, section: "garage", cars: [], page: 1 });
    } else {
      this.setState({
        ...this.state,
        section: "winners",
        page: 1,
        winners: [],
      });
    }
    this.updateRootElement();
  }

  async createCar(body) {
    await loaderData("garage", "POST", body);
    this.setState({ ...this.state, cars: [] });
    return this.updateRootElement();
  }

  async updateCar(body, id) {
    await loaderData(`garage/${id}`, "PUT", body);
    this.setState({ ...this.state, cars: [] });
    return this.updateRootElement();
  }

  async deleteCar(id) {
    await loaderData(`garage/${id}`, "DELETE");
    const winner = await loaderData(`winners/${id}`, "GET");
    if (Object.keys(winner).length !== 0) {
      await loaderData(`winners/${id}`, "DELETE");
    }
    this.setState({ ...this.state, cars: [] });
    this.updateRootElement();
  }

  async generateRandomCars() {
    let count = 0;
    const results = [];
    while (count < 100) {
      const result = loaderData("garage", "POST", generateRandomCar());
      results.push(result);
      count += 1;
    }
    await Promise.all(results);
    this.setState({ ...this.state, cars: [] });
    this.updateRootElement();
  }

  raceCar(btn) {
    const btnElem = btn;
    const startButtons = document.querySelectorAll("button.btn-start");
    btnElem.disabled = true;
    this.setState({ ...this.state, hasWinner: false });
    startButtons.forEach((elem) => this.startEngine(elem, true));
  }

  resetCar() {
    this.setState({ ...this.state, animations: [] });
    return this.updateRootElement();
  }

  async startEngine(btn, race = false) {
    const btnElem = btn;
    const id = Number(btnElem.dataset.id);
    const { animations } = this.state;
    const carItem = btnElem.closest("li");
    const car = carItem.querySelector(".car-icon");
    // const playground = carItem.querySelector(".playground");
    const { distance, velocity } = await loaderData(
      `engine?id=${id}&status=started`,
      "PATCH"
    );
    const duration = distance / velocity;

    btnElem.disabled = true;
    btnElem.nextElementSibling.disabled = false;

    let windowScreen;
    if (window.screen.width >= 601) {
      windowScreen = window.screen.width - 300;
    } else {
      windowScreen = window.screen.width - 180;
    }

    const animation = car.animate(
      [
        {
          transform: "translateX(0)",
        },
        {
          transform: `translateX(${windowScreen}px)`,
        },
      ],
      {
        duration,
        fill: "forwards",
      }
    );

    animation.id = id;
    animations.push(animation);

    this.setState({ ...this.state, animations });

    try {
      await loaderData(`engine?id=${id}&status=drive`, "PATCH");
      if (race && !this.state.hasWinner) {
        this.setState({ ...this.state, hasWinner: true, winners: [] });
        this.setWinner(id, +(duration / 1000).toFixed(2));
      }
    } catch (error) {
      animation.pause();
    }
  }

  async stopEngine(btn) {
    const btnElem = btn;
    const id = Number(btnElem.dataset.id);
    const { animations } = this.state;
    const index = animations.findIndex((val) => Number(val.id) === id);
    const raceBtn = document.querySelector(".btn-race");

    if (animations.length === 1) raceBtn.disabled = false;

    btnElem.disabled = true;
    btnElem.previousElementSibling.disabled = false;

    if (index !== -1) {
      animations[index].pause();
      await loaderData(`engine?id=${id}&status=stopped`, "PATCH");
      animations[index].currentTime = 0;
      animations.splice(index, 1);
      this.setState({ ...this.state, animations });
    }
  }

  async setWinner(id, time) {
    const oldWinner = await loaderData(`winners/${id}`, "GET");
    if (Object.keys(oldWinner).length !== 0) {
      await loaderData(`winners/${id}`, "PUT", {
        wins: oldWinner.wins + 1,
        time: Math.min(oldWinner.time, time),
      });
    } else {
      await loaderData("winners", "POST", {
        wins: 1,
        time,
        id,
      });
    }
    const cars = await loaderData("garage", "GET");
    const car = cars.find((car) => car.id === id);
    alert(`Winner: ${car.name} Time: ${time}`);
  }

  handleNextPage() {
    this.setState({
      ...this.state,
      cars: [],
      winners: [],
      page: this.state.page + 1,
    });
    this.updateRootElement();
  }

  handlePrevPage() {
    this.setState({
      ...this.state,
      cars: [],
      winners: [],
      page: this.state.page - 1,
    });
    this.updateRootElement();
  }

  async sortCars(sortBy, orderType) {
    this.setState({ ...this.state, winners: [], sortBy, orderType });
    this.updateRootElement();
  }

  async render() {
    await this.initState();
    const header = new Header({
      section: this.state.section,
      handleSection: this.handleSection,
    });
    const main = new Main({
      ...this.state,
      raceCar: this.raceCar,
      resetCar: this.resetCar,
      handleNextPage: this.handleNextPage,
      handlePrevPage: this.handlePrevPage,
      createCar: this.createCar,
      updateCar: this.updateCar,
      deleteCar: this.deleteCar,
      generateRandomCars: this.generateRandomCars,
      startEngine: this.startEngine,
      stopEngine: this.stopEngine,
      sortCars: this.sortCars,
      totalPages() {
        return Math.ceil(this.totalCars / 7);
      },
    });

    const fragment = new DocumentFragment();

    fragment.appendChild(header.render());
    fragment.appendChild(await main.render());

    return fragment;
  }
}

export default App;
