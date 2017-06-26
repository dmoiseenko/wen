import deepFreeze from 'deep-freeze';

import * as module from '../menu.module';


it('reduce openMenu correctly', () => {
  const stateBefore = {
    menu: {
      isOpen: false
    }
  };

  deepFreeze(stateBefore);

  const actual = module.reducer[module.openMenu](stateBefore);

  expect(actual).toMatchSnapshot();
});

it('reduce closeMenu correctly', () => {
  const stateBefore = {
    menu: {
      isOpen: true
    }
  };

  deepFreeze(stateBefore);

  const actual = module.reducer[module.closeMenu](stateBefore);

  expect(actual).toMatchSnapshot();
});

it('reduce openCloseMenu correctly', () => {
  const stateBefore = {
    menu: {
      isOpen: false
    }
  };

  deepFreeze(stateBefore);

  const actual = module.reducer[module.openCloseMenu](stateBefore);

  expect(actual).toMatchSnapshot();
});
