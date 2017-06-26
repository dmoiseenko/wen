import React from 'react';
import { shallow } from 'enzyme';

import Graph from '../Graph';


it('should render', () => {
  const wrapper = shallow(
    <Graph />
  );

  expect(wrapper.node).toMatchSnapshot();
});
