import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import NewNote from './NewNote';
import addNoteMutation from '../../../../common/graphql/addNote.graphql';
import { noteTextSelector } from '../../redux/selector/noteForm.selector';


export function mapStateToProps(state) {
  return {
    noteText: noteTextSelector(state)
  };
}

export const props = ({ mutate, ownProps }) => ({
  ...ownProps,
  addNote: (noteText) => {
    mutate({ variables: { text: noteText } });
  }
});

export default compose(
  connect(mapStateToProps),
  graphql(addNoteMutation, { props })
)(NewNote);
