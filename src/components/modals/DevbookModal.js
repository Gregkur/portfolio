import React from "react";

import ModalWrapper from "../ModalWrapper.js";

const Shadr = (props) => {
  return (
    <ModalWrapper {...props} title="Devbook" width={500} showOk={false}>
      <p>
        Prototype of an online social platform to connect Developers. Full-stack
        project created in <b>ReactJS</b>, with <b>Hooks</b> and <b>Redux</b>.
        Backend created in <b>NodeJS</b> with <b>Express</b> and <b>MongoDB</b>.
        With custom reducers, and secure api calls.
      </p>
    </ModalWrapper>
  );
};

export default Shadr;
