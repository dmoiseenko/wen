import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


export default function NavToggle({ openCloseMenu, isOpen }) {
  function handleClick() {
    openCloseMenu();
  }

  const className = classnames('nav-toggle', {
    'is-active': isOpen
  });

  return (
    <span className={className} onClick={handleClick}>
      <span />
      <span />
      <span />
    </span>
  );
}

NavToggle.propTypes = {
  openCloseMenu: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};
