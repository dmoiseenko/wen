import React from 'react';

import Logo from '../../../common/components/Logo';
import NavBarContainer from './NavBar.container';
import NavToggleContainer from './NavToggle.container';


function TopBar() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-left">
          <div className="nav-item">
            <Logo />
          </div>
        </div>
        <NavToggleContainer />
        <NavBarContainer />
      </div>
    </nav>
  );
}

export default TopBar;
