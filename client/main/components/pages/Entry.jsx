import React from 'react';
import { Route } from 'react-router-dom';
import TopBar from '../topBar/TopBar';
import Home from './Home';
import Topics from './Topics';
import About from './About';


export default function Entry() {
  return (
    <div>
      <TopBar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  );
}
