import React from 'react';

import Import from '../common/Import';


export default function GraphPage() {
  return (
    <div className="container">
      <h1 className="subtitle is-2">
        Touch and Drag
      </h1>
      <Import load={import('../graph/Graph')} />
    </div>
  );
}
