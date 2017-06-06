import React from 'react';
import PropTypes from 'prop-types';


export default function InputLabel({ label }) {
  if (!label) {
    return null;
  }

  return (
    <label className="label">
      {label}
    </label>
  );
}

InputLabel.propTypes = {
  label: PropTypes.string.isRequired
};
