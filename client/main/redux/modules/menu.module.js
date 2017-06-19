import { createAction } from 'redux-act';


export const openMenu = createAction(
  'open menu'
);

export const closeMenu = createAction(
  'close menu'
);

export const openCloseMenu = createAction(
  'open//close menu'
);

export const reducer = {
  [openMenu]: state => ({
    ...state,
    menu: {
      ...state.menu,
      isOpen: true
    }
  }),

  [closeMenu]: state => ({
    ...state,
    menu: {
      ...state.menu,
      isOpen: false
    }
  }),

  [openCloseMenu]: state => ({
    ...state,
    menu: {
      ...state.menu,
      isOpen: !state.menu.isOpen
    }
  }),
};
