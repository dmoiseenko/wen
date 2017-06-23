import { isMenuOpenSelector } from '../menu.selector';


test('isMenuOpenSelector should get isOpen from state', () => {
  const state = {
    menu: {
      isOpen: 'is open'
    }
  };

  expect(isMenuOpenSelector(state)).toMatchSnapshot();
});
