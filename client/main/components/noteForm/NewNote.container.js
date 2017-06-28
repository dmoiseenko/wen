import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { compose, mapProps } from 'recompose';

import NewNote from './NewNote';
import addNoteMutation from '../../../../common/graphql/mutation/addNote.graphql';
import { addNote as addNoteActionCreator } from '../../redux/modules/newNote.module';


export const mapDispatchToProps = {
  addNoteActionCreator
};

export const propsMapper = ({ mutate, addNoteActionCreator: addNoteAction }) => ({
  addNote: () => addNoteAction(mutate)
});

export default compose(
  connect(null, mapDispatchToProps),
  graphql(addNoteMutation),
  mapProps(propsMapper)
)(NewNote);
