import React from 'react';
import '../assets/styles/ButtonWrapper.styl';

const ButtonWrapper = ({ children }) => (
  <div className="button-container">
    {children}
  </div>
);

export default ButtonWrapper;
