import { connect } from 'react-redux';
import { compose, mapProps } from 'recompose';
import { graphql } from 'react-apollo';

import DeleteNoteButton from './DeleteNoteButton';
import deleteNoteMutation from '../../../../common/graphql/mutation/deleteNote.graphql';
import * as module from '../../redux/modules/deleteNote.module';


export const mapDispatchToProps = {
  deleteNoteActionCreator: module.deleteNote
};

export const propsMapper = ({ mutate, deleteNoteActionCreator, noteId }) => ({
  deleteNote: () => deleteNoteActionCreator(mutate, noteId)
});

export default compose(
  connect(null, mapDispatchToProps),
  graphql(deleteNoteMutation),
  mapProps(propsMapper)
)(DeleteNoteButton);
