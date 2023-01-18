// import "../assets/finish-flag.png";

function template(props) {
  function getCar() {
    let result = "";
    for (const car of props.cars) {
      result += `<li class="car">
      <h3 class="car__name">${car.name}</h3>
      <div class="car__buttons-group">
        <button data-id=${car.id} class="btn-select">
          <span class="select">select</span>
        </button>
        <button data-id=${car.id} class="btn-delete">
          <span class="remove">remove</span>
        </button>
        <button data-id=${car.id} class="btn-start">
          <span class="start">start</span>
        </button>
        <button data-id=${car.id} class="btn-stop"disabled>
          <span class="stop">stop</span>
        </button>
      </div>
      <div class="playground">
      <i class="car-icon" style="background-color: ${car.color}"></i>
      <span class="finish-flag"></span>
      </div>
    </li>`;
    }

    return result;
  }
  return `<div class="garage__playground">
  <h2>Garage (${props.totalCars} cars):</h2>
  <ul class="cars">
    ${getCar()}
  </ul>
  <div class="pagination">
    <button class="btn-prev""
    ${props.page === 1 ? "disabled" : ""} >
      <span class="prev">prev</span>
    </button>
    <span class="page">${props.page}/${props.totalPages()}</span>
    <button class="btn-next""
    ${props.page >= props.totalPages() ? "disabled" : ""}>
      <span class="next">next</span>
    </button>
  </div>
</div>`;
}

export default template;
