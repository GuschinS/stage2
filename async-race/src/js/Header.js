import template from "./templateHeader";

class Header {
  constructor(props) {
    this.props = props;
  }

  render() {
    const header = document.createElement("header");
    header.innerHTML = template(this.props.section);
    const buttons = header.querySelectorAll("button");
    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => this.props.handleSection(e.target));
    });
    return header;
  }
}

export default Header;
