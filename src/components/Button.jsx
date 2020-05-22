import React from 'react';
import '../assets/styles/Button.styl';

const Button = ({ value, onClick, islink }) => {
  return (
    <>
      <button
        type="button"
        className={(islink) ? 'link-button' : ''}
        onClick={onClick}
      >
        { value }
      </button>
    </>
  );
};

export default Button;
