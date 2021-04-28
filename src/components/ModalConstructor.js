import React from "react";

import PortfolioModal from "./modals/PortfolioModal.js";
import ArtSpaceModal from "./modals/ArtSpaceModal.js";
import ShadrModal from "./modals/ShadrModal.js";
import SocialModal from "./modals/SocialModal.js";
import DevbookModal from "./modals/DevbookModal.js";
import YanceModal from "./modals/YanceModal.js";

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
    case "DEV":
      return (
        <DevbookModal
          website="https://pure-bastion-79183.herokuapp.com/"
          github="https://github.com/Gregkur/devbook"
          {...props}
        />
      );
    case "YANCE":
      return (
        <YanceModal
          website="https://www.yancesports.com/"
          github="https://www.yancesports.com/"
          {...props}
        />
      );

    default:
      return null;
  }
};

export default ModalConductor;
