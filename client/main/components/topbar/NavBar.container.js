import { connect } from 'react-redux';

import NavBar from './NavBar';
import { isOpenSelector } from '../../redux/selector/menu.selector';


export function mapStateToProps(state) {
  return {
    isOpen: isOpenSelector(state)
  };
}

export default connect(mapStateToProps)(NavBar);
