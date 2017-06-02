import React from 'react';


export default function Aside() {
  return (
    <div className="column is-8 is-hidden-mobile hero-banner">
      <section className="hero is-fullheight is-dark">
        <div className="hero-body">
          <div className="container section">
            <div className="has-text-right">
              <h1 className="title is-1">The secret of getting ahead is getting started.</h1> <br />
              <p className="title is-3">Mark Twain</p>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <p className="has-text-centered">Image © Glenn Carstens-Peters via unsplash</p>
        </div>
      </section>
    </div>
  );
}
