import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ text, className, level }) => {
  const TagName = level;
  return (
    <TagName data-test="heading-component" className={className}>
      {text}
    </TagName>
  );
};

Heading.defaultProps = {
  level: 'h1'
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  level: PropTypes.elementType
};

export { Heading as default };
