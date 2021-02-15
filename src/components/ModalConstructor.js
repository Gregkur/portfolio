import React from "react";

import PortfolioModal from "./PortfolioModal.js";
import ArtSpaceModal from "./ArtSpaceModal.js";
import ShadrModal from "./ShadrModal.js";
import SocialModal from "./SocialModal.js";

const ModalConductor = (props) => {
  switch (props.currentModal) {
    case "PORTFOLIO":
      return (
        <PortfolioModal
          website="https://www.gregk.dev/"
          github="https://github.com/Gregkur/portfolio"
          {...props}
        />
      );

    case "ART":
      return (
        <ArtSpaceModal
          website="https://artspace490.herokuapp.com/"
          github="https://github.com/Gregkur/artspace"
          {...props}
        />
      );

    case "SHADR":
      return (
        <ShadrModal
          website="https://shadr.herokuapp.com/"
          github="https://github.com/Gregkur/Shadr"
          {...props}
        />
      );

    case "SOCIAL":
      return (
        <SocialModal
          website="https://socialbookclub.herokuapp.com/"
          github="https://github.com/Gregkur/social_book_club"
          {...props}
        />
      );

    default:
      return null;
  }
};

export default ModalConductor;
