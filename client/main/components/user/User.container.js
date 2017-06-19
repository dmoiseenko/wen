import { graphql } from 'react-apollo';

import User from './User';
import meQuery from '../../../../common/graphql/getUser.graphql';


export default graphql(meQuery)(User);
