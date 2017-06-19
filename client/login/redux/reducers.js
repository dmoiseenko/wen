import { createReducer } from 'redux-act';

import * as signInModule from './modules/signIn.module';


export default createReducer(
  {
    ...signInModule.reducer
  }
);
