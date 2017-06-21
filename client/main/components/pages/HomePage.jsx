import React from 'react';


export default () => (
  <div className="container">
    <div className="content">
      <h2>
        Welcome to <a href="https://moiden.com/dmoiseenko/wen">WEN</a>!
      </h2>
      <h5>
        This web app is showcase of React application with Server Side Rendering and GraphQL based
        communication
      </h5>
      <ul>
        <li>
          <h6>
            each client application page(route) is rendered initially on server
          </h6>
        </li>
        <li>
          <h6>
            data used for Server Side Rendering will be cached on client
            side
          </h6>
        </li>
      </ul>
      <h3>
        <a href="/notes">Notes</a>
      </h3>
      <h5>
        Example of client-server communication in multi-user application
      </h5>
      <ul>
        <li>
          <h6>
            each client application subscribes on data changes(e.g. adding a new note)
          </h6>
        </li>
        <li>
          <h6>
            when data are changed all client applications get the data update
          </h6>
        </li>
      </ul>
      <h3>
        <a href="/graph">Graph</a>
      </h3>
      <h5>
        Example of dividing application into parts
      </h5>
      <ul>
        <li>
          <h6>
            graph component is a separate bundle
          </h6>
        </li>
        <li>
          <h6>
            bundle can be either lazy loaded(before component rendering) or
            loaded on-demand(during component rendering)
          </h6>
        </li>
      </ul>
    </div>
  </div>
);
