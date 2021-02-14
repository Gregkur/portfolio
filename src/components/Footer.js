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
import { animateScroll as scroll } from "react-scroll";

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
        <a
          href="https://www.linkedin.com/in/grzegorz-kurzajczyk/"
          target="_blank"
          rel="noreferrer">
          <FontAwesomeIcon className="footerIcon" icon={faLinkedin} />
        </a>
        <a href="https://github.com/Gregkur" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="footerIcon" icon={faGithubSquare} />
        </a>
        <a
          href="https://www.facebook.com/purestubbornness"
          target="_blank"
          rel="noreferrer">
          <FontAwesomeIcon className="footerIcon" icon={faFacebookSquare} />
        </a>
        <a
          href="https://www.instagram.com/puresturheit/"
          target="_blank"
          rel="noreferrer">
          <FontAwesomeIcon className="footerIcon" icon={faInstagramSquare} />
        </a>
        <h2>Grzegorz Kurzajczyk ©2021</h2>
      </div>
    </>
  );
}
