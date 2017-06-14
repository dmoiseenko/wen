import React from 'react';
import { Route } from 'react-router-dom';

import TopBar from '../topbar/TopBar';
import Home from '../pages/HomePage';
import Notes from '../pages/NotesPage';
import About from '../pages/AboutPage';
import * as routes from '../../../../common/routes';
import Graph from '../pages/GraphPage';


export default function Index() {
  return (
    <div className="index">
      <nav className="nav nav__topbar">
        <TopBar />
      </nav>
      <section className="section section__content">
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.about} component={About} />
        <Route path={routes.notes} component={Notes} />
        <Route path={routes.graph} component={Graph} />
      </section>
    </div>
  );
}
