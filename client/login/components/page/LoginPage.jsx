import React from 'react';

import Aside from '../aside/Aside';
import Logo from '../../../common/components/Logo';
import LoginFormContainer from '../form/LoginForm.container';


export default function LoginPage() {
  return (
    <div className="login-wrapper columns">
      <Aside />
      <div className="column is-4">
        <section className="hero is-fullheight">
          <div className="hero-head">
            <div className="section has-text-centered">
              <Logo large />
            </div>
          </div>
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <LoginFormContainer />
                  <div className="section forgot-password">
                    <p className="has-text-centered">
                      <a href="https://moiden.com/dmoiseenko/wen/wikis/demo-credentials">Need help?</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
