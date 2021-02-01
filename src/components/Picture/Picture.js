import React from 'react';
import PropTypes from 'prop-types';

const Picture = ({ imageName, alt, className }) => {
  return (
    <img
      data-test="component-picture"
      className={className}
      src={`../../assets/img/${imageName}`}
      alt={alt}
    />
  );
};

Picture.defaultProps = {
  alt: '',
  className: ''
};

Picture.propTypes = {
  imageName: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string
};

export { Picture as default };
