import React from 'react';
import propTypes from 'prop-types';
// impt

const Button = ({ color, text, onClick }) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'teal',
  text: 'Add',
};

export default Button;
