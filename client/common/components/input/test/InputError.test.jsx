import React from 'react';
import renderer from 'react-test-renderer';

import InputError from '../InputError';


it('should render', () => {
  const props = {
    error: 'error'
  };

  const tree = renderer.create(
    <InputError {...props} />
  );

  expect(tree.toJSON()).toMatchSnapshot();
});

it('should not render if no error', () => {
  const props = {};

  const tree = renderer.create(
    <InputError {...props} />
  );

  expect(tree.toJSON()).toMatchSnapshot();
});
