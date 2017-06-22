import React from 'react';
import { shallow } from 'enzyme';

import LoginPage from '../LoginPage';


it('should render', () => {
  const props = {};

  const tree = shallow(
    <LoginPage {...props} />
  );

  expect(tree.node).toMatchSnapshot();
});
