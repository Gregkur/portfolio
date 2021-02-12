import React from "react";
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
        <div className="carousel"></div>
        <header>
          <h1>{props.title}</h1>
        </header>
        <div className="buttonContainer">
          <FontAwesomeIcon
            className="mIcon close"
            icon={faTimes}
            onClick={props.hideModal}
          />

          {/* <button className="buttonModal" onClick={props.hideModal}>
            Close
          </button> */}
          <FontAwesomeIcon className="mIcon link" icon={faGithub} />
          <FontAwesomeIcon className="mIcon link" icon={faChrome} />
          {/* <button className="buttonModal">Github</button>
          <button className="buttonModal">Demo</button> */}
        </div>
        {props.children}
      </div>
    </Zoom>
  );
};

export default ModalWrapper;
