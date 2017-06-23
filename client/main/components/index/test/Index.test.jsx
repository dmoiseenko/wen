import React from 'react';
import { shallow } from 'enzyme';

import Index from '../Index';


it('should render', () => {
  const wrapper = shallow(
    <Index />
  );

  expect(wrapper.node).toMatchSnapshot();
});
