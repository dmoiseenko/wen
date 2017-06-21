import React from 'react';
import renderer from 'react-test-renderer';

import Aside from '../Aside';


describe('<Aside />', () => {
  const props = {};

  it('should render', () => {
    const tree = renderer.create(
      <Aside {...props} />
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
