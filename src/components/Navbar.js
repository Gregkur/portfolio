import { React, Component } from "react";
import { Link } from "react-scroll";
import Pdf from "../documents/cv.pdf";

import "../styles/Navbar.css";

export default class Navbar extends Component {
  // TODO MOVE IT TO A HOOK
  state = {
    nav: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    const navbar = document.querySelector(".nav");
    this.navbarOffset = navbar.offsetTop;
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
    const navbarItems = ["Home", "About", "Skills", "Projects", "Contact"];
    const mappedNavbarItems = navbarItems.map((item) => (
      <Link
        className="menuItem"
        activeClass="active"
        to={item.toLocaleLowerCase()}
        spy={true}
        smooth={true}
        duration={500}
        offset={-40}>
        {item}
      </Link>
      // href = {Pdf} target = "_blank"
    ));
    const cv = (
      <a className="menuItem" href={Pdf} target="_blank" rel="noreferrer">
        Resume
      </a>
    );
    return (
      <div className={`nav ${this.state.nav && "sticky"}`}>
        <span className="menuContainer">
          {mappedNavbarItems}
          {cv}
        </span>
      </div>
    );
  }
}
