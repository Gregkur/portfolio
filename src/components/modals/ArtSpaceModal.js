import React from "react";

import ModalWrapper from "../ModalWrapper.js";

const ArtSpace = (props) => {
  return (
    <ModalWrapper {...props} title="ArtSpace" width={500} showOk={false}>
      <p>
        Art renting platform, that connects young artists with art collectors
        willing to showcase their work. Built as a team project with{" "}
        <b>Ruby on Rails</b>, <b>HTML</b>, <b>SASS</b>, <b>Javascript</b>, and{" "}
        <b>ActiveRecord</b>. First ever project build as a team with the usage
        of Github, pull requests, and workflow divided into backend / frontend.
      </p>
    </ModalWrapper>
  );
};

export default ArtSpace;
