import React from 'react';
import renderer from 'react-test-renderer';

import Title from '../Title';


describe('<Title />', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Title />
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
