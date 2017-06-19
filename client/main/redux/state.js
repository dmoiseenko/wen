import * as menu from './state/menu.state';
import * as apollo from './state/apollo.state';
import * as notifications from './state/notifications.state';


export const initial = {
  menu: menu.initial,
  apollo: apollo.initial,
  notifications: notifications.initial
};

export const test = {
  menu: menu.test,
  apollo: apollo.test,
  notifications: notifications.test
};
