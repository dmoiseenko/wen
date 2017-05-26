import React from 'react';

import Title from './Title';
import LoginFormContainer from '../form/LoginForm.container';


export default function LoginPage() {
  return (
    <div className="page container is-fluid ">
      <div className="top">
        <Title />
      </div>
      <div className="content is-center-vertically-horizontally">
        <div className="columns is-center-vertically-horizontally">
          <div className="column is-narrow">
            <LoginFormContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
