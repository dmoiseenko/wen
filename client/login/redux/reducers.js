import { createReducer } from 'redux-act';

import * as states from './state';
import * as signInModule from './modules/signIn.module';


export default createReducer(
  {
    ...signInModule.reducer
  },
  states.initial
);
