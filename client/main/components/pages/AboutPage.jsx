import React from 'react';
import Markdown from 'react-remarkable';
import renderHTML from 'react-render-html';


const innerHtml = `
  <h5>
    Created by <a href="mailto:dmoiseenko@mykolab.com">Denis Moiseenko</a>
  </h5>
`;

const markdownToHtml = `
  ##### All source code is available on [here](https://moiden.com/dmoiseenko/wen)
`;

const htmlToReactComponents = `
  <h5>
     <a href="https://moiden.com/dmoiseenko/wen/blob/master/LICENSE">MIT License</a>
  </h5>
`;

export default () => (
  <div className="container">
    <div className="content">
      <h2>About</h2>
      <br />

      <div dangerouslySetInnerHTML={{ __html: innerHtml }} />

      <Markdown>
        {markdownToHtml}
      </Markdown>

      {renderHTML(htmlToReactComponents)}
    </div>
  </div>
);
