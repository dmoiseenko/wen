import React from 'react';

import NavBarContainer from './nav/NavBar.container';
import NavToggleContainer from './nav/NavToggle.container';
import NavLogo from './nav/NavLogo';


function TopBar() {
  return (
    <div className="container">
      <NavLogo />
      <NavToggleContainer />
      <NavBarContainer />
    </div>
  );
}

export default TopBar;
