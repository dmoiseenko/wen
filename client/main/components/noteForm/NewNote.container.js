import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import NewNote from './NewNote';
import addNoteMutation from '../../../../common/graphql/addNote.graphql';
import { noteTextSelector } from '../../redux/selector/noteForm.selector';
import genAddNote from '../../redux/modules/newNote.module';


export function mapStateToProps(state) {
  return {
    noteText: noteTextSelector(state),
  };
}

export const mapProps = props => ({
  addNote: genAddNote(props)
});

export default compose(
  connect(mapStateToProps),
  graphql(addNoteMutation, { props: mapProps })
)(NewNote);
