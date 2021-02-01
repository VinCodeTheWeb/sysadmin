import React from 'react';
import PropTypes from 'prop-types';

const SpanNotif = ({ notif, className }) => (
  <span data-test="span-notif-component" className={className}>
    {notif}
  </span>
);

SpanNotif.propTypes = {
  notif: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export { SpanNotif as default };
