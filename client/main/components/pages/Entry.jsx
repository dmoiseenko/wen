import React from 'react';
import { Route } from 'react-router-dom';

import TopBar from '../topbar/TopBar';
import Home from './Home';
import Notes from './Notes';
import About from './About';
import * as routes from '../../../../common/routes';


export default function Entry() {
  return (
    <div>
      <TopBar />
      <Route exact path={routes.home} component={Home} />
      <Route path={routes.about} component={About} />
      <Route path={routes.notes} component={Notes} />
    </div>
  );
}
