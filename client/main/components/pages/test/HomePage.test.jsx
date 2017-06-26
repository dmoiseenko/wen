import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../HomePage';


it('should render', () => {
  const wrapper = shallow(
    <HomePage />
  );

  expect(wrapper.node).toMatchSnapshot();
});
