import React from 'react';

import ModalWrapper from './ModalWrapper.js';

const Shadr = props => {
//   const portfolio = provider => {
//     props.hideModal();
//   };

  return (
    <ModalWrapper
      {...props}
      title="Shadr"
      width={500}
      showOk={false}
    >
      <p>Shadr</p>
    </ModalWrapper>
  );
};

export default Shadr;