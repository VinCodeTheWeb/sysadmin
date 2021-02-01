import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import Button from '../Button/Button';

const NavItem = ({ textLink, active, handleClick }) => (
  <li
    data-test="navitem-component"
    className={`side-nav__item ${active && 'side-nav__item--active'}`}
    onClick={handleClick}
  >
    <Button className="side-nav__link">
      <span>{textLink}</span>
    </Button>
  </li>
);

NavItem.propTypes = {
  textLink: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};

export { NavItem as default };
