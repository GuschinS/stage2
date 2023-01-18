import loaderData from "./loaderData";
import Controller from "./Controller";
import Header from "./Header";
import Main from "./Main";

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

  async render() {
    await this.initState();
    const header = new Header({
      section: this.state.section,
      handleSection: this.handleSection,
    });
    const main = new Main({
      ...this.state,
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
