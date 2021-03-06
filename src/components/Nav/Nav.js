import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({ children, className }) => (
  <nav data-test="nav-component" className={className}>
    {children}
  </nav>
);

Nav.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired
};

export { Nav as default };
