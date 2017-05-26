import { createReducer } from 'redux-act';

import * as states from './state';


export default createReducer(
  {
    // ...inventoryMachineReceiveModule.reducer,
  },
  states.initial
);
