import { createReducer } from 'redux-act';

import * as menuModule from './modules/menu.module';
import * as notificationModule from './modules/notifications.module';


export default createReducer(
  {
    ...menuModule.reducer,
    ...notificationModule.reducer,
  }
);
