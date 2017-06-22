import { createReducer } from 'redux-act';

import * as signInModule from './modules/signIn/signIn.module';


export default createReducer(
  {
    ...signInModule.reducer
  }
);
