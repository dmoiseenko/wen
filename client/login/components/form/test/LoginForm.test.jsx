import React from 'react';
import { shallow } from 'enzyme';

import LoginForm from '../LoginForm';


describe('<LoginForm />', () => {
  const props = {
    signIn: jest.fn()
  };

  it('should render', () => {
    const wrapper = shallow(
      <LoginForm {...props} />
    );

    expect(wrapper.node).toMatchSnapshot();
  });

  it('should prevent default event action and dispatch signIn when click fires', () => {
    const signIn = jest.fn();
    const event = {
      preventDefault: jest.fn()
    };

    const wrapper = shallow(
      <LoginForm
        signIn={signIn}
      />
    );

    wrapper.find('.login-button').simulate('click', event);

    expect(signIn).toHaveBeenCalled();
    expect(event.preventDefault).toHaveBeenCalled();
  });
});
