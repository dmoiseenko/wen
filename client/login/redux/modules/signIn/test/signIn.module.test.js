import deepFreeze from 'deep-freeze';

import * as module from '../signIn.module';


describe('reducer', () => {
  const stateBefore = {
    signIn: {}
  };

  deepFreeze(stateBefore);

  it('signIn', () => {
    const actual = module.reducer[module.signIn](stateBefore);

    expect(actual).toMatchSnapshot();
  });

  it('signInSuccess', () => {
    deepFreeze(stateBefore);

    const actual = module.reducer[module.signInSuccess](stateBefore);

    expect(actual).toMatchSnapshot();
  });

  it('signInFailure', () => {
    const actual = module.reducer[module.signInFailure](stateBefore);

    expect(actual).toMatchSnapshot();
  });
});
