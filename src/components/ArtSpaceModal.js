import React from 'react';

import ModalWrapper from './ModalWrapper.js';

const ArtSpace = props => {
//   const portfolio = provider => {
//     props.hideModal();
//   };

  return (
    <ModalWrapper
      {...props}
      title="ArtSpace"
      width={500}
      showOk={false}
    >
      <p>ArtSpace</p>
    </ModalWrapper>
  );
};

export default ArtSpace;