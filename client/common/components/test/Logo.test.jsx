import React from 'react';
import renderer from 'react-test-renderer';

import Logo from '../Logo';


it('should render', () => {
  const tree = renderer.create(
    <Logo />
  );

  expect(tree.toJSON()).toMatchSnapshot();
});

it('should render large logo', () => {
  const tree = renderer.create(
    <Logo large />
  );

  expect(tree.toJSON()).toMatchSnapshot();
});
