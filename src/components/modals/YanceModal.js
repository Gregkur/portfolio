import React from "react";

import ModalWrapper from "../ModalWrapper.js";

const Shadr = (props) => {
  return (
    <ModalWrapper {...props} title="Yance" width={500} showOk={false}>
      <p>
        Yance is an online platform for live fitness sessions with independent
        trainers. Prototype created using <b>Ruby on Rails</b>. I lead the team
        of developers working on a technology change to <b>ReactJS</b> with{" "}
        <b>ContextAPI</b>, <b>Hooks</b>, full <b>internationalization</b> and{" "}
        <b>TypeScript</b>.
      </p>
    </ModalWrapper>
  );
};

export default Shadr;
