import { graphql } from 'react-apollo';
import { compose, lifecycle } from 'recompose';

import Notes from './Notes';
import notesQuery from '../../../../common/graphql/notes.graphql';
import noteAddedSubscription from '../../../../common/graphql/noteAdded.graphql';


export const subscribeToNewNotes = props => () => props.data.subscribeToMore({
  document: noteAddedSubscription,
  updateQuery: (prev, { subscriptionData }) => {
    if (!subscriptionData.data) {
      return prev;
    }

    const newNote = subscriptionData.data.noteAdded;

    return {
      ...prev,
      notes: [
        ...prev.notes,
        newNote
      ]
    };
  }
});

export default compose(
  graphql(notesQuery, {
    props: props => ({
      ...props,
      subscribeToNewNotes: subscribeToNewNotes(props)
    })
  }),
  lifecycle({
    componentDidMount() {
      this.props.subscribeToNewNotes();
    }
  })
)(Notes);
