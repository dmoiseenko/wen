import { connect } from 'react-redux';

import Logout from './Logout';
import { logout } from '../../../redux/modules/logout.module';


export const mapDispatchToProps = {
  logout
};

export default connect(null, mapDispatchToProps)(Logout);
