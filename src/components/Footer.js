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
        <FontAwesomeIcon className="footerIcon" icon={faLinkedin} />
        <FontAwesomeIcon className="footerIcon" icon={faGithubSquare} />
        <FontAwesomeIcon className="footerIcon" icon={faFacebookSquare} />
        <FontAwesomeIcon className="footerIcon" icon={faInstagramSquare} />
      <h2>Grzegorz Kurzajczyk ©2021</h2>
      </div>
    </>
  );
}
