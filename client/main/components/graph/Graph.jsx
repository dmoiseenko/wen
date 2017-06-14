import React from 'react';

import Sizer from '../../../common/components/Sizer';
import Cloth from './lattice/Lattice';

export default function Graph() {
  return (
    <div className="card graph">
      <Sizer>
        <Cloth />
      </Sizer>
    </div>
  );
}
