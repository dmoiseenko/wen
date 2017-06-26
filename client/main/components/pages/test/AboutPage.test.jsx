import React from 'react';
import { shallow } from 'enzyme';

import AboutPage from '../AboutPage';


it('should render', () => {
  const wrapper = shallow(
    <AboutPage />
  );

  expect(wrapper.node).toMatchSnapshot();
});
