import React from 'react';

import Import from '../common/Import';


export default function GraphPage() {
  return (
    <div className="container">
      <div className="content">
        <h2>Touch And Drag</h2>
      </div>
      <Import load={import('../graph/Graph')} />
    </div>
  );
}
