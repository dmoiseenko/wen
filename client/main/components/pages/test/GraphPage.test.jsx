import React from 'react';
import { shallow } from 'enzyme';

import GraphPage from '../GraphPage';


it('should render', () => {
  const wrapper = shallow(
    <GraphPage />
  );

  expect(wrapper.node).toMatchSnapshot();
});
