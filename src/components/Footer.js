import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagramSquare,
  faGithubSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css"

export default function Footer() {
  return (
    <div className="mainFooter">
      <FontAwesomeIcon icon={faLinkedin} />
      <FontAwesomeIcon icon={faGithubSquare} />
      <FontAwesomeIcon icon={faFacebookSquare} />
      <FontAwesomeIcon icon={faInstagramSquare} />
    </div>
  );
}
