import React from 'react';

import PortfolioModal from './PortfolioModal.js';
// import ArtSpaceModal from './ArtSpaceModal.js';
// import ShadrModal from './ShadrModal.js';
// import SocialModal from './SocialModal.js';

const ModalConductor = props => {
  switch (props.currentModal) {
    case 'PORTFOLIO':
      return <PortfolioModal {...props}/>;

    // case 'ART':
    //   return <ArtSpaceModal {...props}/>;

    // case 'SHADR':
    //   return <ShadrModal {...props}/>;

    // case 'SOCIAL':
    //   return <SocialModal {...props}/>;

    default:
      return null;
  }
};

export default ModalConductor;