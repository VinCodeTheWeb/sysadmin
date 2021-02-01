import React from 'react';
import PropTypes from 'prop-types';

const DescriptionList = ({ keyName, text }) => (
  <li data-test="description-list-component" className="list__item">
    <span className="list__item-span">{keyName}:</span> {text}
  </li>
);

DescriptionList.propTypes = {
  keyName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export { DescriptionList as default };
