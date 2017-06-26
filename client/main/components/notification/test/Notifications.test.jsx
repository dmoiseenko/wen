import React from 'react';
import { shallow } from 'enzyme';

import Notifications from '../Notifications';


it('should render', () => {
  const props = {
    notifications: [
      {
        id: '2',
      }
    ]
  };

  const wrapper = shallow(
    <Notifications {...props} />
  );

  expect(wrapper.node).toMatchSnapshot();
});
