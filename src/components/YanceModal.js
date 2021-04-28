import React from "react";

import ModalWrapper from "./ModalWrapper.js";

const Shadr = (props) => {
  return (
    <ModalWrapper {...props} title="Shadr" width={500} showOk={false}>
      <p>
        Responsive web app made using <b>ReactJS</b> with <b>Hooks</b>,{" "}
        <b>React Router</b>, <b>Material UI</b>, and <b>JSS</b>. With the use of
        higher-order components, state management, and unidirectional data flow.
        A good exercise in dynamically assigning data and displaying it properly
        (for example, font color changes dynamically depending on the the
        relative brightness of the background).
      </p>
    </ModalWrapper>
  );
};

export default Shadr;
