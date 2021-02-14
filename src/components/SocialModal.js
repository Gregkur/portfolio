import React from "react";

import ModalWrapper from "./ModalWrapper.js";

const Social = (props) => {
  return (
    <ModalWrapper
      {...props}
      title="Social Book Club"
      width={500}
      showOk={false}>
      <p>
        A fully functional solution to book lovers on a tight budget. Built with{" "}
        <b>Ruby on Rails</b>, <b>HTML </b>, <b>SASS </b>, <b>Javascript </b>,
        and <b>ActiveRecord </b>
        while working in a team as a Lead Developer. The prototype was pitched
        live during Le Wagon demo day.
      </p>
    </ModalWrapper>
  );
};

export default Social;
