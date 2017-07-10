import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { compose, lifecycle, mapProps } from 'recompose';

import Notes from './Notes';
import getAllNotesQuery from '../../../../common/graphql/query/getAllNotes.graphql';
import noteAddedSubscription from '../../../../common/graphql/subscription/noteAdded.graphql';
import noteDeletedSubscription from '../../../../common/graphql/subscription/noteDeleted.graphql';
import { updateNoteWhenNoteAdded, updateNoteWhenNoteDeleted } from '../../redux/modules/notes.module';


export const propsMapper = ({ data }) => ({
  notes: data.notes,
  loading: data.loading
});

export function componentDidMount() {
  const { data: { subscribeToMore }, dispatch } = this.props;

  this.noteAddedUnsubscribe = subscribeToMore({
    document: noteAddedSubscription,
    updateQuery: updateNoteWhenNoteAdded(dispatch)
  });

  this.noteDeletedUnsubscribe = subscribeToMore({
    document: noteDeletedSubscription,
    updateQuery: updateNoteWhenNoteDeleted(dispatch)
  });
}

export function componentWillUnmount() {
  this.noteAddedUnsubscribe();
  this.noteDeletedUnsubscribe();
}

export default compose(
  connect(),
  graphql(getAllNotesQuery, {
    options: {
      fetchPolicy: PREBUILD ? 'cache-first' : 'cache-and-network'
    }
  }),
  lifecycle({
    componentDidMount,
    componentWillUnmount,
  }),
  mapProps(propsMapper)
)(Notes);
