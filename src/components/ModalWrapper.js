import React from "react";

import ModalCarousel from "./ModalCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChrome } from "@fortawesome/free-brands-svg-icons";
import Zoom from "react-reveal/Zoom";

import "../styles/Modal.css";

const ModalWrapper = (props) => {
  const { title, children, hideModal, github, website } = props;
  return (
    <Zoom duration={600}>
      <div className="modalWrapper">
        <ModalCarousel {...props} />
        <header>
          <h1>{title}</h1>
        </header>
        <aside>{children}</aside>
        <div className="buttonContainer">
          <FontAwesomeIcon
            className="mIcon close"
            icon={faTimes}
            onClick={hideModal}
          />
          <a href={github} target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="mIcon link" icon={faGithub} />
          </a>
          <a href={website} target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="mIcon link" icon={faChrome} />
          </a>
        </div>
      </div>
    </Zoom>
  );
};

export default ModalWrapper;
