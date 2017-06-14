import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import LogoutContainer from '../logout/Logout.container';
import NavLinkContainer from './NavLink.container';
import * as routes from '../../../../../common/routes';


export default function NavBar({ isOpen }) {
  const className = classnames('nav-right nav-menu', {
    'is-active': isOpen
  });

  return (
    <div className={className}>
      <NavLinkContainer
        route={routes.home}
        label="Home"
      />
      <NavLinkContainer
        route={routes.notes}
        label="Notes"
      />
      <NavLinkContainer
        route={routes.graph}
        label="Graph"
      />
      <NavLinkContainer
        route={routes.about}
        label="About"
      />
      <div className="nav-item">
        <LogoutContainer />
      </div>
    </div>
  );
}

NavBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
