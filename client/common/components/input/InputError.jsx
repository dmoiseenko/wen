import React from 'react';
import PropTypes from 'prop-types';


export default function InputErrors({ error }) {
  if (!error) {
    return null;
  }

  return (
    <p className="help is-danger">{error}</p>
  );
}

InputErrors.propTypes = {
  error: PropTypes.string.isRequired
};

