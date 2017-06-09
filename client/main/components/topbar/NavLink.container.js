import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import NavLink from './NavLink';
import { openCloseMenu } from '../../redux/modules/menu.module';


export function mapStateToProps(state, { route, label }) {
  return {
    label,
    route
  };
}

export const mapDispatchToProps = {
  openCloseMenu
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(NavLink);
