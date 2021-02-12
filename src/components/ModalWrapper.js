import React from "react";
import ModalCarousel from "./ModalCarousel";
import Zoom from "react-reveal/Zoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChrome } from "@fortawesome/free-brands-svg-icons";

import "../styles/Modal.css";

const ModalWrapper = (props) => {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) props.hideModal();
  };
  return (
    <Zoom duration={500}>
      <div onClick={handleBackgroundClick} className="modalWrapper">
        <ModalCarousel />
        {/* <div className="carousel"></div> */}
        <header>
          <h1>{props.title}</h1>
        </header>
        <aside>{props.children}</aside>
        <div className="buttonContainer">
          <FontAwesomeIcon
            className="mIcon close"
            icon={faTimes}
            onClick={props.hideModal}
          />
          <FontAwesomeIcon
            className="mIcon link"
            icon={faGithub}
            onClick={props.hideModal}
          />
          <FontAwesomeIcon
            className="mIcon link"
            icon={faChrome}
            onClick={props.hideModal}
          />
        </div>
      </div>
    </Zoom>
  );
};

export default ModalWrapper;
