import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


export default function Logo({ large }) {
  const className = classnames('logo', {
    'logo--large': large
  });

  return (
    <div className={className}>
      wen
    </div>
  );
}

Logo.propTypes = {
  large: PropTypes.bool.isRequired
};

Logo.defaultProps = {
  large: false
};
