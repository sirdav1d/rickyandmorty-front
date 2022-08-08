import './modalGen.css';
import Overlay from 'components/overlay/Overlay';
import React from 'react';

function ModalGen({ children, closeModal }) {

  const handleclick = (e, canClose) => {
    e.stopPropagation();
    if (canClose) {
      closeModal();
    }
  };

  return (
    <Overlay overlayClick={closeModal}>
      <div className="ModalGen" onClick={handleclick}>
        <span className="modalClose" onClick={(e) => handleclick(e, true)}>
          +
        </span>
        <div className="modalBody">{children}</div>
      </div>
    </Overlay>
  );
}

export default ModalGen;
