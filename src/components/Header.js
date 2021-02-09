import React from "react";
// import Particles from "react-particles-js";
// import { particleParams } from "../particles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";
import { Link} from "react-scroll";

export default function Header() {
  return (
    <div className="header home">
      <div className="head"></div>
      <div className="textContainer">
        <h1>
          Hey there! I’m <span className="greg">Greg</span> <br />
          I'm a front-end developer from Berlin.
        </h1>
        <Link
          className="menuItem"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}>
          <FontAwesomeIcon className="arrowDown" icon={faChevronCircleDown} />
        </Link>
      </div>
    </div>
  );
}
