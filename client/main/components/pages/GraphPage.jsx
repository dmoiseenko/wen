import React from 'react';

import Import from '../common/Import';


export default function GraphPage() {
  return (
    <div className="container">
      <div className="content">
        <h1>Touch And Drag</h1>
      </div>
      <Import load={import('../graph/Graph')} />
    </div>
  );
}
