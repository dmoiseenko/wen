import React from 'react';
import PropTypes from 'prop-types';


export default function Icon({ iconClassName, error }) {
  return (
    <span className="icon">
      {
        error ?
          <i className="fa fa-warning" />
          :
          <i className={iconClassName} />
      }
    </span>
  );
}

Icon.propTypes = {
  iconClassName: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired
};

Icon.defaultProps = {
  error: false
};
