/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';


export default function Html({ root, assets }) {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Wen</title>
        {isProduction && <link rel="stylesheet" href={assets.app.css} type="text/css" />}
      </head>
      <body>
        <div id="react-app" dangerouslySetInnerHTML={{ __html: root }} />
        {isProduction && <script type="text/javascript" src={assets.manifest.js} />}
        {isProduction && <script type="text/javascript" src={assets.vendor.js} />}
        <script type="text/javascript" src={isProduction ? assets.app.js : 'login/js/app.js'} />
      </body>
    </html>
  );
}

Html.propTypes = {
  root: PropTypes.string.isRequired,
  assets: PropTypes.object.isRequired
};

Html.defaultProps = {
  assets: {}
};

/* eslint-enable react/no-danger */
