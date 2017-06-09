import { createAction } from 'redux-act';


export const openCloseMenu = createAction(
  'open//close menu'
);

export const reducer = {
  [openCloseMenu]: state => ({
    ...state,
    menu: {
      ...state.menu,
      isOpen: !state.menu.isOpen
    }
  }),
};
