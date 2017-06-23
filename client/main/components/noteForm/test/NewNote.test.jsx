import React from 'react';
import { shallow } from 'enzyme';

import NewNote from '../NewNote';


it('should render', () => {
  const props = {
    addNote: jest.fn()
  };

  const wrapper = shallow(
    <NewNote {...props} />
  );

  expect(wrapper.node).toMatchSnapshot();
});

it('should call addNote when click fires', () => {
  const addNote = jest.fn();
  const event = {
    preventDefault: jest.fn()
  };

  const wrapper = shallow(
    <NewNote
      addNote={addNote}
    />,
  );

  wrapper.find('.button').simulate('click', event);

  expect(event.preventDefault).toHaveBeenCalled();
  expect(addNote).toHaveBeenCalled();
});
