import React from 'react';
import PropTypes from 'prop-types';


export default function Logout({ logout }) {
  function handleClick() {
    logout();
  }

  return (
    <a className="button is-medium is-primary" onClick={handleClick}>
      Log out
    </a>
  );
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired
};
