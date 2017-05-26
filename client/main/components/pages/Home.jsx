import React from 'react';
import Import from '../common/Import';


export default () => (
  <div>
    <h2>Home data</h2>
    <Import load={import('./Wrapper')} />
  </div>
);
