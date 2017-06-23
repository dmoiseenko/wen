import React from 'react';
import { shallow } from 'enzyme';

import TopBar from '../TopBar';


it('should render', () => {
  const wrapper = shallow(
    <TopBar />
  );

  expect(wrapper.node).toMatchSnapshot();
});
