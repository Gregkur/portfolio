import React from "react";

import ModalWrapper from "./ModalWrapper.js";

const Portfolio = (props) => {
  return (
    <ModalWrapper {...props} title="Portfolio">
      <p>
        Personal portfolio project, designed and developed by myself. Built on{" "}
        <b>ReactJS</b>, with the usage of <b>hooks</b> to manage the state of
        components, and applying "React way" of <b>component hierarchy</b>,{" "}
        <b>reusability</b>, and data flow. Exercise in css animation, timing and
        delays, design and optimizing performance. Fully client-side rendered,
        implementation of SSR is coming soon.
      </p>
    </ModalWrapper>
  );
};

export default Portfolio;
