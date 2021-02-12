import React from 'react';

import ModalWrapper from './ModalWrapper.js';

const Social = props => {
//   const portfolio = provider => {
//     props.hideModal();
//   };

  return (
    <ModalWrapper
      {...props}
      title="Social Book Club"
      width={500}
      showOk={false}
    >
      <p>Social Book Club</p>
    </ModalWrapper>
  );
};

export default Social;