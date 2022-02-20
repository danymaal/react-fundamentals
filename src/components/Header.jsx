import React from 'react';
import propTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

Header.defaultProps = {
  title: 'i like typescript',
};

Header.propTypes = {
  title: propTypes.string.isRequired,
};
// Если мы присвоем тайтлу номер то выдаст ошибку в консоли

// rafce
export default Header;
