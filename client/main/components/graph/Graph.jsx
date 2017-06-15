import React from 'react';

import Sizer from '../../../common/components/Sizer';
import Lattice from './lattice/Lattice';


export default function Graph() {
  return (
    <div className="card graph">
      <Sizer>
        <Lattice />
      </Sizer>
    </div>
  );
}
