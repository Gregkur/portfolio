import React from "react";
import Zoom from "react-reveal/Zoom";

import "../styles/Modal.css";

const ModalWrapper = (props) => {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) props.hideModal();
  };

  // const onOk = () => {
  //   props.onOk();
  //   props.hideModal();
  // };

  // const okButton = props.showOk ? (
  //   <button onClick={onOk} disabled={props.okDisabled}>
  //     {props.okText}
  //   </button>
  // ) : null;

  return (
    <Zoom duration={1200}>
      <div onClick={handleBackgroundClick} className="modalWrapper">
        <header>
          <h1>{props.title}</h1>

          <button onClick={props.hideModal}>Close</button>
        </header>

        {props.children}

        {/* {okButton} */}
      </div>
    </Zoom>
  );
};

export default ModalWrapper;
