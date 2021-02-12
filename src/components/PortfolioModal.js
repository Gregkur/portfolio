import React from 'react';

import ModalWrapper from './ModalWrapper.js';

const Portfolio = props => {
//   const portfolio = provider => {
//     props.hideModal();
//   };

  return (
    <ModalWrapper
      {...props}
      title="Portfolio"
      width={500}
      showOk={false}
    >
      <p>Portfolio</p>
    </ModalWrapper>
  );
};

export default Portfolio;