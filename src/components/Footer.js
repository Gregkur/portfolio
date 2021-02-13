import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagramSquare,
  faGithubSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FontAwesomeIcon
        className="arrowUp"
        icon={faChevronCircleUp}
        onClick={scrollToTop}
      />
      <div className="mainFooter">
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithubSquare} />
        <FontAwesomeIcon icon={faFacebookSquare} />
        <FontAwesomeIcon icon={faInstagramSquare} />
      </div>
      {/* <div className="contactTextBottom">
        <h4>Or just text me:</h4>
        <h5>grzegorz.kurzajczyk@gmail.com</h5>
        <h5>+49 174 3412 767</h5>
        <h6>calling is so 2020.</h6>
      </div> */}
    </>
  );
}
