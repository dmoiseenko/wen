import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import Notes from './Notes';
import getAllNotesQuery from '../../../../common/graphql/getAllNotes.graphql';
import noteAddedSubscription from '../../../../common/graphql/noteAdded.graphql';
import updatesGetAllNotesQueryResult from '../../redux/modules/notes.module';


export const mapProps = ({ data, ownProps: { dispatch } }) => ({
  notes: data.notes,
  loading: data.loading,
  subscribeToNewNotes: () => {
    data.subscribeToMore({
      document: noteAddedSubscription,
      updateQuery: updatesGetAllNotesQueryResult(dispatch)
    });
  }
});

export default compose(
  connect(),
  graphql(getAllNotesQuery, {
    props: mapProps
  }),
  lifecycle({
    componentDidMount() {
      this.unsubscribe = this.props.subscribeToNewNotes();
    },
    componentWillUnMount() {
      this.unsubscribe();
    }
  })
)(Notes);
