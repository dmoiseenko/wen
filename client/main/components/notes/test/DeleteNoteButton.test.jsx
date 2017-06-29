import React from 'react';
import { shallow } from 'enzyme';

import DeleteNoteButton from '../DeleteNoteButton';


it('should render', () => {
  const props = {
    deleteNote: jest.fn()
  };

  const wrapper = shallow(
    <DeleteNoteButton {...props} />
  );

  expect(wrapper.node).toMatchSnapshot();
});

it('should call deleteNote when click fires', () => {
  const deleteNote = jest.fn();

  const wrapper = shallow(
    <DeleteNoteButton
      deleteNote={deleteNote}
    />
  );

  wrapper.find('.note__delete').simulate('click');

  expect(deleteNote).toHaveBeenCalled();
});
