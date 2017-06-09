import { createReducer } from 'redux-act';

import * as states from './state';
import * as menuModule from './modules/menu.module';


export default createReducer(
  {
    ...menuModule.reducer,
  },
  states.initial
);
