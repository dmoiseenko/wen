import { connect } from 'react-redux';

import NavToggle from './NavToggle';
import { isOpenSelector } from '../../../redux/selector/menu.selector';
import { openCloseMenu } from '../../../redux/modules/menu.module';


export function mapStateToProps(state) {
  return {
    isOpen: isOpenSelector(state),
  };
}

export const mapDispatchToProps = {
  openCloseMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavToggle);
