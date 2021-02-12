import React from "react";

import ModalWrapper from "./ModalWrapper.js";

const ArtSpace = (props) => {
  //   const portfolio = provider => {
  //     props.hideModal();
  //   };

  return (
    <ModalWrapper {...props} title="ArtSpace" width={500} showOk={false}>
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas justo
        orci, sollicitudin iaculis dignissim at, lacinia vel tellus. Nam ac ex
        bibendum, pulvinar ligula at, tempor sem. Phasellus a ullamcorper
        mauris. Pellentesque eu scelerisque libero. Nunc ac lectus hendrerit,
        vehicula ipsum ac, tristique est. Phasellus tempor enim fringilla
        convallis hendrerit. Cras lorem leo, pretium in fermentum ac,
        ullamcorper eget ipsum.Cras lorem leo, pretium in fermentum ac,
        ullamcorper eget ipsum. Cras lorem leo, pretium in fermentum ac,
        ullamcorper eget ipsum.Cras lorem leo, pretium in fermentum ac,
        ullamcorper eget ipsum.
      </p>
    </ModalWrapper>
  );
};

export default ArtSpace;
