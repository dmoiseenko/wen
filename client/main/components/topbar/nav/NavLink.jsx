import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


export default function NavigationLink({ route, label, openCloseMenu }) {
  function handleClickNavLink() {
    openCloseMenu();
  }

  return (
    <NavLink
      className="nav-item is-tab"
      activeClassName="is-active"
      exact
      to={route}
      onClick={handleClickNavLink}
    >
      {label}
    </NavLink>
  );
}

NavigationLink.propTypes = {
  route: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  openCloseMenu: PropTypes.func.isRequired
};

