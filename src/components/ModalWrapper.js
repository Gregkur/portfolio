import React from "react";
import Zoom from "react-reveal/Zoom";

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
          <button className="buttonModal" onClick={props.hideModal}>
            Close
          </button>
          <button className="buttonModal">Github</button>
          <button className="buttonModal">Demo</button>
        </div>
        {props.children}
      </div>
    </Zoom>
  );
};

export default ModalWrapper;
