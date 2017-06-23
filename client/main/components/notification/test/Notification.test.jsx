import React from 'react';
import { shallow } from 'enzyme';

import Notification from '../Notification';


const props = {
  description: 'notification description',
  id: '1',
  remove: jest.fn()
};


it('should render event notification', () => {
  const wrapper = shallow(
    <Notification
      {...props}
      isEvent
      isError={false}
    />
  );

  expect(wrapper.node).toMatchSnapshot();
});

it('should render error notification', () => {
  const wrapper = shallow(
    <Notification
      {...props}
      isError
      isEvent={false}
    />
  );

  expect(wrapper.node).toMatchSnapshot();
});

it('should call remove when click fires', () => {
  const remove = jest.fn();

  const wrapper = shallow(
    <Notification
      {...props}
      remove={remove}
      isError
      isEvent={false}
    />
  );

  wrapper.find('.notification').simulate('click');

  expect(remove).toHaveBeenCalledWith('1');
});
