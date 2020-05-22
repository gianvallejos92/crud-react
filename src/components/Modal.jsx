import React from 'react';
import '../assets/styles/Modal.styl';

const Modal = ({ isActive, children }) => (
  <>
    {isActive ? (
      <div className="modalWrapper">
        <div className="modalContent">
          { children }
        </div>
      </div>
    ) : (<></>) }
  </>
);

export default Modal;
