import React from 'react';
import { Link } from 'react-router-dom';
import UserContainer from '../topBar/User.container';


function TopBar() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
    </div>
  );
}

export default TopBar;
