import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import NavBar from './NavBar';
import { isMenuOpenSelector } from '../../../redux/selector/menu.selector';


export function mapStateToProps(state) {
  return {
    isOpen: isMenuOpenSelector(state)
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps),
)(NavBar);
