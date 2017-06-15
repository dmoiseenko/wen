import { connect } from 'react-redux';

import NavToggle from './NavToggle';
import { isMenuOpenSelector } from '../../../redux/selector/menu.selector';
import { openCloseMenu } from '../../../redux/modules/menu.module';


export function mapStateToProps(state) {
  return {
    isOpen: isMenuOpenSelector(state),
  };
}

export const mapDispatchToProps = {
  openCloseMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavToggle);
