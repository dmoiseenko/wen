import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { compose, lifecycle, mapProps } from 'recompose';

import Notes from './Notes';
import getAllNotesQuery from '../../../../common/graphql/getAllNotes.graphql';
import noteAddedSubscription from '../../../../common/graphql/noteAdded.graphql';
import updatesGetAllNotesQueryResult from '../../redux/modules/notes.module';


export const propsMapper = ({ data }) => ({
  notes: data.notes,
  loading: data.loading
});

export function componentDidMount() {
  const { data: { subscribeToMore }, dispatch } = this.props;

  this.unsubscribe = subscribeToMore({
    document: noteAddedSubscription,
    updateQuery: updatesGetAllNotesQueryResult(dispatch)
  });
}

export function componentWillUnMount() {
  this.unsubscribe();
}

export default compose(connect(),
  graphql(getAllNotesQuery),
  lifecycle({
    componentDidMount,
    componentWillUnMount,
  }),
  mapProps(propsMapper))(Notes);
