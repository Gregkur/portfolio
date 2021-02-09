import { React, Component } from "react";
import "../styles/Navbar.css";
// import { stickyNavbar } from "../scripts/stickyNavbar";

export default class Navbar extends Component {
  state = {
    nav: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    const navbar = document.querySelector(".nav");
    this.navbarOffset = navbar.offsetTop;
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  handleScroll = () => {
    if (window.pageYOffset > this.navbarOffset) {
      if (!this.state.nav) {
        this.setState({ nav: true });
      }
    } else {
      if (this.state.nav) {
        this.setState({ nav: false });
      }
    }
  };

  render() {
    const navbarItems = ["Home", "About", "Skills", "Projecs", "Contact", "CV"];
    const mappedNavbarItems = navbarItems.map((item) => (
      <p className="menuItem">{item}</p>
    ));
    return (
      <div className={`nav ${this.state.nav && "sticky"}`}>
        <span className="menuContainer">{mappedNavbarItems}</span>
      </div>
    );
  }
}
